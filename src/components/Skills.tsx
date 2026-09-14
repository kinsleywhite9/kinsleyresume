import { skills } from "../data/resume";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div>
        <span className="prompt">$</span> grep -r . skills/
      </div>
      <div className="skills-grid section-body">
        {skills.map((group) => (
          <div className="block" key={group.file}>
            <div className="path skill-file">{group.file}</div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
