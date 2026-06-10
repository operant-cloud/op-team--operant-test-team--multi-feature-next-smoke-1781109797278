const navigationItems = ["Overview", "Roadmap", "Releases", "Settings"];

const releaseMetrics = [
  { label: "Launch readiness", value: "86%", detail: "12 checks remaining" },
  { label: "Active releases", value: "4", detail: "2 entering beta this week" },
  { label: "Roadmap confidence", value: "92%", detail: "Milestones on track" },
];

const roadmapItems = [
  {
    phase: "Discovery",
    title: "Customer signal review",
    status: "Complete",
  },
  {
    phase: "Build",
    title: "Command center shell",
    status: "In progress",
  },
  {
    phase: "Launch",
    title: "Release communications",
    status: "Scheduled",
  },
];

const releaseItems = [
  { name: "Atlas Mobile 2.4", date: "Jun 18", state: "Release candidate" },
  { name: "Beacon Integrations", date: "Jun 24", state: "Beta" },
  { name: "Console API v3", date: "Jul 02", state: "Planning" },
];

export default function Home() {
  return (
    <main className="studio-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            LC
          </span>
          <div>
            <p className="eyebrow">Command workspace</p>
            <h1>Launch Control Studio</h1>
          </div>
        </div>

        <nav className="navigation" aria-label="Launch sections">
          {navigationItems.map((item) => (
            <a
              className={item === "Overview" ? "nav-link active" : "nav-link"}
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="sidebar-status">
          <p className="eyebrow">Next checkpoint</p>
          <strong>Release council</strong>
          <span>Today at 14:30 UTC</span>
        </div>
      </aside>

      <section className="content-panel" aria-label="Launch operations">
        <header className="hero" id="overview">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Coordinate every launch from plan to production.</h2>
          </div>
          <button type="button" className="primary-action">
            Review readiness
          </button>
        </header>

        <section className="metrics-grid" aria-label="Launch metrics">
          {releaseMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="workspace-grid">
          <article className="workspace-section" id="roadmap">
            <div className="section-heading">
              <p className="eyebrow">Roadmap</p>
              <h3>Milestone flow</h3>
            </div>
            <div className="timeline">
              {roadmapItems.map((item) => (
                <div className="timeline-row" key={item.phase}>
                  <span>{item.phase}</span>
                  <strong>{item.title}</strong>
                  <em>{item.status}</em>
                </div>
              ))}
            </div>
          </article>

          <article className="workspace-section" id="releases">
            <div className="section-heading">
              <p className="eyebrow">Releases</p>
              <h3>Current trains</h3>
            </div>
            <div className="release-list">
              {releaseItems.map((release) => (
                <div className="release-row" key={release.name}>
                  <div>
                    <strong>{release.name}</strong>
                    <span>{release.state}</span>
                  </div>
                  <time>{release.date}</time>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="settings-strip" id="settings">
          <div>
            <p className="eyebrow">Settings</p>
            <h3>Workspace controls</h3>
          </div>
          <div className="settings-actions" aria-label="Settings shortcuts">
            <button type="button">Access</button>
            <button type="button">Environments</button>
            <button type="button">Notifications</button>
          </div>
        </section>
      </section>
    </main>
  );
}
