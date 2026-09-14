import { certifications } from "../data/resume";

export function Certifications() {
  return (
    <section className="section">
      <div>
        <span className="prompt">$</span> ls certifications/
      </div>
      <div className="certs-grid section-body">
        {certifications.map((cert) => (
          <div className="block cert-card" key={cert.name}>
            <span>{cert.name}</span>
            {cert.status && <span className="tag">{cert.status}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
