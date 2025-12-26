export default function SkillBadge({ skill }: { skill: string }) {
  return <span className="px-2 py-1 bg-accent">{skill}</span>;
}