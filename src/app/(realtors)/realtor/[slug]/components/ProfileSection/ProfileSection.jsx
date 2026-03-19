import Image from 'next/image'
import React from 'react'
import styles from './ProfileSection.module.css'
import useScreenSize from '../../../../../../hooks/useScreenSize';

export const mapsUrlHelper = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    return mapsUrl;
}

export const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
}

const ProfileSection = ({
    // Providing Dummy Data as default props
    name,
    bookACall,
    phone,
    position = "Realtor",
    profileImage = "",
    isopened = false,
    facebookURL,
    instagramURL,
    linkedinURL,
    email,
    startPreApprovalUrl,
    licenseNumber
}) => {
    const { isMobile } = useScreenSize();

    const buttonsArray = [
        { label: "Start Pre-Approval", icon: "/semper_icon.svg", link: startPreApprovalUrl },
        { label: "Book A Call", icon: "/calendar.svg", link: bookACall },
        { label: "Email", icon: "/email.svg", link: `mailto:${email}` },
        { label: formatPhoneNumber(phone), icon: "/phone.svg", link: isMobile ? `tel:${phone}` : null },
    ];

    const socialMediaArray = [
        { icon: "/fbicon.svg", link: facebookURL },
        { icon: "/igicon.svg", link: instagramURL },
        { icon: "/linkedin.svg", link: linkedinURL }
    ];

    const hasAnySocialMediaLink = socialMediaArray.some(social => social.link);

    // Combine classes for the sidebar
    const containerClasses = `${styles.profileContainer} ${isopened ? styles.isOpened : ''}`;

    return (
        <aside className={containerClasses}>
            <div className={styles.imageContainer}>
                {profileImage ? (
                    <Image 
                    src={profileImage} 
                    alt="avatar" 
                    width={128} 
                    height={128} 
                    className={styles.profileImage} 
                />) : (
                    "..."
                )
                    }
                
            </div>

            <div className={styles.agentInfoSection}>
                <h3>{name}</h3>
                <p style={{margin: 0}}>{position}</p>
                <p style={{margin: 0}}>Lic# {licenseNumber}</p>
            </div>

            <div className={styles.buttonsContainer}>
                {buttonsArray.map((button, index) => (
                    <a 
                        key={index} 
                        href={button.link || undefined} 
                        target='_blank' 
                        rel="noreferrer"
                        className={`${styles.styledButton} ${button.link ? styles.hasLink : styles.noLink}`}
                    >
                        <Image src={button.icon} alt="" width={18} height={18} />
                        <p className={styles.styledLinkText}>{button.label}</p>
                    </a>
                ))}
            </div>

            <div className={styles.socialMediaContainer}>
                {hasAnySocialMediaLink && socialMediaArray.map((social, index) => (
                    social.link && (
                        <a key={index} href={social.link} target='_blank' rel="noreferrer">
                            <Image src={social.icon} alt="Social icon" width={24} height={24} />
                        </a>
                    )
                ))}
            </div>
        </aside>
    )
}

export default ProfileSection;