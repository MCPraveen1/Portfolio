import "./Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Featured AI Projects</h2>

      <p className="projects-intro">
  A collection of AI, Machine Learning and Data Analytics projects
  developed through hands-on learning and real-world case studies,
  demonstrating practical, data-driven solutions to business challenges.
</p>

      <div className="project-grid">

        {projects.map((project) => (

         <div key={project.id} className="project-card">

  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <div className="tech-stack">
    <p className="tech-title">
    Tech Stack
</p>
    <span>{project.tech}</span>
  </div>

  <div className="project-links">

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 GitHub
      </a>
    )}

    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        🚀 Live Demo
      </a>
    )}

  </div>

</div>

        ))}

      </div>

    </section>
  );
}

export default Projects;