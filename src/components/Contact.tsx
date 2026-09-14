import { profile } from "../data/resume";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div>
        <span className="prompt">$</span> contact --open
      </div>
      <div className="contact-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          github
        </a>
      </div>
      <div className="dim footer-note">© {profile.name} — process exited (0)</div>
    </section>
  );
}
