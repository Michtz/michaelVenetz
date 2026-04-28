// Skills section data and types

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SkillSection {
  id: string;
  heading: string;
  /** One concise German sentence describing the subsection */
  description: string;
  groups: SkillGroup[];
}

export const skillSections: SkillSection[] = [
  {
    id: "frontend",
    heading: "Frontend Engineering & Design",
    description:
      "Mein Kern-Stack aus über vier Jahren Praxis in professionellen Produktteams.",
    groups: [
      {
        category: "Sprachen & Frameworks",
        items: ["TypeScript", "React", "Next.js", "JavaScript", "HTML5"],
      },
      {
        category: "Styling & UI",
        items: ["SCSS", "CSS3", "Material UI", "Emotion", "Figma"],
      },
      {
        category: "State & Daten",
        items: ["SWR", "React Hook Form", "REST APIs"],
      },
      {
        category: "Testing",
        items: ["Playwright", "Cypress"],
      },
      {
        category: "Tooling",
        items: ["Git", "Azure DevOps", "ESLint", "Node.js", "Storybook"],
      },
      {
        category: "Weiteres",
        items: [
          "Internationalisierung (next-i18next)",
          "SEO & Web Performance",
          "JSON-LD",
          "Web Components",
        ],
      },
    ],
  },
  {
    id: "ai",
    heading: "AI-Augmented Development",
    description:
      "AI-Tools als fester Bestandteil meines täglichen Workflows — nicht als Spielzeug, sondern als Produktivitätshebel.",
    groups: [
      {
        category: "",
        items: [
          "Claude Code & Cursor als AI-Coding-Agents im täglichen Einsatz",
          "Strukturierte Prompts für reproduzierbare Ergebnisse",
          "Agentic Workflows mit parallelen Subagents und Tool-Use",
          "AI-gestütztes Code-Review und Refactoring",
          "Integration von AI-Features via Anthropic API und MCP-Server",
          "CLI-Automation und Dev-Workflow-Optimierung mit AI",
        ],
      },
    ],
  },
];
