import { experience } from "../data/resume";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div>
        <span className="prompt">$</span> ls -la experience/
      </div>
      <div className="experience-list section-body">
        {experience.map((job) => (
          <div className="block" key={job.path}>
            <div className="experience-head">
              <div>
                <span className="path">{job.path}</span>
              </div>
              <span className="tag">{job.duration}</span>
            </div>
            <div className="dim experience-org">org: {job.org.toLowerCase().replace(/\s+/g, "-")}</div>
            <ul className="experience-bullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
