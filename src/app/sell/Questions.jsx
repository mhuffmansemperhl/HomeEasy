"use client"
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import styles from './Questions.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import ArrowButton from '@/components/fluid/ArrowButton';
const Questions = ({question_title, question_copy, question_questions, question_show_link}) => {
    const router = useRouter();

    const windowSize = useWindowSize();
    const [title, setTitle] = useState("You’ve got questions. <br />And we have the answers.");
    const [copy, setCopy] = useState("When you change the industry, there’s bound to be a few questions.");
    const [show_link, setShowLink] = useState(false);
    const [questions, setQuestions] = useState([
        {
            title: "This sounds too good to be true.  What’s the catch here?",
            copy: "You know we get that a lot.  But the truth is it’s not too good to be true, it’s just the way things should be.  By automating parts of the home buying process, our agents are able to work more efficiently for less commission.   And with our long lasting relationships with local attorney’s, title companies, escrow companies, and mortgage lenders, you can save thousands more when working with our preferred partners.",
            visible: false,
        },
        {
            title: "How is HomeEasy Homes different than other real estate technology companies?",
            copy: "HomeEasy Homes breaks the mold of typical real estate tech companies, as it was created by industry experts who saw the need to eliminate outdated strategies and processes.  We wanted to make selling a home easier and less stressful, providing you with simplicity, choices, and peace of mind. We've taken out the headaches and hassles, giving you control over the process of selling and buying your home, because we understand that it's not just a house—it's your home. You call the shots, and we'll be there to help you find the ideal solution for all your real estate needs.",
            visible: false,
        },
        {
            title: "How do I get started with HomeEasy Homes?",
            copy: "When you reach out to us, we'll make sure you talk to a team member whose main job is to find you the perfect local agent. They'll be someone who totally gets your needs and knows the local market inside out.",
            visible: false,
        },
        {
            title: "Can I sell or buy with HomeEasy homes if I am already working with an agent?",
            copy: "As a buyer yes, but as an industry standard, we will ask you to sign an exclusive agreement if you decide to list with us.",
            visible: false,
        },
    ]);

    useEffect(() => {
        if(question_title) {
            setTitle(question_title);
        }
        if(question_copy) {
            setCopy(question_copy);
        }
        if(question_questions) {
            setQuestions(question_questions);
        }
        if(question_show_link) {
            setShowLink(question_show_link);
        }
    }, []);

    function toggleQuestion(index) {
        // false && console.log('toggleQuestion', index);
        const tquestions = [...questions];
        for(let i = 0; i < tquestions.length; i++) {
            if(i === index) {
                tquestions[i].visible = !tquestions[i].visible;
            }else{
                tquestions[i].visible = false;
            }
        }
        setQuestions(tquestions);
    }

    return (
        <div>
            <div className={styles['main-component']}>
                <div className={`${styles['main-component-content-container']} centered-content2`}>
                    <div className={styles['main-component-title']} dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className={styles['main-component-copy']} dangerouslySetInnerHTML={{ __html: copy }}></div>
                    <div className={styles['main-component-question-container']}>

                        {questions.map((item, index) =>
                            <div key={index} className={item.visible ? styles['main-component-question-visible'] : styles['main-component-question']}>
                                <div onClick={()=>{toggleQuestion(index);}} className={ item.visible ? styles['main-component-question-item-title-visible'] : styles['main-component-question-item-title']}>
                                    <button dangerouslySetInnerHTML={{__html: item.title}}></button>
                                </div>
                                <div className={ item.visible ? styles['main-component-question-item-copy-container-visible'] : styles['main-component-question-item-copy-container']}>
                                    <div className={styles['main-component-question-item-copy']} dangerouslySetInnerHTML={{ __html: item.copy }}></div>
                                </div>
                            </div>
                        )}

                    </div>
                    {(windowSize.width > 1023 || show_link) &&
                    <div className={styles['main-component-link-container']}
                    >
                    <div className={styles['advantage-content-item-get-started-link']}>
                        <ArrowButton
                        link_text="Read more FAQs"
                        callback={()=>{router.push('/questions');}}
                        large_text={true}
                        />
                    </div>

                        {/* <div className={styles['main-component-link']}>
                            <a  onClick={() => router.push('/questions')}>Read more FAQs</a>
                        </div> */}
                    </div>
                    }

                </div>
            </div>
        </div>
    );
};
export default Questions;