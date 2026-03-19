export const reviewHelper = (reviews) => {
	if (!reviews?.reviews) {
		return [];
	}

	const reviewData = reviews?.reviews?.map((review) => {
		return {
			name: review.reviewerName.displayName,
			review: review.content,
			date: formatReviewData(review.dateOfService),
			profileUrl: reviews.profileURL,
			rating: review.rating,

		};
	});

	return reviewData.filter((review) => review != null && review.rating == 5);
};

const formatReviewData = (date) => {
	if (!date) {
		return "Closed";
	}

	const [year, month] = date.split("-");

	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December",
	];

	return `Closed ${monthNames[parseInt(month) - 1]} ${year}`;
};