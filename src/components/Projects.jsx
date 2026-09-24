import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "PaapPunyaAI",
    category: "GENAI / RAG",
    description:
      "A mythology-inspired RAG and multi-perspective reasoning system that combines semantic retrieval with LLM-based response generation.",
    tech: [
      "Python",
      "FastAPI",
      "Sentence Transformers",
      "FAISS",
      "Ollama",
      "Docker",
    ],
    github:
      "https://github.com/vinitpansare089-netizen/PaapPunyaAI_v1",
    repo: "PaapPunyaAI_v1",
    demo: null,
  },

  {
    title: "ICMS",
    category: "ML + FULL STACK",
    description:
      "A full-stack intelligent complaint management system that classifies complaints, predicts priority, detects emotion, calculates urgency, and helps route complaints.",
    tech: [
      "React",
      "FastAPI",
      "MongoDB",
      "Scikit-learn",
      "TF-IDF",
    ],
    github:
      "https://github.com/vinitpansare089-netizen/ICMS-Intelligent-Complaint-Management-System",
    repo: "ICMS-Intelligent-Complaint-Management-System",
    demo: null,
  },

  {
    title: "Trinovous Regression Lab",
    category: "MACHINE LEARNING",
    description:
      "An end-to-end machine learning pipeline for predicting student performance with preprocessing, hyperparameter tuning, evaluation and prediction.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],
    github:
      "https://github.com/vinitpansare089-netizen/Trinovous-Regression-Lab",
    repo: "Trinovous-Regression-Lab",
    demo: null,
  },
];

const GITHUB_USERNAME = "vinitpansare089-netizen";

function Projects() {
  const [githubProjects, setGithubProjects] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const results = await Promise.all(
          projects.map(async (project) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${project.repo}`
            );

            if (!response.ok) {
              throw new Error(
                `GitHub API error: ${response.status}`
              );
            }

            const data = await response.json();

            return {
              repo: project.repo,
              data,
            };
          })
        );

        const githubData = {};

        results.forEach(({ repo, data }) => {
          githubData[repo] = data;
        });

        setGithubProjects(githubData);
      } catch (error) {
        console.error("Failed to fetch GitHub project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>Projects I've built.</h2>

        <p>
          Practical work across machine learning, AI engineering
          and full-stack systems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const githubData = githubProjects[project.repo];

          const updatedProject = {
            ...project,

            // GitHub description → preferred
            // Local description → fallback
            description:
              githubData?.description || project.description,

            // Additional GitHub information
            stars: githubData?.stargazers_count ?? 0,
            forks: githubData?.forks_count ?? 0,
            language: githubData?.language ?? null,
            updatedAt: githubData?.updated_at ?? null,

            // GitHub URL is always used
            github:
              githubData?.html_url || project.github,
          };

          return (
            <ProjectCard
              key={project.title}
              project={updatedProject}
              number={index + 1}
              loading={loading}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;