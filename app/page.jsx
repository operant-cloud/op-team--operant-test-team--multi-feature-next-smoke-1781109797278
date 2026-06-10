import RoadmapBoard from "./RoadmapBoard";
import { activityFeed, overviewMetrics, projectHealth, releaseRisks, releaseTimeline, roadmapTasks } from "./overviewData";

export default function Home() {
  return (
    <main className="dashboard" aria-labelledby="overview-title">
      <section className="hero" aria-describedby="overview-summary">
        <div>
          <p className="eyebrow">Launch Control Studio</p>
          <h1 id="overview-title">Overview dashboard</h1>
          <p id="overview-summary" className="lede">
            Track delivery momentum, blocked work, release health, and recent operational activity from one focused workspace.
          </p>
        </div>
        <div className="release-status" aria-label="Current release status">
          <span className="pulse" aria-hidden="true" />
          <span>Release train steady</span>
        </div>
      </section>

      <section className="metric-grid" aria-label="Health metrics">
        {overviewMetrics.map((metric) => (
          <article className={`metric-card metric-card--${metric.tone}`} key={metric.label}>
            <div>
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value">{metric.value}</p>
            </div>
            <p className="metric-detail">{metric.detail}</p>
            <p className="metric-trend">{metric.trend}</p>
          </article>
        ))}
      </section>

      <div className="content-grid">
        <section className="panel" aria-labelledby="project-health-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 id="project-health-title">Project health</h2>
            </div>
            <span className="panel-count">3 tracked</span>
          </div>
          <ul className="project-list">
            {projectHealth.map((project) => (
              <li key={project.name}>
                <div className="project-row">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.status}</p>
                  </div>
                  <span>{project.progress}%</span>
                </div>
                <div className="progress-track" aria-label={`${project.name} progress ${project.progress}%`}>
                  <span style={{ width: `${project.progress}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel activity-panel" aria-labelledby="activity-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Now</p>
              <h2 id="activity-title">Activity feed</h2>
            </div>
          </div>
          <ol className="activity-list">
            {activityFeed.map((item) => (
              <li key={`${item.time}-${item.actor}`}>
                <time>{item.time}</time>
                <div>
                  <p>
                    <strong>{item.actor}</strong> {item.action}
                  </p>
                  <span>{item.context}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="panel risk-panel" aria-labelledby="release-risk-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Readiness</p>
              <h2 id="release-risk-title">Release risk</h2>
            </div>
            <span className="panel-count">3 gates</span>
          </div>
          <ul className="risk-list">
            {releaseRisks.map((risk) => (
              <li key={risk.label}>
                <span className={`risk-dot risk-dot--${risk.tone}`} aria-hidden="true" />
                <div>
                  <div className="risk-row">
                    <h3>{risk.label}</h3>
                    <span>{risk.status}</span>
                  </div>
                  <p>{risk.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <RoadmapBoard tasks={roadmapTasks} timeline={releaseTimeline} />
    </main>
  );
}
