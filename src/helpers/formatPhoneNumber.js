export const formatPhoneNumber = (value) => {
	// Remove all non-digit characters
	const cleaned = value.replace(/\D/g, "");

	// Format the cleaned number according to (XXX) XXX-XXXX, (XXX) XX, or XX
	const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

	if (match) {
		if (cleaned.length <= 3) {
			return cleaned;
		}

		if (cleaned.length <= 6) {
			const formatted = `(${match[1]}${match[1] ? ")" : ""} ${match[2]}`;
			return formatted.trim();
		}

		const formatted = `(${match[1]}${match[1] ? ")" : ""} ${match[2]}${match[2] ? "-" : ""}${match[3]}`;
		return formatted.trim();
	}

	return value;
};
