import { education } from "../data/resume";

export function Education() {
  return (
    <section id="education" className="section">
      <div>
        <span className="prompt">$</span> cat education.log
      </div>
      <div className="block section-body education-list">
        {education.map((entry) => (
          <div className="education-row" key={entry.degree}>
            <span>
              {entry.degree} <span className="dim">— {entry.school}</span>
            </span>
            <span className="tag">{entry.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
