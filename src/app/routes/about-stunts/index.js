import React from "react";
import InteriorLayout from "../../layouts/InteriorLayout";
import faqData from "../../data/faq";
import FAQItem from "../../components/FAQItem";

export default () => (
  <InteriorLayout
    id="about-stunts"
    title="Getting into Stunts"
    description="What you need to know to make it in the stunt industry"
  >
    <div>
      <div className="row">
        <div className="col-12 col-md-12">
          <dl className="faq">
            {faqData.map(faqItem => (
              <FAQItem question={faqItem.question} answer={faqItem.answer} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  </InteriorLayout>
);
