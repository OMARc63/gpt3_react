import React from "react";
import { Feature } from "../../components";
import "./wgpt3.css";

const featuresList = [
  {
    title: "What is GPT-3",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
  },
  {
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  },
  {
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
];

const Wgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__marging" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={featuresList[0].title} text={featuresList[0].text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={featuresList[1].title} text={featuresList[1].text} />
        <Feature title={featuresList[2].title} text={featuresList[2].text} />
        <Feature title={featuresList[3].title} text={featuresList[3].text} />
      </div>
    </div>
  );
};

export default Wgpt3;
