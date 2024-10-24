export default function getZipCode(addressComponents) {
    for (let component of addressComponents) {
        if (component.types.includes("postal_code")) {
            return component.long_name;
        }
    }
    return null; // Return null if no postal code is found
}