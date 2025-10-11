import React from 'react'
import { motion } from "framer-motion";
import './Projects.css';
function ProjectGymManagement() {
    return (
        <>
            <div className="row align-items-center">

                {/* Text Column (Left) */}
                <div className="col-md-6 px-4">
                    <motion.h2 
                    className="fw-bold mb-3 text-primary"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        🏋️ Gym Management System
                    </motion.h2>

                    <p className="lead">
                        A <strong>custom-built web application</strong> developed as a <strong>solo college project</strong>.
                        This system provides a comprehensive platform to manage all aspects of a gym — from member registration and instructor assignments to class scheduling and workout tracking.
                        It is designed to <em>streamline gym operations</em> and improve overall efficiency for administrators, instructors, and members.
                    </p>

                    <hr className="my-4" />

                    <p>
                        As a solo project, I implemented full-stack functionality including <strong>member management</strong>, <strong>class scheduling</strong>, <strong>workout tracking</strong>, and <strong>report generation</strong>.
                        The application demonstrates <strong>clean architecture</strong>, responsive UI design, and effective database handling using ASP.NET Core MVC and SQLite.
                    </p>

                    <p className="text-success fw-semibold">
                        This project showcases my ability to design, develop, and deploy a fully functional web application independently.
                        It reflects my expertise in <strong>secure coding practices</strong>, <strong>intuitive user experience</strong>, and <strong>robust back-end design</strong>.
                    </p>

                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#gymModal"
                    >
                        View Gym Management Details
                    </button>

                    <a
                        href="https://github.com/Divyansh896/GymManagement"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary mx-2"
                    >
                        View Source Code
                    </a>
                </div>

                {/* Image Column (Right) */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="poster-wrapper position-relative overflow-hidden rounded-4 shadow-lg"
                    >
                        <img
                            src="/GymManagementPoster.webp"
                            alt="Gym Management System Poster"
                            className="img-fluid poster-img"
                            style={{
                                maxHeight: "480px",
                                width: "100%",
                                objectFit: "cover",
                                border: "3px solid rgba(255,255,255,0.1)",
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div className="poster-overlay d-flex justify-content-center align-items-center">
                            <a
                                href="https://your-demo-link.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-light fw-semibold"
                            >
                                🔗 Live Demo
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>

            <div
                className="modal fade"
                id="gymModal"
                tabIndex="-1"
                aria-labelledby="gymModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-gradient-primary text-dark">
                            <h5 className="modal-title" id="gymModalLabel">
                                🏋️ Gym Management System
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body px-4">
                            <p>
                                A comprehensive web-based <strong>Gym Management System</strong> built with
                                <strong> ASP.NET Core MVC</strong>. This application provides full functionality for managing gym operations, including members, instructors, classes, workouts, and reporting.
                            </p>

                            <h5 className="mt-4">Target Users</h5>
                            <ul>
                                <li>🏢 Gym owners and administrators</li>
                                <li>💪 Fitness instructors</li>
                                <li>🧑‍🤝‍🧑 Gym members</li>
                                <li>📋 Front desk staff</li>
                            </ul>
                            <hr className="my-3" />

                            <h5>Features</h5>
                            <h6 className="mt-3">🏋️ Member Management</h6>
                            <ul>
                                <li>Client Registration & Profiles</li>
                                <li>Membership Management</li>
                                <li>Photo Management</li>
                                <li>Membership Status Tracking</li>
                                <li>Payment Tracking</li>
                            </ul>
                            <hr className="my-3" />

                            <h6>👨‍🏫 Instructor Management</h6>
                            <ul>
                                <li>Instructor Profiles</li>
                                <li>Document Management</li>
                                <li>Active Status Management</li>
                                <li>Class Assignment</li>
                            </ul>
                            <hr className="my-3" />

                            <h6>🏃‍♀️ Class & Schedule Management</h6>
                            <ul>
                                <li>Group Class Scheduling</li>
                                <li>Fitness Categories</li>
                                <li>Class Enrollment</li>
                                <li>Schedule Conflict Prevention</li>
                                <li>Class Time Management</li>
                            </ul>
                            <hr className="my-3" />

                            <h6>💪 Workout Tracking</h6>
                            <ul>
                                <li>Personal Workout Sessions</li>
                                <li>Exercise Database</li>
                                <li>Workout Planning</li>
                                <li>Conflict Detection</li>
                                <li>Workout History</li>
                            </ul>
                            <hr className="my-3" />

                            <h6>📊 Reporting & Analytics</h6>
                            <ul>
                                <li>Membership Reports</li>
                                <li>Excel Export</li>
                                <li>Financial Tracking</li>
                                <li>Client Analytics</li>
                            </ul>
                            <hr className="my-3" />

                            <h6>🔧 Administrative Features</h6>
                            <ul>
                                <li>User Authentication</li>
                                <li>Data Validation</li>
                                <li>Concurrency Control</li>
                                <li>Audit Trail</li>
                                <li>Responsive Design</li>
                            </ul>
                            <hr className="my-3" />

                            
                            <h5>💻 Installation & Setup</h5>
                            <p>
                                <strong>Prerequisites:</strong> .NET 8.0 SDK, Visual Studio 2022 or VS Code, SQLite, Git
                            </p>
                            <p><strong>Steps:</strong></p>
                            <ol>
                                <li>Clone the repository</li>
                                <li>Open the solution in Visual Studio or VS Code</li>
                                <li>Restore dependencies (<code>dotnet restore</code>)</li>
                                <li>Update database (<code>dotnet ef database update</code>)</li>
                                <li>Run the application (<code>dotnet run</code>)</li>
                                <li>Access via browser at <code>https://localhost:5001</code></li>
                            </ol>
                            <hr className="my-3" />

                            <h5>⚙️ Usage</h5>
                            <p>Includes workflows for managing members, scheduling classes, tracking workouts, and generating reports.</p>
                            <hr className="my-3" />

                            <h5>🛠 Technologies Used</h5>
                            <p>Backend: ASP.NET Core 8.0, Entity Framework Core, SQLite, ASP.NET Core Identity, C# 12</p>
                            <p>Frontend: Razor Pages, Bootstrap 5, jQuery, jQuery Validation</p>
                            <p>Additional Libraries: EPPlus, SkiaSharp, Code Generation Tools</p>
                            <hr className="my-3" />

                            <h5>📁 Project Structure</h5>
                            <pre>
                                {`GymManagement/
├── Controllers/
├── Models/
├── Views/
├── Data/
├── ViewModels/
├── Utilities/
├── wwwroot/
└── Areas/`}
                            </pre>
                            <hr className="my-3" />

                            <h5>👥 Contributors / Credits</h5>
                            <p>
                                Developed as a <strong>solo college project</strong> demonstrating full-stack web development skills.
                            </p>
                            <hr className="my-3" />

                            <h5>📜 License</h5>
                            <p>
                                For educational/demo purposes only. Refer to package licenses for third-party dependencies.
                            </p>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectGymManagement
