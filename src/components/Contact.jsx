import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Let's Connect</h2>

      <p className="contact-text">
        I'm always interested in discussing AI, Machine Learning,
        Data Science and exciting opportunities.
      </p>

      <div className="contact-details">

        <div className="contact-card">
  <h3>📧 Email</h3>

  <a
    href="mailto:pchund00bob@gmail.com"
    className="contact-link"
  >
    pchund00bob@gmail.com
  </a>
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

      <a
  href="/resume/Praveen_MC_Resume.pdf"
  download
  className="resume-btn"
>
  Download Resume
</a>

    </section>
  );
}

export default Contact;