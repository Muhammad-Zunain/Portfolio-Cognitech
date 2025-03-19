import { React, useState} from 'react';
import './Accordion.css';
import arrowUp from '../../assets/arrow-up-light.png';
import arrowDown from '../../assets/arrow-down-light.png';
const Accordion = ({ FAQs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="question__container">
            <div className="question__heading">
                <div className="choose-header">
                    <h2>Frequently <span>Asked</span> Questions</h2>
                </div>
            </div>
            <div className="container quention__box">
                <div className="question__content">
                    { FAQs[0].questions.map((faq, index) => (
                        <div className="questions" key={index}>
                            <div onClick={() => toggleAnswer(index)}>
                                <p>{faq.question}</p>
                                <img
                                    src={activeIndex === index ? arrowUp : arrowDown}
                                    className="questionArrow"
                                    alt="Toggle answer"
                                />
                            </div>
                            <p
                                className={`answer__description ${activeIndex === index ? 'show' : ''}`}
                            >
                                {faq.answer}
                            </p>
                        </div>

                    ))}
                </div>
                <div className="question__content">
                    {FAQs[1].questions.map((faq, index) => (
                        <div className="questions" key={index}>
                            <div onClick={() => toggleAnswer(index + 3)}>
                                <p>{faq.question}</p>
                                <img
                                    src={activeIndex === index + 3 ? arrowUp : arrowDown}
                                    className="questionArrow"
                                    alt="Toggle answer"
                                />
                            </div>
                            <p
                                className={`answer__description ${activeIndex === index + 3 ? 'show' : ''}`}
                            >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                    {/* <div className="questions">
                        <div onClick={() => toggleAnswer(2)}>
                        <p>Do you offer support after project completion?</p>
                            <img
                                src={activeIndex === 2 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </div>
                        <p
                            className={`answer__description ${activeIndex === 2 ? 'show' : ''}`}
                        >
                            Yes! We offer comprehensive post-deployment support and maintenance services to ensure your software remains updated, secure, and fully functional at all times.
                        </p>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
}

export default Accordion;
