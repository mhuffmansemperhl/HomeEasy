export default function extractAddressInfo(addressComponents) {
    if (addressComponents === undefined) {
        return null;
    }
    const addressInfo = {
        streetAddress: "",
        city: "",
        state: "",
        zipcode: ""
    };

    addressComponents.forEach(component => {
        if (component.types.includes("street_number")) {
            addressInfo.streetAddress = component.long_name;
        }
        if (component.types.includes("route")) {
            addressInfo.streetAddress += ` ${component.long_name}`;
        }
        if (component.types.includes("locality")) {
            addressInfo.city = component.long_name;
        }
        if (component.types.includes("administrative_area_level_1")) {
            addressInfo.state = component.short_name;
        }
        if (component.types.includes("postal_code")) {
            addressInfo.zipcode = component.long_name;
        }
    });

    return addressInfo;
}
