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
                        <p onClick={() => toggleAnswer(0)}>
                            How do I get started with Car Rental?
                            <img
                                src={activeIndex === 0 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </p>
                        <p
                            className={`answer__description ${activeIndex === 0 ? 'show' : ''}`}
                        >
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia deserunt mollitia
                            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                            est et expedita distinctio.
                        </p>
                    </div>
                    {/* Question 2 */}
                    <div className="questions">
                        <p onClick={() => toggleAnswer(1)}>
                            What is the rental process?
                            <img
                                src={activeIndex === 1 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </p>
                        <p
                            className={`answer__description ${activeIndex === 1 ? 'show' : ''}`}
                        >
                            To start the rental process, you need to select a vehicle and complete the necessary paperwork. Our team will guide you through the steps.
                        </p>
                    </div>
                </div>
                <div className="question__content">
                    {/* Question 3 */}
                    <div className="questions">
                        <p onClick={() => toggleAnswer(2)}>
                            What are the payment options?
                            <img
                                src={activeIndex === 2 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </p>
                        <p
                            className={`answer__description ${activeIndex === 2 ? 'show' : ''}`}
                        >
                            We offer various payment options, including credit cards, debit cards, and online payment methods.
                        </p>
                    </div>
                    {/* Question 4 */}
                    <div className="questions">
                        <p onClick={() => toggleAnswer(3)}>
                            Can I modify my reservation?
                            <img
                                src={activeIndex === 3 ? arrowUp : arrowDown}
                                className="questionArrow"
                                alt="Toggle answer"
                            />
                        </p>
                        <p
                            className={`answer__description ${activeIndex === 3 ? 'show' : ''}`}
                        >
                            Yes, you can modify your reservation up to 24 hours before your scheduled pickup time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
