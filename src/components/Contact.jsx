import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Let's Connect</h2>

      <p className="contact-text">
        I'm always interested in discussing AI, Machine Learning,
        Data Science and exciting opportunities.
      </p>

      <div className="contact-details">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>your-email@example.com</p>
        </div>

        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/mc-praveen"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mc-praveen
          </a>
        </div>

        <div className="contact-card">
          <h3>💻 GitHub</h3>
          <a
            href="https://github.com/MCPraveen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/MCPraveen1
          </a>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Kerala, India</p>
        </div>

      </div>

      <button className="resume-btn">
        Download Resume
      </button>

    </section>
  );
}

export default Contact;