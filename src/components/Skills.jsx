const skills = {
  Languages: ["Python", "Java", "JavaScript"],

  "Machine Learning": [
    "Scikit-learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "TF-IDF",
  ],

  "Deep Learning": [
    "PyTorch",
    "Neural Networks",
    "CNN",
  ],

  "Generative AI": [
    "Transformers",
    "Sentence Transformers",
    "RAG",
    "FAISS",
    "Ollama",
  ],

  Backend: [
    "FastAPI",
    "REST APIs",
    "MongoDB",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Docker",
    "Hugging Face",
  ],
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="section-heading">
          <p className="eyebrow">TECHNICAL SKILLS</p>

          <h2>
            Tools I work with.
          </h2>

          <p>
            Technologies I use to build, train, deploy and
            experiment with machine-learning and AI systems.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-group" key={category}>

              <h3>{category}</h3>

              <div className="skill-items">
                {items.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;