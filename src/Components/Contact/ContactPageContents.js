import { useState } from "react";

const ContactPageContents = () => {
    const [chatStarted, setChatStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [completed, setCompleted] = useState(false);
    const [messages, setMessages] = useState([]);

    const questions = [
        "What is your name?",
        "What is your company name?",
        "Which JM-Gears product are you interested in? (e.g., Rotary Kiln, Grinding Mill, Cement Plant, Spare Parts)",
        "What is your specific inquiry or requirement?",
        "Please provide any additional details or contact information."
    ];

    const startChat = () => {
        setChatStarted(true);
        setMessages([{ text: "Hello! Welcome to JM-Gears Live Chat. Let's get started.", sender: 'bot' }, { text: questions[0], sender: 'bot' }]);
    };

    const handleSubmit = () => {
        if (!currentAnswer.trim()) return;
        const userMessage = { text: currentAnswer, sender: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        const newAnswers = { ...answers };
        newAnswers[questions[currentQuestionIndex]] = currentAnswer;
        setAnswers(newAnswers);
        setCurrentAnswer('');
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeout(() => {
                setMessages([...newMessages, { text: questions[currentQuestionIndex + 1], sender: 'bot' }]);
            }, 500);
        } else {
            setCompleted(true);
            setChatStarted(false);
            setTimeout(() => {
                setMessages([...newMessages, { text: "Thank you for your responses! Our team will get back to you soon.", sender: 'bot' }]);
            }, 500);
        }
    };

    return (
        <div className="contact-us-wrapper section-padding">
            <div className="container">
                <div className="row eq-height">
                <div className="col-lg-8 col-12">
                    <div className="contact-form"> 
                    <h2>Get in Touch</h2>                                                       
                    
                    <form action="mail.php" method="POST" className="row" id="contact-form">
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="text" name="name" placeholder="Name" />                                         
                        </div>
                    </div>                            
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="email" name="email" placeholder="Email" />                                         
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="text" name="phone" placeholder="Number" />                                         
                        </div>
                    </div>                                      
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="text" name="subject" placeholder="Subject" />                                         
                        </div>
                    </div>                                      
                    <div className="col-md-12 col-12">
                        <div className="single-personal-info">
                        <textarea name="message" placeholder="message" defaultValue={""} />                                        
                        </div>
                    </div>                                      
                    <div className="col-md-12 col-12">
                        <input className="submit-btn" type="submit" defaultValue="Submit Now" />
                    </div>                                      
                    </form>
                    <span className="form-message" />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="contact-us-sidebar mt-5 mt-lg-0">
                        <div className="contact-info">
                            <h2>CONTACT INFO</h2>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-email" />
                                </div>
                                <div className="text">
                                    <span>Email Us</span>
                                    <h5>info@example.com</h5>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-phone-call-1" />
                                </div>
                                <div className="text">
                                    <span>Call Us</span>
                                    <h5>+673 853 605 985</h5>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-pin" />
                                </div>
                                <div className="text">
                                    <span>Location</span>
                                    <h5>4821 Mainer St NY, USA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="live-chat" style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', maxHeight: '400px', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
                            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Live Chat</h2>
                            {!chatStarted && !completed ? (
                                <div style={{ textAlign: 'center' }}>
                                    <p>Chat with us about JM-Gears products and services.</p>
                                    <button onClick={startChat} className="chat-btn" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}><i className="flaticon-chatting" /> Start Live Chat</button>
                                </div>
                            ) : (
                                <>
                                    <div className="chat-messages" style={{ marginBottom: '10px' }}>
                                        {messages.map((msg, index) => (
                                            <div key={index} style={{
                                                display: 'flex',
                                                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                marginBottom: '10px'
                                            }}>
                                                <div style={{
                                                    backgroundColor: msg.sender === 'user' ? '#007bff' : '#e9ecef',
                                                    color: msg.sender === 'user' ? 'white' : 'black',
                                                    padding: '8px 12px',
                                                    borderRadius: '15px',
                                                    maxWidth: '70%',
                                                    wordWrap: 'break-word'
                                                }}>
                                                    {msg.text}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {chatStarted && (
                                        <div className="chat-input-area" style={{ display: 'flex', gap: '10px' }}>
                                            <input
                                                type="text"
                                                value={currentAnswer}
                                                onChange={(e) => setCurrentAnswer(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                                className="chat-input"
                                                placeholder="Type your answer..."
                                                style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                                            />
                                            <button onClick={handleSubmit} className="chat-submit" style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default ContactPageContents;