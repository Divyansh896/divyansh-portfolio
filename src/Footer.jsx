function Footer() {

    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="mb-2 mb-md-0">
                    &copy; {new Date().getFullYear()} Divyansh. All rights reserved.
                    <br />
                    <a href="mailto:your.email@example.com" className="text-white">Divyansh9030@gmail.com</a>
                    {/* Optional phone */}
                    <br />+1 (905) 325-5148
                </div>

                <div className="d-flex gap-3">
                    <a href="https://github.com/divyansh896" target="_blank" rel="noopener noreferrer" className="text-white">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/divyansh-divyansh-318a2a33a/" target="_blank" rel="noopener noreferrer" className="text-white">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="mailto:Divyansh9030@gmail.com" className="text-white">
                        <i className="fas fa-envelope fa-lg"></i>
                    </a>
                </div>
            </div>
        </footer>

    );
}
export default Footer;