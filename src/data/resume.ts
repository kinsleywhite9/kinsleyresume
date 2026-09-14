export const profile = {
  name: "Kinsley White",
  role: "AI/IT Engineer",
  summary:
    "Building AI-driven tooling and IT infrastructure inside regulated environments. Background in cloud security, compliance, and Zero Trust architecture from federal and financial systems work.",
  about:
    "I'm an AI/IT Engineer working within a regulated financial services environment, integrating AI tooling into enterprise IT operations. My background runs through federal defense systems and payment infrastructure — where the security fundamentals came from. Currently completing a Master's in Cybersecurity.",
  linkedin: "https://www.linkedin.com/in/kinsley-white-ga/",
  github: "https://github.com/devseckinzlo",
};

export type ExperienceEntry = {
  path: string;
  title: string;
  org: string;
  duration: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    path: "./ai-it-engineer-i",
    title: "AI/IT Engineer I",
    org: "Financial Services / Banking",
    duration: "present",
    bullets: [
      "support AI tooling integration + IT infra ops in a regulated banking environment",
      "apply security-first principles to systems onboarding + operational readiness",
    ],
  },
  {
    path: "./software-engineer",
    title: "Software Engineer",
    org: "Federal Defense Agency",
    duration: "2024 – present",
    bullets: [
      "maintained 99.9% uptime for payroll systems serving 1M+ users",
      "ran vulnerability assessments, enforced zero-trust access controls",
      "supported legacy-to-modern platform migrations + data validation",
    ],
  },
  {
    path: "./network-infrastructure-assistant",
    title: "Network Infrastructure Assistant",
    org: "Higher Education",
    duration: "2021",
    bullets: [
      "supported university-wide network administration + switch/router/AP maintenance",
      "identified + resolved unauthorized access incidents, applied security patches",
    ],
  },
];

export type SkillGroup = {
  file: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  { file: "ai_cloud.txt", skills: ["python", "llm-integration", "azure", "prompt-eng"] },
  { file: "security.txt", skills: ["zero-trust", "iam", "threat-modeling", "devsecops"] },
  { file: "languages.txt", skills: ["python", "java", "javascript", "powershell"] },
  { file: "tools.txt", skills: ["docker", "git", "ci-cd", "jira"] },
];

export type EducationEntry = {
  degree: string;
  school: string;
  status: string;
};

export const education: EducationEntry[] = [
  { degree: "M.S. Cybersecurity", school: "Columbus State University", status: "in progress" },
  { degree: "B.S. Information Technology", school: "Columbus State University", status: "complete" },
];

export type CertEntry = {
  name: string;
  status?: string;
};

export const certifications: CertEntry[] = [
  { name: "security_plus.cert" },
  { name: "az-900.cert" },
  { name: "sc-900.cert" },
  { name: "sc-500.cert", status: "in progress" },
];
