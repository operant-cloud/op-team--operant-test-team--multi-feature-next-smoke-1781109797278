"use client";

import { useMemo, useState } from "react";

const statusOrder = ["All", "Planned", "In progress", "Ready", "Blocked", "Done"];

function normalizeStatus(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

export default function RoadmapBoard({ tasks, timeline }) {
  const [activeStatus, setActiveStatus] = useState("All");

  const statusOptions = useMemo(() => {
    const statuses = new Set(tasks.map((task) => task.status));
    return statusOrder.filter((status) => status === "All" || statuses.has(status));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (activeStatus === "All") {
      return tasks;
    }

    return tasks.filter((task) => task.status === activeStatus);
  }, [activeStatus, tasks]);

  return (
    <section className="roadmap-section" aria-labelledby="roadmap-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Roadmap</p>
          <h2 id="roadmap-title">Task board</h2>
        </div>
        <p className="section-summary">
          {filteredTasks.length} of {tasks.length} features shown
        </p>
      </div>

      <div className="filter-bar" aria-label="Roadmap status filters">
        {statusOptions.map((status) => (
          <button
            className="filter-button"
            type="button"
            aria-pressed={activeStatus === status}
            key={status}
            onClick={() => setActiveStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="roadmap-grid" aria-live="polite">
        {filteredTasks.map((task) => (
          <article className="task-card" key={task.title}>
            <div className="task-card__topline">
              <span className={`status-pill status-pill--${normalizeStatus(task.status)}`}>{task.status}</span>
              <span className="effort-pill">{task.effort}</span>
            </div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <dl className="task-meta">
              <div>
                <dt>Owner</dt>
                <dd>{task.owner}</dd>
              </div>
              <div>
                <dt>Risk</dt>
                <dd>{task.risk}</dd>
              </div>
              <div>
                <dt>Release</dt>
                <dd>{task.targetRelease}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <section className="timeline-panel" aria-labelledby="timeline-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Deployment</p>
            <h2 id="timeline-title">Release timeline</h2>
          </div>
          <p className="section-summary">Next 6 weeks</p>
        </div>
        <ol className="release-timeline">
          {timeline.map((item) => (
            <li key={`${item.release}-${item.date}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <time>{item.date}</time>
                  <span className={`status-pill status-pill--${normalizeStatus(item.status)}`}>{item.status}</span>
                </div>
                <h3>{item.release}</h3>
                <p className="timeline-stage">{item.stage}</p>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
