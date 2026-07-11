import "./Hero.css"
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <h1>Praveen MC</h1>

<h2>AI Engineer | Generative AI | Machine Learning</h2>

<p>
  AI Engineer with 25+ years of healthcare domain expertise, building
  intelligent applications using Python, Machine Learning, NLP,
  Computer Vision, React and Large Language Models.
</p>
        
        <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    View Projects
  </a>

  <a href="#" className="secondary-btn">
    Download Resume
  </a>

</div>

<div className="hero-links">

  <a
    href="https://github.com/MCPraveen1"
    target="_blank"
    rel="noopener noreferrer"
  >
    💻 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/mc-praveen"
    target="_blank"
    rel="noopener noreferrer"
  >
    💼 LinkedIn
  </a>

</div>

      </div>

      <div className="hero-image">

    <img
        src={profile}
        alt="Praveen MC"
        className="profile-image"
    />

      </div>

    </section>
  )
}

export default Hero