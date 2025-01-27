import { React, useState} from 'react';
import './Accordion.css';
import arrowUp from '../../assets/arrow-up-light.png';
import arrowDown from '../../assets/arrow-down-light.png';
const Accordion = () => {
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
                    {/* Question 1 */}
                    <div className="questions">
                        <div onClick={() => toggleAnswer(0)}>
                        <p>What types of software solutions do you offer?</p>
                            <img
                                src={activeIndex === 0 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </div>
                        <p
                            className={`answer__description ${activeIndex === 0 ? 'show' : ''}`}
                        >
                            We provide a wide range of software solutions, including custom web and mobile application development, cloud solutions, enterprise software, and AI-powered tools. Our goal is to create solutions tailored to your unique business needs.
                        </p>
                    </div>
                    {/* Question 2 */}
                    <div className="questions">
                        <div onClick={() => toggleAnswer(1)}>
                        <p>How long does it take to complete a project?</p>
                            <img
                                src={activeIndex === 1 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </div>
                        <p
                            className={`answer__description ${activeIndex === 1 ? 'show' : ''}`}
                        >
                            Project timelines vary depending on the complexity and scope of your requirements. After understanding your needs, we provide a detailed project plan and timeline to ensure transparency and timely delivery.
                        </p>
                    </div>
                </div>
                <div className="question__content">
                    {/* Question 3 */}
                    <div className="questions">
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
                    </div>
                    {/* Question 4 */}
                    <div className="questions">
                        <div onClick={() => toggleAnswer(3)}>
                        <p>Is my data safe with Cognitech Labs?</p>
                            <img
                                src={activeIndex === 3 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </div>
                        <p
                            className={`answer__description ${activeIndex === 3 ? 'show' : ''}`}
                        >
                            Absolutely. We prioritize data security and follow industry-standard practices to protect your information. From encryption to secure development methodologies, your data is in safe hands.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
