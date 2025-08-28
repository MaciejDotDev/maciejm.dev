import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {projects.map(p => (
          <article key={p.title} style={{ border: '1px solid var(--panel-border)', borderRadius: 12, padding: 12, background: 'rgba(255,255,255,0.04)' }}>
            <h3 style={{ margin: '0 0 6px' }}>{p.title}</h3>
            <p style={{ margin: 0 }}>{p.blurb}</p>
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--fg-dim)' }}>
              {p.stack.join(' • ')}
            </p>
            <p style={{ margin: '8px 0 0', fontSize: 12 }}>
              {p.url && <a href={p.url} target="_blank" rel="noreferrer">Live</a>}
              {p.url && p.repo ? ' · ' : ''}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
            </p>
          </article>
        ))}
      </div>
    </>
  )
}
