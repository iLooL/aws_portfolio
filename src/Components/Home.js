

const Home = () => {
    
    return (
        <section className="portfolio">
            <div className="container">
                <div className="landing-banner">
                    <div className="landing-text">
                        <h1>
                            Welcome to my personal website<span>.</span>
                        </h1>
                        <p>
                            I'm a passionate software developer interested in full stack development and cloud technologies.
                        </p>
                        <div className="social-links home">
                            <a href="mailto: adam.gumieniak98@hotmail.com"><i className="fas fa-envelope fa-2x"></i></a>
                            <a href="https://www.instagram.com/adamgumieniak/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                            <a href="https://github.com/iLooL" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                            <a href=""><i className="fab fa-linkedin-in fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;