import '../styles/cardStyles.css';

const Projects = () => {

    const Post = () => {
        return (
            <>
                <a  
                    href="https://github.com/iLooL/Client-Server-Messaging-Protocol"
                    target="https://github.com/iLooL/Client-Server-Messaging-Protocol"
                    className="card project"
                    >            
                    <div>
                        <h1>Client Server Messaging Protocol</h1>
                        <p>
                        Implemented a bulletin board program using Java stream sockets.
                        This program is accompanied with RFC documentation.
                        </p>
                        <div className="tags">
                            <div className="tag">Java</div>
                            <div className="tag">Networking</div>
                        </div>
                    </div>
                </a>
            </>
        )
    }

    return (
        <section className="projects">
                <div className="card-container">
                    <div className="landing-text">
                        <h1 className="project-title">
                            Projects
                        </h1>
                    </div>
                    <Post />
                </div>
        </section>
    )
}

export default Projects;