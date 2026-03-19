import { Storage } from "@google-cloud/storage";

const credentials = {
  "type": "service_account",
  "project_id": process.env.PROJECT_ID || "reverse-rate-search-admin",
  "private_key_id": process.env.PRIVATE_KEY_ID || "62c6455acdecb40619cff10017875835dfc0062c",
  "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.CLIENT_EMAIL || "firebase-adminsdk-uwhk5@reverse-rate-search-admin.iam.gserviceaccount.com",
  "client_id": process.env.CLIENT_ID || "118347243414798682375",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL || "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uwhk5%40reverse-rate-search-admin.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

const storage = new Storage({
  credentials,
  projectId: "reverse-rate-search-admin"
});

const bucketName = "reverse-rate-search-admin.firebasestorage.app";

/**
 * Generates a temporary signed URL for an image in GCS
 * @param {string} fileName - The path to the file in the bucket
 */
async function getImageUrl(fileName) {
  try {
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(fileName);

    const options = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000,
    };

    const [url] = await file.getSignedUrl(options);
    return url;
  } catch (error) {
    console.error("Error generating signed URL:", error);
    throw new Error("Failed to fetch image from storage.");
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('file');

    if (!fileName) {
      return new Response(
        JSON.stringify({ error: 'File name is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const url = await getImageUrl(fileName);
    return new Response(
      JSON.stringify({ url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}