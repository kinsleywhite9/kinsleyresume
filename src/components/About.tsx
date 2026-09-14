import { profile } from "../data/resume";

export function About() {
  return (
    <section id="about" className="section">
      <div>
        <span className="prompt">$</span> cat about.md
      </div>
      <div className="block section-body">
        <p className="dim" style={{ margin: 0, lineHeight: 1.8 }}>
          # About
          <br />
          <br />
          {profile.about}
        </p>
      </div>
    </section>
  );
}
