import { aboutBlurb, freelanceProjects, passions } from '../data/about'

export default function About() {
  return (
    <div className="about">
      <header className="about-hero">
        <img
          className="about-avatar"
          src="/images/me.jpg"                   
          alt="Portrait of Maciej Majorczyk"
          loading="lazy"
          decoding="async"
        />
        <div className="about-blurb">
          <h2>About Me</h2>
          <p>{aboutBlurb}</p>
          <a
            className="cv-link"
            href="/documents/Maciej_Majorczyk_CV_Developer.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </header>

      <section className="about-section">
        <h3>Freelance Highlights</h3>
        <div className="cards">
          {freelanceProjects.map((p) => (
            <article key={p.title} className="card">
              <div className="card-head">
                <h4 className="card-title">{p.title}</h4>
                {p.year && <span className="card-meta">{p.year}</span>}
              </div>
              <p className="card-body">{p.blurb}</p>
              <p className="card-tags">{p.stack.join(' • ')}</p>
              <p className="card-links">
                {p.url && <a href={p.url} target="_blank" rel="noreferrer">Live</a>}
                {p.url && p.repo ? ' · ' : ''}
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h3>Passions</h3>
        <p className="muted">A small gallery of things I enjoy.</p>
        <div className="gallery">
          {passions.map((g) => (
            <figure key={g.title} className="tile">
              <img src={g.img} alt={g.title} loading="lazy" decoding="async" />
              <figcaption>
                <strong>{g.title}</strong>
                {g.caption ? <span> — {g.caption}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}
