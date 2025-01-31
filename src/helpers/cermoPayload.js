import extractAddressInfo from "./extractAddressInfor";

export default function cermoPayload(data) {
    const { 
        flow, 
        contact,
        buy_address,
        sell_address,
        motivating_to_buy,
        what_would_you_like_to_do_next_buy,
        looking_to_sell,
        learn_more_about_heh = "NA", 
        relationship_to_home,
        signed_seller_agreement_agent = "NA",
        agent_looking_for_instant_offer = "NA",
        got_it_how_can_we_help = "NA",
    } = data;
    
    let payload = {
        flow,
        ...contact,
    };

    const buyAddressInfo = extractAddressInfo(buy_address?.address_components);
    const sellAddressInfo = extractAddressInfo(sell_address?.address_components);

    if (flow === "buy"){
        payload = {
            ...payload,
            ...buyAddressInfo,
            motivating_to_buy,
            what_would_you_like_to_do_next_buy,
            whatWouldYouLikeToLearn: learn_more_about_heh
        }
    }

    if (flow === "sell"){
        payload = {
            ...payload,
            ...buyAddressInfo,
            ...sellAddressInfo,
            relationship_to_home,
            signed_agreement_with_agent: signed_seller_agreement_agent,
            instant_offer_or_listing_expiring_soon: got_it_how_can_we_help,
            agent_looking_for_instant_offer,
        }
    }

    if (flow === "sellbuy"){
        
        payload = {
            ...payload,
            buyAddress: buy_address.formatted_address,
            sell_address: sell_address.formatted_address,
            looking_to_sell,
            signed_agreement_with_agent: signed_seller_agreement_agent,
            instant_offer_or_listing_expiring_soon: got_it_how_can_we_help,
        }
    }

    if (flow === "instantoffer") {
        payload = {
            ...payload,
            ...sellAddressInfo,
            relationship_to_home,
        }
    }


    return payload;
  
};
