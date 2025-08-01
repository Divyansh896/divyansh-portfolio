function ProjectNCR() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image Column (Left) */}
        <div
          className="col-md-6"
          style={{
            maxHeight: '500px',
            overflow: 'hidden',
            paddingRight: '20px',
          }}
        >
          <div id="carouselNCR" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
              {Array.from({ length: 8 }, (_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselNCR"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                  aria-current={idx === 0 ? 'true' : undefined}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Carousel Images */}
            <div className="carousel-inner">
              {Array.from({ length: 8 }, (_, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                  data-bs-interval="5000"
                >
                  <img
                    src={`/images/ncr/ncr${idx + 1}.jpg`}
                    className="d-block w-100 rounded shadow-sm"
                    alt={`NCR Slide ${idx + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselNCR"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselNCR"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Text Column (Right) */}
        <div className="col-md-6 px-4">
          <h2 className="fw-bold mb-3 text-primary">📌 NCR Tracking System – Stellar Co.</h2>

          <p className="lead">
            A <strong>custom-built web application</strong> designed for manufacturers to manage
            <strong> Non-Conformance Reports (NCRs)</strong> for defective products —
            <em> streamlining quality-assurance workflows</em> across <strong>QA</strong>, <strong>Engineering</strong>,
            and <strong>Purchasing</strong> teams.
          </p>

          <hr className="my-4" />

          <p>
            For this engagement, we partnered with a <strong>mid-sized manufacturing firm</strong> to
            <em> replace spreadsheets and email chains</em> with a <strong>unified NCR Tracking System</strong>.
          </p>

          <p>
            The application mirrors the <strong>clean architecture</strong>, <strong>documentation style</strong>,
            and <strong>agile approach</strong> we used for the <strong>NIA CRM project</strong> while targeting a different domain —
            <em> quality management instead of membership relations</em>.
          </p>

          <p className="text-success fw-semibold">
            This project reflects our commitment to <strong>secure code</strong>, <strong>intuitive UX</strong>, and
            <strong> robust back-end design</strong>. We’re proud to showcase it alongside the NIA CRM as
            <em> proof of our versatility.</em>
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#ncrModal"
          >
            View NCR Tracking System Details
          </button>
          <a href="https://github.com/Divyansh896/NCR-Prototype_1" target="_blank" rel="noreferrer" className="btn btn-outline-primary mx-2">View Source Code</a>

        </div>
      </div>

      <div
        className="modal fade"
        id="ncrModal"
        tabIndex="-1"
        aria-labelledby="ncrModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ncrModalLabel">
                📌 NCR Tracking System – Stellar Co.
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>
                💼 A custom-built web application designed for manufacturers to
                manage Non-Conformance Reports (NCRs) for defective products—
                streamlining quality-assurance workflows across QA, Engineering,
                and Purchasing teams.
              </p>
              <hr />
              <h5 className="fw-bold text-secondary">👥 About Stellar Co.</h5>
              <p>
                <strong>Stellar Co.</strong> is a <em>student-led development team</em>{" "}
                formed at <strong>Niagara College</strong> in late <strong>2024</strong>.
                Our capstone projects pair us with real-world organizations to solve
                genuine business problems.
              </p>
              <p>
                For this engagement, we partnered with a <strong>mid-sized manufacturing firm</strong> to{" "}
                <em>replace spreadsheets and email chains</em> with a unified NCR
                Tracking System.
              </p>

              <p>
                The application mirrors the <strong>clean architecture</strong>,{" "}
                <strong>documentation style</strong>, and <strong>agile approach</strong>{" "}
                we used for the NIA CRM project while targeting a different domain—
                <em> quality management instead of membership relations</em>.
              </p>

              <p className="text-success fw-semibold">
                This repo reflects our commitment to <strong>secure code</strong>,{" "}
                <strong>intuitive UX</strong>, and <strong>robust back-end design</strong>.
                We’re proud to showcase it alongside the NIA CRM as proof of our versatility.
              </p>
              <hr />
              <h5 className="fw-bold">🤝 Collaborators</h5>
              <ul>
                <li>Divyansh</li>
                <li>Elizaveta Lazareva</li>
                <li>Rohit Thakur</li>
              </ul>
              <hr />
              <h5 className="fw-bold">📌 Table of Contents</h5>
              <ul className="mb-4">
                <li>Introduction</li>
                <li>Project Overview</li>
                <li>Key Features</li>
                <li>Technical Stack</li>
                <li>Functional Modules</li>
                <li>Security & Compliance</li>
                <li>Performance Requirements</li>
                <li>Interface Requirements</li>
                <li>Other Non-functional Attributes</li>
                <li>Hosted Link & Login Info</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🧩 Introduction</h5>
              <p>
                The NCR Tracking System is a responsive web app that centralizes all
                defect reports in one place, ensuring traceability, accountability,
                and faster resolution. The system went from concept to deployment
                between September – December 2024.
              </p>
              <hr />
              <h5 className="fw-bold text-primary">📊 Project Overview</h5>
              <p>
                <strong>🎯 Objective:</strong> Eliminate email-driven NCRs by giving QA,
                Engineers, and Purchasing a single workflow with status tracking,
                attachments, and analytics.
              </p>
              <p>
                <strong>⏳ Timeline:</strong> September 2024 – December 2024<br />
                (Requirements → Design → Development → Testing → Deployment)
              </p>
              <hr />
              <h5 className="fw-bold text-primary">👥 Team Members</h5>
              <p>See the Collaborators list above.</p>
              <hr />
              <h5 className="fw-bold text-primary">🛠 Key Features</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Role-Based Access</td>
                    <td>Separate permissions for QA, Engineers, Purchasing, Admin</td>
                  </tr>
                  <tr>
                    <td>Dynamic Dashboards</td>
                    <td>At-a-glance counts for Open, In Progress, Resolved, Closed</td>
                  </tr>
                  <tr>
                    <td>Full NCR Lifecycle</td>
                    <td>Create, assign, comment, attach evidence, change status</td>
                  </tr>
                  <tr>
                    <td>Search & Filters</td>
                    <td>Product ID, Defect Type, Severity, Date, Status</td>
                  </tr>
                  <tr>
                    <td>Analytics Reports</td>
                    <td>Export PDF/CSV; charts for recurring defects & lead time</td>
                  </tr>
                  <tr>
                    <td>Mobile-First UI</td>
                    <td>TailwindCSS for responsive screens</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h5 className="fw-bold text-primary">⚙️ Technical Stack</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Technologies & Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Markup</td>
                    <td>HTML5</td>
                  </tr>
                  <tr>
                    <td>Styling</td>
                    <td>CSS3 (Flexbox, Grid, media queries)</td>
                  </tr>
                  <tr>
                    <td>Logic</td>
                    <td>Vanilla JavaScript (ES6+)</td>
                  </tr>
                  <tr>
                    <td>Data</td>
                    <td>
                      fetch() API → loads seed data from ncr_reports.json and updates
                      state in localStorage
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h5 className="fw-bold text-primary">🧩 Functional Modules</h5>
              <ul>
                <li>User & Role Management – Admins manage users/roles.</li>
                <li>NCR Creation – QA logs product defects with photos/docs.</li>
                <li>
                  Investigation Workflow – Engineers add root-cause analysis & corrective
                  actions.
                </li>
                <li>
                  Purchasing Actions – Generate POs/material requisitions before closure.
                </li>
                <li>
                  Reporting Dashboard – Visualize realtime graphs and export reports.
                </li>
                <li>Audit Trail – Immutable log of every status change & comment.</li>
              </ul>
              <hr />
              <h5 className="fw-bold text-primary">🔧 Other Non-functional Attributes</h5>
              <p>Security | Reliability | Maintainability | Portability | Extensibility</p>
              <hr />
              <h5 className="fw-bold text-primary">🌐 Hosted Link & Login Info</h5>
              <p>URL: Hosted Locally</p>
              <hr />
              <h5 className="fw-bold">🧪 Test Users</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>jsmith</td>
                    <td>jsmithqa</td>
                    <td>QA</td>
                  </tr>
                  <tr>
                    <td>dhenry</td>
                    <td>dhenryer</td>
                    <td>Engineer</td>
                  </tr>
                  <tr>
                    <td>bmiller</td>
                    <td>bmilleroc</td>
                    <td>Purchasing</td>
                  </tr>
                  <tr>
                    <td>gwhite</td>
                    <td>gwhitead</td>
                    <td>Admin</td>
                  </tr>
                </tbody>
              </table>

              <p>📄 User Manual PDF: Coming soon</p>
              <p className="text-success">🚀 Developed by Stellar Co.</p>
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
    </div>
  );
}

export default ProjectNCR;
