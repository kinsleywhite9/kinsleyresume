import profilePhoto from "../assets/profile.jpg";
import { profile } from "../data/resume";

export function Hero() {
  return (
    <div className="hero">
      <div className="photo-frame">
        <img src={profilePhoto} alt={profile.name} />
        <span className="photo-caption">[ photo.jpg ]</span>
      </div>
      <div className="hero-main">
        <div>
          <span className="prompt">$</span> whoami
        </div>
        <div className="hero-name">{profile.name}</div>
        <div className="path hero-role">{profile.role}</div>
        <div>
          <span className="prompt">$</span> cat summary.txt
        </div>
        <p className="dim hero-summary">{profile.summary}</p>
        <div className="hero-links">
          <span>
            &gt;{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin
            </a>
          </span>
          <span>
            &gt;{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
