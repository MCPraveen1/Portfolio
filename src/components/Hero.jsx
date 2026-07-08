import "./Hero.css"
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>Praveen MC</h1>

        <h2>AI Engineer | Machine Learning Enthusiast</h2>

        <p>
          Bridging 25+ years of healthcare documentation expertise with modern AI and Machine Learning.
        </p>
        
        <div className="hero-buttons">
          <button>View Projects</button>
          <button>Download Resume</button>
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