import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      {/* Identity */}
      <div className="footer-identity">
        <p className="footer-name">Vinit Pansare</p>
        <p className="footer-role">ML / AI Engineer</p>
      </div>

      {/* Social Links */}
      <div className="footer-links">
        <a
          href="https://github.com/vinitpansare089-netizen"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/vinit-pansare/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://x.com/vinit_pansare"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          title="X"
        >
          <FaXTwitter />
          <span></span>
        </a>

        <a
          href="https://huggingface.co/vinitpansare"
          target="_blank"
          rel="noreferrer"
          aria-label="Hugging Face"
          title="Hugging Face"
        >
          <SiHuggingface />
          <span>Hugging Face</span>
        </a>

        <a
          href="mailto:vinit.pansare.dev@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Vinit Pansare
      </p>
    </footer>
  );
}

export default Footer;

