import "./Projects.css";

function Projects() {
  return (
    <section className="projects">

      <h2>Featured AI Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>AI Website Summarizer</h3>
          <p>
            Summarizes any website using Large Language Models.
          </p>

          <span>React • Groq • LLM</span>
        </div>

        <div className="project-card">
          <h3>FlipItNews NLP</h3>

          <p>
            News classification using Natural Language Processing.
          </p>

          <span>Python • NLP • Scikit-learn</span>
        </div>

        <div className="project-card">
          <h3>Ninjacart Computer Vision</h3>

          <p>
            Vegetable image classification using CNN.
          </p>

          <span>TensorFlow • CNN</span>
        </div>

      </div>

    </section>
  );
}

export default Projects;