"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

export const GtmAnalytics = () => {
    const searchParams = useSearchParams();
	useEffect(() => {
		const utmSource = searchParams.get("utm_source");
		const utmMedium = searchParams.get("utm_medium");
		const utmCampaign = searchParams.get("utm_campaign");

		// Check if UTM parameters are present in the URL
		if (utmSource || utmMedium || utmCampaign) {
			// Store UTM parameters in session storage
			sessionStorage.setItem("utm_source", utmSource);
			sessionStorage.setItem("utm_medium", utmMedium);
			sessionStorage.setItem("utm_campaign", utmCampaign);
		}
	}, [searchParams]);
  return null
}
