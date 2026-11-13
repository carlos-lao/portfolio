import './styles/App.css';
import portrait from './assets/portrait.jpg';
import resume from './assets/resume.pdf';

const work = [
  {
    title: 'Reproducible development environments',
    description: 'Built a modular workspace platform that automated development setup, CI provisioning, and versioned tooling updates. More than 10 workspaces migrated during the rollout.',
    tools: 'Bazelmod · Nix · EngFlow · Buildkite',
  },
  {
    title: 'Company-wide code ownership',
    description: 'Designed and deployed a centralized service for more than 1,400 ownership records, giving teams a reliable source for automated ownership workflows.',
    tools: 'Go · Python · PostgreSQL · Terraform · AWS',
  },
  {
    title: 'Test observability',
    description: 'Built data pipelines and dashboards for test reliability, and added a gRPC endpoint coverage metric collected through nightly CI.',
    tools: 'Python · Go · Snowflake · PostgreSQL · Superset',
  },
];

const links = {
  email: 'mailto:cdrivlao@gmail.com',
  github: 'https://github.com/carlos-lao',
  linkedin: 'https://www.linkedin.com/in/carlos-lao/',
};

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top">Carlos Lao</a>
          <nav aria-label="Main navigation">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="shell hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · San Francisco</p>
            <h1 id="hero-title">Carlos Lao<span>.</span></h1>
            <p className="intro">I build tools that make software easier to develop, test, and maintain.</p>
            <p className="hero-detail">My work spans developer infrastructure, test observability, and full-stack workflow automation.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button secondary" href={resume}>View résumé <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="portrait-frame">
            <img src={portrait} alt="Carlos Lao" />
          </div>
        </section>

        <section className="work-section" id="projects" aria-labelledby="work-title">
          <div className="shell section-grid">
            <div>
              <h2 id="work-title">Selected work</h2>
              <p className="section-note">Developer Frameworks<br />Applied Intuition</p>
            </div>
            <div className="work-list">
              {work.map(({ title, description, tools }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p className="stack">{tools}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell section-grid about" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <div className="about-copy">
            <p>At Applied Intuition, I built developer infrastructure and led incident response during monthly on-call rotations. Before that, I built Python and React tools at California Costumes that saved more than 200 hours of manual work annually.</p>
            <p>I studied computer science and linguistics at USC and worked on linguistic data and LLM evaluation at Meta. I’m interested in how software can help us study and work with language. Outside of work, I run, sing, play guitar, and crochet.</p>
            <a className="text-link" href={links.github}>More projects on GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer id="contact" aria-labelledby="contact-title">
        <div className="shell section-grid footer-inner">
          <h2 id="contact-title">Get in touch</h2>
          <div className="footer-links">
            <a href={links.email}>Email <span aria-hidden="true">↗</span></a>
            <a href={links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={links.github}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
