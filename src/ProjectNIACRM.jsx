function ProjectNIACRM() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Text Column (Left) */}
        {/* Text Column (Right) for NIA CRM */}
        <div className="col-md-6 px-4">
          <h2 className="fw-bold mb-3 text-primary">🚀 Stellar Co. NIA CRM</h2>

          <p className="lead">
            <strong>Stellar Co.</strong> is a <strong>student-led development team</strong> formed at
            <strong> Niagara College</strong> in early <strong>2025</strong>. The team was created to tackle
            <em>real-world software challenges</em> through <strong>academic-industry partnerships</strong>.
          </p>
          <hr className="my-4" />
          <p>
            Our <strong>capstone project</strong> focused on designing and building a
            <strong>feature-rich, secure, and scalable CRM Web Application</strong> for the
            <strong>Niagara Industrial Association (NIA)</strong>.
          </p>

          <p>
            This was a <strong>community-sponsored project</strong>, developed in close collaboration with a
            <strong>real-world client (NIA)</strong>. We <em>engaged with stakeholders</em> to gather requirements,
            received feedback during sprints, and <em>tailored the solution to their operational needs</em> — bringing
            <strong>real value to a functioning organization</strong>.
          </p>

          <p>
            <strong>Stellar Co.</strong> combines technical expertise in <strong>ASP.NET Core</strong>,
            <strong>MVC architecture</strong>, <strong>SQLite</strong>, and <strong>Azure deployment</strong> with
            <em>agile development practices</em> and effective team collaboration.
          </p>

          <p className="text-success fw-semibold">
            Each team member contributed across the
            <strong> full software development lifecycle</strong> — from <em>requirements gathering</em> to
            <em>design</em>, <em>development</em>, <em>testing</em>, and <em>deployment</em>.
          </p>
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#niaModal"
          >
            📖 View Full Project Details
          </button>
          <a href="https://github.com/Divyansh896/NIA-CRM" target="_blank" rel="noreferrer" className="btn btn-outline-primary mx-2 mt-3">View Source Code</a>
        </div>



        <div
          className="col-md-6"
          style={{
            maxHeight: '500px',
            borderLeft: '1px solid #ddd',
            paddingLeft: '20px'
          }}
        >
          <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators ">
              {Array.from({ length: 23 }, (_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                  aria-current={idx === 0 ? 'true' : undefined}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Carousel Images */}
            <div className="carousel-inner">
              {Array.from({ length: 23 }, (_, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                  data-bs-interval="5000"
                >
                  <img
                    src={`/images/niacrm/crm${idx + 1}.jpg`}
                    className="d-block w-100 rounded shadow-sm"
                    alt={`CRM Slide ${idx + 1}`}
                  />

                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>

      <div
        className="modal fade"
        id="niaModal"
        tabIndex="-1"
        aria-labelledby="niaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="niaModalLabel">📘 CRM Web Application – Niagara Industrial Association</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <p>💼 A custom-built CRM web application designed for the <strong>Niagara Industrial Association (NIA)</strong> to manage members, contacts, opportunities, and reports efficiently.</p>
              <hr />
              <h5 className="fw-bold text-secondary">👥 About Stellar Co.</h5>
              <p>
                <strong>Stellar Co.</strong> is a <em>student-led development team</em> formed at <strong>Niagara College</strong> in early <strong>2025</strong>.
                Our capstone project focused on designing and building a <strong>feature-rich, secure, and scalable CRM Web Application</strong> for the NIA.
              </p>
              <p>
                🧠 We collaborated directly with real-world clients, gathered requirements, and tailored the solution with agile practices and full stakeholder engagement.
              </p>
              <hr />
              <h5 className="fw-bold">🤝 Collaborators</h5>
              <ul>
                <li>Divyansh</li>
                <li>Elizaveta Lazareva</li>
                <li>Rohit Thakur</li>
                <li>Khushi Vij</li>
                <li>Tania</li>
              </ul>
              <hr />
              <h5 className="fw-bold">📌 Table of Contents</h5>
              <ul className="mb-4">
                <li>Introduction</li>
                <li>Project Overview</li>
                <li>Objective</li>
                <li>Timeline</li>
                <li>Key Features</li>
                <li>Technical Stack</li>
                <li>Security & Performance</li>
                <li>Interface Requirements</li>
                <li>Deployment Info</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🧩 Introduction</h5>
              <p>
                The CRM app simplifies data entry, enhances access to member/contact info, and supports NIA's mission of industrial development via improved communication and reporting.
              </p>
              <hr />
              <h5 className="fw-bold text-primary">📊 Project Overview</h5>
              <p><strong>🎯 Objective:</strong> To build a secure and responsive CRM system for NIA staff.</p>
              <p><strong>⏳ Timeline:</strong> Jan 2025 – Apr 2025</p>
              <hr />
              <h5 className="fw-bold text-primary">🛠 Key Features</h5>
              <ul>
                <li><strong>🔑 Role-based Access:</strong> Admins and Supervisors with specific permissions</li>
                <li><strong>🔐 Authentication:</strong> Secure login via ASP.NET Identity</li>
                <li><strong>📊 Dashboards:</strong> Visual role-based metrics</li>
                <li><strong>📋 CRUD Modules:</strong> For Members, Contacts, Opportunities</li>
                <li><strong>📤 Reporting:</strong> Export reports as PDF/CSV</li>
                <li><strong>✉️ Email Alerts:</strong> Mailtrap/SMTP integration</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">⚙️ Technical Stack</h5>
              <ul>
                <li><strong>Frontend:</strong> Razor Views, HTML, CSS, JavaScript</li>
                <li><strong>Backend:</strong> C#, ASP.NET Core MVC</li>
                <li><strong>Database:</strong> SQLite + EF Core</li>
                <li><strong>Authentication:</strong> ASP.NET Identity</li>
                <li><strong>Email:</strong> Mailtrap, SMTP</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🔐 Security & Compliance</h5>
              <ul>
                <li>Role-based route protection</li>
                <li>Input sanitization</li>
                <li>Password hashing</li>
                <li>Form validation</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🚀 Performance</h5>
              <ul>
                <li>⚡ Fast response time (≤ 2 seconds)</li>
                <li>📈 Scalable & stable</li>
                <li>🖥️ Hosted on Azure</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">💻 Interface Requirements</h5>
              <ul>
                <li>Razor Views + Bootstrap UI</li>
                <li>HTTP/HTTPS communication</li>
                <li>SMTP email notifications</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🧱 Technology Summary</h5>
              <ul>
                <li>ASP.NET Core MVC + EF Core + SQLite</li>
                <li>GitHub for version control</li>
                <li>Azure for hosting</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🌐 Hosted App</h5>
              <p>🔗 <a href="https://nia-crm.azurewebsites.net" target="_blank" rel="noreferrer">https://nia-crm.azurewebsites.net</a></p>
              <hr />
              <h6 className="fw-bold">🧪 Test Users</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>admin@outlook.com</td>
                    <td>Pa55w@rd</td>
                    <td>Admin</td>
                  </tr>
                  <tr>
                    <td>super@outlook.com</td>
                    <td>Pa55w@rd</td>
                    <td>Supervisor</td>
                  </tr>
                </tbody>
              </table>

              <p>📄 <strong>Download Manual:</strong> NIA CRM User Manual.pdf</p>
              <p className="text-success">🚀 Built by Stellar Co.</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}
export default ProjectNIACRM;