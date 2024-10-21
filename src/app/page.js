import Header from "../components/Header";
import Testamonials from "../components/Testamonials";
import Advantage from "../components/Advantage";
import Difference from "../components/Difference";
import Destress from "../components/Destress";
// import Questions from '../components/Questions';
import Questions from "@/components/fluid/Questions";
import Plan from "../components/Plan";
import GettingStarted from "../components/GettingStarted";
// import Footer from '../components/Footer';
import Footer from "@/components/fluid/Footer";
import HomeSearchLinks from "@/components/fluid/HomeSearchLinks";
import './style.css'
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Testamonials />
      <Advantage />
      <Difference />
      <Destress  />
      <Questions
        question_show_link={true}
        question_questions={[
          {
            title: "This sounds too good to be true.  What’s the catch here?",
            copy: "You know we get that a lot.  But the truth is it’s not too good to be true, it’s just the way things should be.  By automating parts of the home buying process, our agents are able to work more efficiently for less commission.   And with our long lasting relationships with local attorneys, title companies, escrow companies, and mortgage lenders, you can save thousands more when working with our preferred partners.",
            visible: true,
          },
          {
            title:
              "How is HomeEasy Homes different than other real estate technology companies?",
            copy: "HomeEasy Homes breaks the mold of typical real estate tech companies, as it was created by industry experts who saw the need to eliminate outdated strategies and processes.  We wanted to make selling a home easier and less stressful, providing you with simplicity, choices, and peace of mind. We've taken out the headaches and hassles, giving you control over the process of selling and buying your home, because we understand that it's not just a house—it's your home. You call the shots, and we'll be there to help you find the ideal solution for all your real estate needs.",
            visible: false,
          },
          {
            title: "How do I get started with HomeEasy Homes?",
            copy: "When you reach out to us, we'll make sure you talk to a team member whose main job is to find you the perfect local agent. They'll be someone who totally gets your needs and knows the local market inside out.",
            visible: false,
          },
          {
            title:
              "Can I sell or buy with HomeEasy Homes if I am already working with an agent?",
            copy: "As a buyer yes, but as an industry standard, we will ask you to sign an exclusive agreement if you decide to list with us.",
            visible: false,
          },
        ]}
      />
      <Plan />
      <GettingStarted />
      {/* <HomeSearchLinks
        main_component_style={"main-component-gray"}
        centered_style={"centered-content"}
      /> */}
      <Footer centered_style={"centered-content"} />
    </main>
  );
}
