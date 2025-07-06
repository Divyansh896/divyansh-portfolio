function HomePage() {
    return (
        <>

            <div className="container py-5" id="main-container">
                <div className="row align-items-center">
                    {/* Left Section – Text */}
                    <div className="col-md-6 text-center text-md-start">
                        <h1>Hello, I am Divyansh</h1>
                        <p className="fw-semibold">Full-Stack Developer | React, ASP.NET, SQL Server</p>
                        <p>I build full-stack web apps using C#, ASP.NET Core, and React — focused on clean code, scalability, and real-world impact.</p>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-outline-dark">Download CV</a>
                        </div>
                    </div>

                    {/* Right Section – Image */}
                    <div className="col-md-6 text-center mt-4 mt-md-0 portfolioImgContainer">
                        <img
                            src="/images/PortfolioPic.jpg"
                            alt="Profile"
                            className="rounded-circle img-fluid portfolioImg" />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row align-items-start">
                    {/* About Me Section */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div>

                            <h2 className="mb-4">About Me</h2>
                            <p>
                                I am Divyansh, a passionate Full-Stack Developer with expertise in React, ASP.NET Core, and SQL Server.
                                I build scalable web applications and enjoy creating clean, efficient code. I'm a self-taught learner
                                with a diploma in Computer Programming, and I love solving real-world problems through software.
                            </p>
                        </div>

                    </div>

                    {/* Skills Section */}
                    <div className="col-md-6">
                        <h2 className="mb-4">Skills & Technologies</h2>
                        <div className="skills-container d-flex flex-column gap-3 overflow-auto" style={{ maxHeight: '400px' }} id="skills">
                            {/* Skill Item */}
                            <div className="d-flex align-items-center gap-3 p-2 border rounded bg-light shadow-sm">
                                <i className="fab fa-react fa-2x text-primary"></i>
                                <span className="fw-semibold">React Apps</span>
                            </div>

                            <div className="d-flex align-items-center gap-3 p-2 border rounded bg-light shadow-sm">
                                <i className="fas fa-globe fa-2x text-success"></i>
                                <span className="fw-semibold">Web Applications</span>
                            </div>

                            <div className="d-flex align-items-center gap-3 p-2 border rounded bg-light shadow-sm">
                                <i className="fas fa-database fa-2x text-warning"></i>
                                <span className="fw-semibold">SQL & Databases</span>
                            </div>

                            <div className="d-flex align-items-center gap-3 p-2 border rounded bg-light shadow-sm">
                                <i className="fas fa-cogs fa-2x text-danger"></i>
                                <span className="fw-semibold">REST APIs (ASP.NET Core)</span>
                            </div>

                            <div className="d-flex align-items-center gap-3 p-2 border rounded bg-light shadow-sm">
                                <i className="fas fa-mobile-alt fa-2x text-info"></i>
                                <span className="fw-semibold">.NET MAUI (Mobile)</span>
                            </div>

                            <div className="d-flex align-items-center gap-3 p-2 border rounded bg-light shadow-sm">
                                <i className="fab fa-git-alt fa-2x text-dark"></i>
                                <span className="fw-semibold">Git & GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5" id="stats">
                <h2 className="text-right mb-5">My Developer Snapshot</h2>
                <div className="row g-4 text-center">
                    {/* Card 1 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-code fa-2x text-primary mb-2"></i>
                            <h5 className="fw-bold mt-2">10+ Full-Stack Projects</h5>
                            <p className="text-muted small">Projects Completed</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-users fa-2x text-success mb-2"></i>
                            <h5 className="fw-bold mt-2">2 Team-Based Projects</h5>
                            <p className="text-muted small">Internships / Roles</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-tools fa-2x text-danger mb-2"></i>
                            <h5 className="fw-bold mt-2">12+ Technologies</h5>
                            <p className="text-muted small">React, .NET, SQL, etc.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-database fa-2x text-warning mb-2"></i>
                            <h5 className="fw-bold mt-2">6 Databases</h5>
                            <p className="text-muted small">SQL & NoSQL Designed</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-link fa-2x text-info mb-2"></i>
                            <h5 className="fw-bold mt-2">3+ APIs</h5>
                            <p className="text-muted small">REST APIs Built</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fab fa-github fa-2x text-dark mb-2"></i>
                            <h5 className="fw-bold mt-2">5+ Projects</h5>
                            <p className="text-muted small">GitHub Repositories</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-hourglass-half fa-2x text-secondary mb-2"></i>
                            <h5 className="fw-bold mt-2">1000+ Hours</h5>
                            <p className="text-muted small">Self-Learning Time</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="col-12 col-md-4">
                        <div className="p-4 bg-light rounded shadow-sm h-100">
                            <i className="fas fa-toolbox fa-2x text-muted mb-2"></i>
                            <h5 className="fw-bold mt-2">Multiple Tools</h5>
                            <p className="text-muted small">VS Code, Postman, Git, Azure...</p>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
}
export default HomePage;