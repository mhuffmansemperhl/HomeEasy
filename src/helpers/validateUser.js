export function validateUser(email, firstName, lastName, phoneNumber ) {
    const errors = {};
  
    // Email validation (basic format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }
  
    // First name validation (only letters, at least 2 characters)
    const nameRegex = /^[a-zA-Z]{2,}$/;
    if (!firstName || !nameRegex.test(firstName)) {
      errors.firstName = "Invalid first name (letters only, at least 2 characters)";
    }
  
    // Last name validation (only letters, at least 2 characters)
    if (!lastName || !nameRegex.test(lastName)) {
      errors.lastName = "Invalid last name (letters only, at least 2 characters)";
    }

    // Phone number validation
    const phoneRegex = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber.trim())) {
      errors.phoneNumber = "Invalid phone number";
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
  