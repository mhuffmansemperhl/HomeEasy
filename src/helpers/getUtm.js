export const getUtm = () => {
	//get UTM parameters from session storage
	const utmSource = sessionStorage.getItem("utm_source") || "";
	const utmMedium = sessionStorage.getItem("utm_medium") || "";
	const utmCampaign = sessionStorage.getItem("utm_campaign") || "";

	return { utmSource, utmMedium, utmCampaign };
};