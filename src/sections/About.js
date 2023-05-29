// external
import { useState, useEffect, useRef, forwardRef } from 'react';

// internal
import { portrait } from '../assets';

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

const About = forwardRef(({ showOverlay }, ref) => {
    const [langIdx, setLangIdx] = useState(0)
    const [currGreeting, setCurrGreeting] = useState(greetings[langIdx].split(''))
    const [liftPortrait, setLiftPortrait] = useState(false)

    const animationIndicator = useRef(null)
    const direction = useRef(DIRECTION.backward)
    const interval = useRef()
    const currIdx = useRef()

    // add portrait animation
    useEffect(() => {
        const controlPortrait = () => {
            const {y, height} = animationIndicator.current.getClientRects()[0];
            setLiftPortrait(y < window.innerHeight - (0.5 * height) && y > (-0.5 * height))
        };
        
        controlPortrait()
        window.addEventListener('scroll', controlPortrait)

        return () => {
            window.removeEventListener('scroll', controlPortrait)
        }
    }, [] );

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

    return (
        <div id="about" className='section pb-5 pb-lg-0 d-flex' ref={ref}>
            <div className='container my-auto'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <div className='row align-items-center'>
                            <div className='col-12 col-lg-6 col-xl-7 pb-4 pb-lg-0'>
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
                                    <a id="suggest" href='#' onClick={(e) => {
                                        e.preventDefault()
                                        showOverlay();
                                        return false;
                                    }}>
                                        drop me a suggestion for what to pick up next
                                    </a>?
                                </p>
                            </div>
                            <div className='col-12 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center'>
                                <img src={portrait} id="portrait" className={liftPortrait ? 'hover-portrait' : ''} ref={animationIndicator}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About;