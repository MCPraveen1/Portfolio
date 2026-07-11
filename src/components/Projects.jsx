import "./Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Featured AI Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (

          <div key={project.id} className="project-card">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;