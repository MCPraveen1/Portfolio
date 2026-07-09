import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <section id="footer" className="footer">

      <h3>Praveen MC</h3>

      <p>
        AI Engineer | Machine Learning Enthusiast
      </p>

      <p>
        © {year} Praveen MC. All Rights Reserved.
      </p>

      <p className="footer-note">
        Built with React ❤️
      </p>

    </section>
  );
}

export default Footer;