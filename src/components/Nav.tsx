import { profile } from "../data/resume";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <nav className="site-nav">
      <span className="site-nav-name">{profile.name}</span>
      <div className="site-nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
