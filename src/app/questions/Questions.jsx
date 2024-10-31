import { useState, useEffect } from 'react';
import styles from './Questions.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import useFlowGetStartedStore from "@/store/store.js"
import useGoogleTagManager from "@/hooks/useGoogleTagManager";

const Questions = () => {

    // const [selectedTab, setSelectedTab] = useState(0);
    const windowSize = useWindowSize();
    const [dataLayer, doEventClick, gtmPush] = useGoogleTagManager();

    const selectedTab = useFlowGetStartedStore(state => state.selected_questions_tab_index);
    const setSelectedTab = useFlowGetStartedStore(state => state.setSelectedQuestionsTabIndex);



    // function changeIndex(idx) {
    //     setSelectedIndex(idx);
    //   }

    const questions0 = [
        {
            title: "This sounds too good to be true.  What&apos;s the catch here?",
            copy: "You know, we get that a lot.  But the truth is it&apos;s not too good to be true, it&apos;s just the way things should be.  By automating parts of the home buying process, our agents are able to work more efficiently for less commission.   And with our long lasting relationships with local attorneys, title companies, escrow companies, and mortgage lenders, you can save thousands more when working with our preferred partners.",
            visible: true,
        },
        {
            title: "How is HomeEasy Homes different than other real estate technology companies?",
            copy: "HomeEasy Homes breaks the mold of typical real estate tech companies, as it was created by industry experts who saw the need to eliminate outdated strategies and processes.  We wanted to make selling a home easier and less stressful, providing you with simplicity, choices, and peace of mind. We&apos;ve taken out the headaches and hassles, giving you control over the process of selling and buying your home, because we understand that it&apos;s not just a house—it&apos;s your home. You call the shots, and we&apos;ll be there to help you find the ideal solution for all your real estate needs.",
            visible: false,
        },
        {
            title: "In what states does HomeEasy Homes sell and buy homes?",
            copy: "Rhode Island, Massachusetts, and Connecticut.  More states coming soon!",
            visible: false,
        },
        {
            title: "What services do you provide?",
            copy: "Looking to sell, buy, or get a loan for your home? Look no further! At HomeEasy Homes, we&apos;ve got everything you need, in one convenient place.<br/><br/>When it comes to selling your home, we&apos;ve got you covered.  Receive a no-hassle, all-cash offer within just 24 hours.  If you prefer, you can also choose to list your home with us, the stress-free, money-saving way for only 1% commission.  Plus, while your home is on the market, enjoy the peace of mind that comes with a backup cash offer.  It&apos;s a win-win!<br/><br/>Ready to find your dream home? Our buyer services are designed to make it a breeze.  With the help of dedicated local HomeEasy real estate agents, you can explore thousands of listings and discover the perfect fit for your needs.  And here&apos;s the exciting part: you get an exclusive sneak peek at HomeEasy homes before they even hit the market.<br/><br/>Need a loan? We are here to assist you.  Whether you require help with a down payment or want to avoid mortgage insurance, we&apos;ve got your back.  Get pre-approved in minutes, not days, and gain a distinct advantage over other buyers in this fiercely competitive market.<br/><br/>There&apos;s more! By bundling our services, you can save even more money!  Sell and buy with us and you could save thousands!  Imagine reducing your down-payment, cover closing costs, or even buying down the interest rate on your mortgage.",
            visible: false,
        },
        {
            title: "Do I have to sign anything to get started?",
            copy: "While we don&apos;t require an exclusive agency agreement from buyers, if you choose to list your property with us, it is customary in the industry for us to ask you to sign one.",
            visible: false,
        },
        {
            title: "Will I be able to sit down with my Realtor in person?",
            copy: "Yes of course! Your Realtor is a REAL person who would love to meet you, sit down with you, and go over everything to ensure a smooth transition.",
            visible: false,
        },
        {
            title: "Will my Realtor handle everything from beginning to end?",
            copy: "Yes, your Realtor will handle everything from beginning to end and everything in between! This is the same as any other home sale, the only difference is the Realtor is putting more money in your pocket by working for less commission!",
            visible: false,
        },
        {
            title: "I'm not a tech wiz, is that going to affect me using HomeEasy Homes?",
            copy: "Absolutely not! Your Realtor is here for you every step of the way! You can relax knowing that you don’t have to stress about technology or everything being digital. They've got you covered!",
            visible: false,
        },
        {
            title: "Will I have full control over my transaction?",
            copy: " No one is going to force you to do anything, however once you sign an offer and P&S there are the standard consequences in dissolving a transaction.",
            visible: false,
        },
        {
            title: "How long does it normally take to buy/sell a house?",
            copy: "There are a lot of factors that go into selling a home and getting to the closing table.Once the P&S is signed and the loan starts processing, it should be about 30 days when using our Preferred Lender to process your loan.",
            visible: false,
        },
    ];

    const questions1 = [
        {
            title: "Now Beta Testing in select zip codes<sup>2</sup>!",
            copy: "Listing with us? We handle all the necessary steps to make your home show worthy and ensure you get top dollar.  Our comprehensive services cover everything you need, including listing your home, taking professional photos that truly showcase your home, and even a virtual tour to showcase your property.  We also go the extra mile with extensive marketing efforts, a pre-inspection report, and hosting engaging Open Houses.  Rest assured, we&apos;ve got you covered every step of the way.  And in case you forgot, for only 1% commission.",
            visible: true,
        },
        {
            title: "What types of homes do you make cash offers on?",
            copy: "We can only buy homes within our service areas and if the seller has clear ownership of the property.  Types of homes include single family homes, townhomes, duplexes, and condos.  We consider many factors when making an offer including the home's materials and overall condition.  The criteria below may impact our ability to make an InstantOffer:<br/><br/>• Your home is being sold as a short sale or foreclosure<br/>• Your home has un-permitted additions<br/>• Significant foundation issues, or was damaged by floods, fire, or other natural disasters<br/>• Your home has dated materials<br/>• Your home has active organic growth",
            visible: false,
        },
        {
            title: "How do you assess my home's value?",
            copy: "Our dedicated research team delves into every detail, from your home's unique features to neighborhood trends and current market dynamics.  We conduct a thorough analysis by comparing your home to similar properties in the area, considering factors like square footage, number of bedrooms, and more.  By examining the selling and pending prices of these comparable homes, as well as assessing the overall market conditions, we gain valuable insights.<br/><br/>Why do we go through this process?  Well, nearby homes provide a reliable benchmark for gauging how much potential buyers may be willing to pay for your property.  Additionally, studying the market as a whole helps us understand the level of demand.   If there's a shortage of listed homes, it often leads to price increases, ultimately boosting the value of your own home.<br/><br/>Rest assured, we leave no stone unturned when it comes to researching and analyzing the factors that influence the market value of your home.  By staying informed and up-to-date, we can provide you with accurate and reliable information to make the best decisions throughout the selling process.",
            visible: false,
        },
        {
            title: "How do I request an instant cash offer from HomeEasy Homes?",
            copy: "If you are looking for a fast, easy, stress-free way of selling your home, all you need to do is <a href='/get_started?flow=sell&step=0&branch=9'> request an InstantOffer</a>.  Don't worry, the process is simple, fast, and completely obligation free.  Just enter in your address and we'll guide you through a few brief questions about the condition, features, and upgrades of your home.  We genuinely want to understand all the unique aspects that make your home special, and we'll take these details into account when creating your personalized InstantOffer.",
            visible: false,
        },
        {
            title: "How fast will I receive my InstantOffer?",
            copy: "Well just as the name suggests…pretty instant!  Typically, you will be provided with a cash offer within 24 hours.",
            visible: false,
        },
        {
            title: "Does my InstantOffer expire?",
            copy: "Yes.  Because home values often change based on the market's activity, our cash offers usually expire within 4 days from the date of the offer.  However, we are happy to provide you with an updated offer.  The updated offer may be unchanged, high, or lower than your previous InstantOffer.",
            visible: false,
        },
        {
            title: "What happens to my house after I sell it to HomeEasy Homes?",
            copy: "Typically we do some light renovations to get your home market-ready, such as upgrading appliances, painting, installing new carpet or countertops.  We take on all of the to costs, risks, and hassles of selling a home.",
            visible: false,
        },
        {
            title: "What costs are involved when I sell my home with HomeEasy Homes?",
            copy: "As the listing agent, we only charge 1% vs the national average of 6% of your home&apos;s final purchase amount for our all-inclusive services.  As the seller, you are also required to pay the buyer&apos;s agent commission, which typically ranges between 2.5-3%, depending on the market.  Additional fees include any local taxes and closing costs associated with the state&apos;s legal requirements. Available in select zip codes<sup>2</sup>     ",
            visible: false,
        },
        {
            title: "Is there anything I should do to prep my home for selling?",
            copy: "Let's get you set up with one of our Preferred Agents so they can walk you through what you could do to prep your home to get it in the best shape possible to sell. But don't worry, their suggestions are exactly that... a suggestion, ultimately, it's up to you how much prep you want to do, if any. ",
            visible: false,
        },
        {
            title: "As a Seller, how long do I have to respond to an offer?",
            copy: " There is no legal deadline, but the ideal timeline is 24 to 48 hours. ",
            visible: false,
        },
        {
            title: "What does contingent mean when selling a home?",
            copy: " Contingent or contingency means the sale of the home is dependent on something, so the buyer has additional conditions before finalizing the sale. For example, a lot of the time a home sale is contingent pending a home inspection and appraisal of a property. Once both of those things come back to the buyer’s liking, proceed with the home sale. ",
            visible: false,
        },
        {
            title: "How much are closing costs when selling a home?",
            copy: " It depends which state you're in, it also depends upon many factors like taxes, mortgage payoff, property closing costs, etc. You can use a seller closing cost calculator to get a proper estimate of how much you will need to pay in the real estate transaction. ",
            visible: false,
        },
        {
            title: "Who is responsible for closing costs when purchasing/selling a home?",
            copy: "Both the buyer and seller are responsible for their own set of closing costs, which include the origination and underwriting of a mortgage, taxes, insurance, and record filing. But remember some things can be negotiated!",
            visible: false,
        },
        {
            title: "What Is Fair Market Value?",
            copy: "Fair market value is what the current state of the housing market is in. Every town, city, and even street is different! It’s important you partner with a Realtor who is going to get the most for your home and give you the most accurate information to make an informed decision on what to sell your home for. You don’t want to over price and you also don’t want to underprice.",
            visible: false,
        },
    ];
    
    const questions2 = [
        {
            title: "What are the perks of buying a home with HomeEasy Homes?",
            copy: "We like to think that there are many!  We&apos;ll connect you with a top-notch, local real estate agent who genuinely cares about your needs and knows your neighborhood like the back of their hand.  Rest assured we always have your best interest at heart.  Your agent is there to guide you every step of the way, ensuring your home buying journey is smooth, successful, and tailored to your unique situation.  HomeEasy buyers also have instant access to homes and exclusive alerts before some homes even hit the market.",
            visible: true,
        },
        {
            title: "How does buying a home from you work?",
            copy: "Just like buying a home with a traditional broker – just a lot easier.  Everything you need to get started is right here at your fingertips.  Click through homes, 3D floor plans, virtual tours, detailed home descriptions, and location maps.  We even have built in payment calculators to help you estimate your monthly costs.<br /><br />Found a home that catches your eye? Right from the listing page, you will be instantly matched with one of our friendly local real estate experts.  They&apos;re ready to provide you with the personalized guidance and support you need throughout your homebuying journey.<br /><br />No need to stress or search endlessly – we&apos;ve simplified the process to make it seamless and enjoyable for you.  So go ahead and start searching for your dream home right here, right now.  Your next home is just a click away!",
            visible: false,
        },
        {
            title: "So, I&apos;m ready to put an offer in on a home, what&apos;s next?",
            copy: "Congrats! You found a home you love! We will start the process by matching you with a top local real estate expert who is there to guide you every step of the way, ensuring your homebuying journey is smooth, successful, and tailored to your unique needs.  From there, your agent will reach out and review your offer and answer any questions you may have.  They can also refer you to one of our mortgage experts to get you pre-approved and increase your buying power.  Once you and your agent come up with an offer you are comfortable with, you&apos;ll be able to sign and submit it digitally.<br/><br/>If your offer is accepted, your agent will draft a purchase agreement for both parties to sign.  Once the T&apos;s are crossed and the I&apos;s are dotted, you are officially in escrow.<br/><br/>If your offer is not accepted, we know it can be heartbreaking, but your agent will remain by your side and there to land the next one!",
            visible: false,
        },
        // {
        //     title: "Are there any fees associated with buying a home with HomeEasy Homes?",
        //     copy: "As a buyer, we typically charge a fee of 1% of the purchase price, or $5,000, whichever ends up being greater. Also, don't forget about the usual expenses that come with buying a home, such as the down payment, inspection fee, appraisal fee, and closing costs. We're here to help guide you through it all!",
        //     visible: false,
        // },
        {
            title: "I have to sell my house before I buy.  Can HomeEasy Homes help with that?",
            copy: "Absolutely! We&apos;re all about helping you save some serious cash when you take advantage of bundling our services.  We&apos;ve got your back.  We can even assist you with securing a loan for your next dream home.<br/><br/>Talk with your agent for more details about the best ways to bundle our services and to see how much you can save selling and buying with HomeEasy Homes.",
            visible: false,
        },
        {
            title: "Is there anything I should do before I start the process to purchase a home?",
            copy: "Yes, get your finances in order. We can link you up with our Preferred Lender so they can start the pre-approval process. This will help you understand where you stand financially, what you can afford today, and what you need to do to get your credit or circumstances in order, so you have real expectations and action items on what to do to get you to where you need to be. A pre-approval is also a great way to strengthen your offer because it shows the seller serious intent, confirms your financial capability, speeds up the homebuying process, and reduces the risk of a deal falling through.",
            visible: false,
        },
        {
            title: "What is the best way to find out about homes for sale, so I don't miss out on my dream home?",
            copy: "Let's get you set up with one of our Preferred Agents to get the conversation going on where you are in your buying process. From there they will understand your criteria and what you're looking for and can get you set up on MLS.",
            visible: false,
        },
        {
            title: "Do I need to have a home inspection?",
            copy: " Home inspections are for the buyer’s wellbeing, however it is also a tool that is used for leverage when putting in an offer. The seller can sell a property as-is, but a home inspection is always encouraged from the buyer’s agent so the buyer knows what they’re in for.",
            visible: false,
        },
        {
            title: "What happens if a property gets appraised as lower than the loan amount?",
            copy: " The buyer is responsible for making up the difference in cash outside of the loan or walking away from the home sale. Usually there is a contingency in the offer of the home appraising for the price the buyer is offering to pay.",
            visible: false,
        },
        {
            title: "Who is responsible for closing costs when purchasing/selling a home?",
            copy: " Both the buyer and seller are responsible for their own set of closing costs, which include the origination and underwriting of a mortgage, taxes, insurance, and record filing. But remember some things can be negotiated!",
            visible: false,
        },
        {
            title: "Why does the appraisal matter when buying/selling a house?",
            copy: "The appraisal is done by a third party that the lender hires to give an unbiased, fair market value for what the house is worth in today’s market and in the condition it is in. If the home appraises for over or under what the buyer is paying it can make or break a deal.",
            visible: false,
        },
        {
            title: "What Is An Earnest Money Deposit?",
            copy: 'AKA a "good faith deposit", is when a buyer puts a deposit down before closing on a property to show they are serious about purchasing the property.',
            visible: false,
        },

    ];
    const questions3 = [
        {
            title: "Do I have to leave my brokerage to become a HomeEasy Homes Preferred Agent?",
            copy: "Nope! You can stick with your current brokerage, the only difference is you get extra referral business from HomeEasy Homes.",
            visible: true,
        },
        {
            title: "Will I receive both buyer and seller leads?",
            copy: " Yes, although most of our leads are buyers.",
            visible: false,
        },
        {
            title: "How many referrals can I expect?",
            copy: "That will depend on the market, season, and inventory.",
            visible: false,
        },
       
        {
            title: " Bummer you aren’t in my area. What can I do?",
            copy: "We are expanding into new markets! If you are interested, please inquire and we will reach out as soon as we make it to your area.",
            visible: false,
        },
        {
            title: "What is my commission as a buyer’s agent?",
            copy: "While we do require a 1% commission when representing our sellers, HomeEasy Homes does not place restrictions on our buyers agents",
            visible: false,
        },
        {
            title: "Am I marketing the property like I would normally?",
            copy: "Yes, just like any property, each listing is unique, so you'd want to market their property to shed the best light on the listing. We do however, require each of our 1% listings to have a minimum of two open houses.",
            visible: false,
        },
        {
            title: "Does HomeEasy home take a portion of the commission? If so, how much?",
            copy: "HomeEasy Homes takes 35% of the commission if they are a preferred agent.",
            visible: false,
        },
        {
            title: "Do you have any realtors I can speak to about their experience with HomeEasy Homes?",
            copy: "Yes! Which state are you in? Let's talk!",
            visible: false,
        },
        {
            title: "Why would I want to get buyer or seller referrals from HomeEasy Homes?",
            copy: "Sellers (and buyers) are becoming more and more savvy and the NAR settlement has educated them to the fact that commissions are negotiable. Sellers today are looking to make the most money on the sale of their home. If they were not seeking out HomeEasy Homes, they most likely would be resorting to other options like flat fee listings, FSBO, & sites that have a very similar model. We want to partner with realtors who understand that the landscape is changing and want smooth and fast transactions from beginning to end.",
            visible: false,
        },
       
       
    ];

    const [questions, setQuestions] = useState(questions0);      

    useEffect(() => {
        // Update questions array based on selected tab index
        if(selectedTab === 0) {
            setQuestions(questions0);
        }
        if(selectedTab === 1) {
            setQuestions(questions1);
        }
        if(selectedTab === 2) {
            setQuestions(questions2);
        }
        if(selectedTab === 3) {
            setQuestions(questions3);
        }
    }, [selectedTab]); // Run this effect whenever selectedTab changes

    function toggleQuestion(index) {
        // Function to toggle question visibility
        const updatedQuestions = questions.map((item, i) => {
            if(i === index) {
                return {
                    ...item,
                    visible: !item.visible
                };
            } else {
                return {
                    ...item,
                    visible: false
                };
            }
        });
        setQuestions(updatedQuestions);
    }

    function changeTab(index) {
        // Function to change the selected tab
        setSelectedTab(index);
        // Update questions array based on selected tab index
        if(index === 0) {
            setQuestions(questions0);
        }
        if(index === 1) {
            setQuestions(questions1);
        }
        if(index === 2) {
            setQuestions(questions2);
        }
        if(index === 3) {
            setQuestions(questions3);
        }
    }
    return (
        <div  className={styles['main-component']}>
                <div className={`${styles['main-component-content-container']} centered-content`}>
                    <div className={styles['main-component-tabs-container']}>
                    <div onClick={()=>{changeTab(0);}} className={selectedTab === 0 ? styles['main-component-tab-selected'] : styles['main-component-tab']}>General</div>
                    <div onClick={()=>{changeTab(1);}} className={selectedTab === 1 ? styles['main-component-tab-selected'] : styles['main-component-tab']}>Sellers</div>
                    <div onClick={()=>{changeTab(2);}} className={selectedTab === 2 ? styles['main-component-tab-selected'] : styles['main-component-tab']}>Buyers</div>
                    <div onClick={()=>{changeTab(3);}} className={selectedTab === 3 ? styles['main-component-tab-selected'] : styles['main-component-tab']}>Agents</div>
                    </div>
                    <div className={styles['main-component-question-container']}>

                        {questions.map((item, index) =>
                            <div key={index} className={item.visible ? styles['main-component-question-visible'] : styles['main-component-question']}>
                                <div onClick={()=>{toggleQuestion(index);}} className={ item.visible ? styles['main-component-question-item-title-visible'] : styles['main-component-question-item-title']}>
                                    <button dangerouslySetInnerHTML={{__html: item.title}}></button>
                                </div>
                                <div className={ item.visible ? styles['main-component-question-item-copy-container-visible'] : styles['main-component-question-item-copy-container']}>
                                    <div className={styles['main-component-question-item-copy']} dangerouslySetInnerHTML={{ __html: item.copy }}>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
        </div>
    );
};

export default Questions;