function ProjectCard({ project, number }) {
  return (
    <article className="project-card">

      {/* Project Number */}
      <div className="project-number">
        {String(number).padStart(2, "0")}
      </div>

      {/* Category */}
      <p className="project-category">
        {project.category}
      </p>

      {/* Title */}
      <h3>{project.title}</h3>

      {/* Description */}
      <p className="project-description">
        {project.description}
      </p>

      {/* Technology Stack */}
      <div className="tech-list">
        {project.tech.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      {/* GitHub Information */}
      <div className="github-meta">

        {project.stars !== undefined && (
          <span>
            ★ {project.stars}
          </span>
        )}

        {project.forks !== undefined && (
          <span>
            Forks {project.forks}
          </span>
        )}

        {project.language && (
          <span>
            {project.language}
          </span>
        )}

      </div>

      {/* Links */}
      <div className="project-links">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>
        )}

      </div>

    </article>
  );
}

export default ProjectCard;