
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';


const Home = () => {

    const [isVisible, setisVisible] = useState(false);

    // setTimeout(setisVisible(true), 2000);
    
    return (
        <section className="portfolio">
            <div className="container">
                <div className="landing-banner">
                    <div className="landing-text">
                        <motion.h1
                            animate={{ opacity: [0, 1], y: [50, 0] }}
                            transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
                        >
                            Welcome to my personal website<motion.span animate={{ opacity: [0, 1]}} transition={{ delay: 2.5 }}>.</motion.span>
                        </motion.h1>
                        <motion.p
                            animate={{ opacity: [0, 1]}}
                            transition={{ duration: 2, delay: 2.6 }}
                        >
                            I'm a passionate software developer interested in full stack development and cloud technologies.
                        </motion.p>
                        <div className="social-links home">
                            <motion.a 
                                animate={{ opacity: [0, 1]}}
                                transition={{ duration: 1.5, delay: 2.7 }}
                                href="mailto: adam.gumieniak98@hotmail.com">
                                <i className="fas fa-envelope fa-2x"></i>
                            </motion.a>
                            <motion.a 
                                animate={{ opacity: [0, 1]}}
                                transition={{ duration: 1.5, delay: 2.8 }}
                                href="https://www.instagram.com/adamgumieniak/?hl=en" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram fa-2x"></i>
                            </motion.a>
                            <motion.a 
                                animate={{ opacity: [0, 1]}}
                                transition={{ duration: 1.5, delay: 2.9 }}
                                href="https://github.com/iLooL" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x">
                                </i>
                            </motion.a>
                            <motion.a 
                                animate={{ opacity: [0, 1]}}
                                transition={{ duration: 1.5, delay: 3 }}
                                href=""><i className="fab fa-linkedin-in fa-2x">
                                </i>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
};

export default Home;