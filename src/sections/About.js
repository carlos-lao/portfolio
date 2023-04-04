// external
import { useState, useEffect, useRef } from 'react';

// internal
import { portrait } from '../assets';

const FORM_SUBMIT = "https://script.google.com/macros/s/AKfycbylECUpNlIKdSbOWzamKmFcSAqZadIIqO0TzMDZ_s7hGaCMFxTCX-LG0Jkn5u7rXXVtMg/exec"
const TYPING_SPEED = 125
const PAUSE_TIME = 15
const DIRECTION = {
    forward: 'forward',
    backward: 'backward'
}
const greetings = [
    "Hey,",
    "Kumusta,",
    "你好,",
    "Hola,"
]

const About = () => {
    const [langIdx, setLangIdx] = useState(0)
    const [currGreeting, setCurrGreeting] = useState(greetings[langIdx].split(''))
    const [showOverlay, setShowOverlay] = useState(false)
    const [suggestion, setSuggestion] = useState('')

    const direction = useRef(DIRECTION.backward)
    const interval = useRef()
    const currIdx = useRef()

    // Handles form submission and suppresses redirect
    useEffect(() => {
        const submitForm = (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                alert("Success!");
            })
        }

        const form = document.getElementById('suggestion-form')
        console.log(form)
        // form.addEventListener("submit", submitForm)

        // return () => {
        //     form.removeEventListener("submit", submitForm)
        // }
    }, [])

    // Adds typing effect
    useEffect(() => {
        let pauseCounter = 0;

        const type = () => {
            if (currIdx.current >= greetings[langIdx].length) {
                direction.current = DIRECTION.backward;
                pauseCounter = PAUSE_TIME;
                return;
            }

            const segment = greetings[langIdx].split('');
            setCurrGreeting(currGreeting.concat(segment[currIdx.current]));
            currIdx.current += 1;
        }

        const backspace = () => {
            if (currIdx.current === 0) {
                setLangIdx((langIdx + 1) % greetings.length);
                direction.current = DIRECTION.forward;
            
                return;
            }
            const segment = currGreeting.slice(0, currGreeting.length - 1);
            setCurrGreeting(segment);
            currIdx.current = currGreeting.length - 1;
        }

        interval.current = setInterval(() => {
            if (pauseCounter > 0) {
                pauseCounter -= 1;
                return;
            }

            if (direction.current === DIRECTION.forward) {
                type();
            } else {
                backspace();
            }
        }, TYPING_SPEED);
    
        return () => {
            clearInterval(interval.current);
        }
    }, [currGreeting, langIdx])

    const renderOverlay = () => (
        <div className='fullscreen-overlay d-flex justify-content-center align-items-center'>
            <div id='suggestion-box'>
                <button type="button" className="btn-close" aria-label="Close" id="close-suggestion-box"
                    onClick={() => {
                        setShowOverlay(false)
                        setSuggestion("")
                    }}
                ></button>
                <form 
                    id="suggestion-form"
                    method='POST' 
                    action={FORM_SUBMIT} 
                    className='d-flex flex-column align-items-center fill-parent'
                >
                    <input 
                        name="Activity" 
                        type="text" 
                        className="form-control my-3" 
                        placeholder="What should I learn next?" 
                        value={suggestion}
                        autoComplete="off"
                        onChange={e => {setSuggestion(e.target.value)}} 
                    />
                    <button 
                        type="submit" 
                        className={"btn btn-" + (suggestion.length === 0 ? "secondary" : "primary")}
                        style={{ border: "none" }}
                        disabled={suggestion.length === 0}
                        onClick={e => {
                            e.preventDefault()
                            console.log(suggestion)
                        }}
                    >Submit</button>
                </form>
            </div>
        </div>
    )

    return (
        <div id="about" className='section d-flex align-items-center'>
            {showOverlay && renderOverlay()}
            <div>
                <div className='row align-items-center'>
                    <div className='col-12 col-lg-6 pb-4 pb-lg-0'>
                        <h2 id="about-greeting">
                            {currGreeting.join('')}<span aria-hidden={true} id='cursor'></span>
                        </h2>
                        <h2 className="pb-4" id="about-name">I'm Carlos.</h2>
                        <p className="about-text">
                            After graduating from USC with a double major in linguistics and computer science, I am excited to break into the world of software
                            engineering as an aspiring full-stack developer. Whatever the task at hand, I'm ready to take on any challenge with no hesitation.
                        </p>
                        <p className="about-text">
                            As a naturally curious person and passionate learner, I am always looking to expand my skillset. This has made me an adaptable
                            problem-solver: ready to put new skills to use at a moment's notice. When the next game-changing development is always just around
                            the corner, I'm there waiting.
                        </p>
                        <p className="about-text">
                            When I'm not coding, I like to run, sing, play guitar, learn new languages, and—more recently—crochet. I'm also a musical theater kid at heart.
                            Obviously, I'm always open to picking up new hobbies! Since you're here anyway, why not&nbsp;
                            <a id="suggest" href='#' onClick={() => {
                                setShowOverlay(true);
                                return false;
                            }}>
                                drop me a suggestion for what to pick up next
                            </a>?
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img src={portrait} id="portrait"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;