import { skills } from '../data/skills'

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ul className="pill-list">
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </>
  )
}
