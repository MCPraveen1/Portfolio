import "./Hero.css"
import profile from "../assets/profile.png";
import profileData from "../data/profile";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <h1>{profileData.name}</h1>

<h2>{profileData.title}</h2>

<p>{profileData.description}</p>
        
        <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    View Projects
  </a>

  <a
  href="/resume/Praveen_MC_Resume.pdf"
  download
  className="secondary-btn"
>
  Download Resume
</a>

</div>

<div className="hero-links">

  <a
    href={profileData.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    💻 GitHub
  </a>

  <a
    href={profileData.linkedin}
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