"use client"
import styles from './Electronic.module.scss';
import useWindowSize from '../../hooks/useWindowSize';

const Electronic = () => {


    const size = useWindowSize();


    return (
        <div  className={styles['main-component']}>
            <div className={`${styles['main-content-container']} centered-content2`}>
                <div className={`${styles['tos-content-container']}`}>

 <p>HomeEasy Homes is committed to providing fair and equitable service, including housing opportunities, in a manner that is free from unlawful discrimination of any kind. Employees, contractors, and representatives of HomeEasy Homes, and licensees who partner with HomeEasy Homes, must abide by HomeEasy Homes’ fair housing policy at all times, which means, at a minimum, complying with all federal, state and local fair housing laws.</p>
 <p>HomeEasy Homes has zero tolerance for violations of fair housing laws and strictly prohibits discrimination in the provision of any of HomeEasy Homes’ services on the basis of race, color, religion, creed, sex, marital status, sexual orientation, gender identity, familial status (including pregnancy, or having children), age, national origin, citizenship or immigration status, the presence of any sensory, mental, or physical disability including recovering from substance abuse, honorably discharged veteran or military status, source of income (including receipt of income from federal, state and local housing assistance programs, housing choice vouchers, emergency assistance payments, Social Security Supplemental Security Income, unemployment insurance payments, alimony, veterans’ benefits, and disability benefits payments), or any other class protected under state, federal and local laws.</p>
 <p> Prohibited practices may include, but are not limited to, the following behaviors, whether overt or indirect:</p>
 <ul>
    <li>Denying professional services based on a person being a member of a protected class.</li>
    <li>Being a party to any plan or agreement to discriminate based on a person being a member of a protected class.</li>
    <li>Refusing to show or sell a property to a person because that person is a member of a protected class.</li>
    <li>Refusing to list or show a property in a particular geographic area because of the presence or absence of members of protected classes in that area.</li>
    <li>Representing that a property is or is not available for sale, when the property is in fact available, to a member of a protected class, because of that person’s membership in a protected class.</li>
    <li>Providing inaccurate or incomplete information about a property to a person because that person is a member of a protected class. Different treatment or disparate treatment to persons based on their membership in a protected class.</li>
    <li>Steering or guiding potential homebuyers to selected properties or areas based on their membership in, or non-membership in, a protected class, or based on their perceived desire to live in an area based on the presence or absence of members of protected classes in that area.</li>
    <li>Any statement (including in advertising, marketing, property listings, etc.), whether direct or indirect, that discriminates or otherwise expresses any preference or limitation based on someone’s membership in, or nonmembership in, a protected class.</li>
    <li>Marketing or targeting service based on people’s membership or nonmembership in a protected class.</li>
    <li>Harassment based on a person’s membership in a protected class.</li>
    <li>Applying different, or more burdensome criteria to individuals based on their membership in a protected class.</li>
    <li>Retaliating against a person for reporting a discriminatory practice, or for participating in an investigation into alleged discrimination.</li>
    <li>Blockbusting, which is defined as any illegal, discriminatory practice whereby an agent induces a property owner to list her property by suggesting that people of a particular protected characteristic are about to move into the neighborhood.</li>
 </ul>
<p>Employees, contractors, licensees and representatives of HomeEasy Homes are prohibited from engaging in any conduct in violation of this policy and may be subject to disciplinary action, up to and including termination, for violations of this policy.</p>

                </div>
            </div>

        </div>
    );
};

export default Electronic;
