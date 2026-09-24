function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">ML / AI ENGINEER</p>

        <h1>
          Turning ideas 
          <span> into AI-powered systems.</span>
        </h1>

        <p className="hero-description">
          I'm Vinit Pansare, an MCA student focused on Machine Learning,
          Deep Learning and Generative AI. I build practical AI systems
          from model development to APIs and deployment.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            View Projects
          </a>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
          Resume ↗
        </a>


          <a
            href="https://github.com/vinitpansare089-netizen"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="terminal-top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="terminal">
          <p>
            <span className="purple">vinit@ai</span>:~$ whoami
          </p>

          <p className="terminal-output">
            ml_ai_engineer
          </p>

          <p>
            <span className="purple">vinit@ai</span>:~$ skills
          </p>

          <p className="terminal-output">
            Python · ML · PyTorch · GenAI
          </p>

          <p>
            <span className="purple">vinit@ai</span>:~$ status
          </p>

          <p className="terminal-output">
            building...
          </p>

          <span className="cursor">_</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;