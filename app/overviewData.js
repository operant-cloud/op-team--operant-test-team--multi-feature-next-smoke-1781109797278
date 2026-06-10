export const overviewMetrics = [
  {
    label: "Active projects",
    value: "18",
    detail: "12 on track",
    trend: "+3 this week",
    tone: "mint",
  },
  {
    label: "Blocked work",
    value: "7",
    detail: "4 awaiting review",
    trend: "-2 since Monday",
    tone: "amber",
  },
  {
    label: "Deployment health",
    value: "99.93%",
    detail: "14 services healthy",
    trend: "2 incidents closed",
    tone: "blue",
  },
  {
    label: "Cycle time",
    value: "2.8d",
    detail: "Median idea to ship",
    trend: "18% faster",
    tone: "rose",
  },
];

export const projectHealth = [
  { name: "Launch Control Studio", status: "Shipping", progress: 86 },
  { name: "Billing orchestration", status: "Watching", progress: 64 },
  { name: "Partner API rollout", status: "Blocked", progress: 41 },
];

export const activityFeed = [
  {
    time: "09:42",
    actor: "Maya Chen",
    action: "cleared the mobile release gate",
    context: "QA sign-off completed for iOS 2.7",
  },
  {
    time: "08:55",
    actor: "Deploy Bot",
    action: "promoted web console to production",
    context: "Latency stayed below 180 ms during rollout",
  },
  {
    time: "Yesterday",
    actor: "Ravi Patel",
    action: "flagged a dependency risk",
    context: "Identity provider contract needs legal review",
  },
  {
    time: "Yesterday",
    actor: "Ops Review",
    action: "closed the checkout incident",
    context: "Error budget remains within quarterly target",
  },
];

export const releaseRisks = [
  { label: "API freeze", status: "Aligned", detail: "Contract changes locked for Aurora 2.8", tone: "ready" },
  { label: "QA coverage", status: "Watching", detail: "Regression suite at 91% of target", tone: "watching" },
  { label: "Comms readiness", status: "On track", detail: "Customer notes queued for review", tone: "ready" },
];

export const roadmapTasks = [
  {
    title: "Release readiness command center",
    description: "Consolidate go/no-go checks, owner approvals, and incident handoff status in the launch view.",
    status: "In progress",
    owner: "Maya Chen",
    risk: "Medium",
    targetRelease: "Aurora 2.8",
    effort: "L",
  },
  {
    title: "Deployment pause controls",
    description: "Add scoped pause and resume actions for services with active health regressions.",
    status: "Planned",
    owner: "Jon Bell",
    risk: "High",
    targetRelease: "Aurora 2.9",
    effort: "M",
  },
  {
    title: "Partner API rollout guardrails",
    description: "Gate partner traffic ramp by contract state, error budget, and endpoint latency.",
    status: "Blocked",
    owner: "Ravi Patel",
    risk: "High",
    targetRelease: "Aurora 2.8",
    effort: "L",
  },
  {
    title: "QA evidence attachments",
    description: "Attach test runs, screenshots, and exception notes directly to each release gate.",
    status: "Ready",
    owner: "Nora Lewis",
    risk: "Low",
    targetRelease: "Aurora 2.8",
    effort: "S",
  },
  {
    title: "Billing orchestration retries",
    description: "Expose retry windows and reconciliation state for failed downstream billing jobs.",
    status: "In progress",
    owner: "Priya Shah",
    risk: "Medium",
    targetRelease: "Aurora 3.0",
    effort: "M",
  },
  {
    title: "Executive launch digest",
    description: "Generate a daily release summary with risks, ship dates, and recently closed blockers.",
    status: "Done",
    owner: "Leo Grant",
    risk: "Low",
    targetRelease: "Aurora 2.7",
    effort: "S",
  },
];

export const releaseTimeline = [
  {
    date: "Jun 14",
    release: "Aurora 2.7",
    stage: "Production stabilization",
    detail: "Digest automation shipped; monitoring elevated through the weekend.",
    status: "Done",
  },
  {
    date: "Jun 28",
    release: "Aurora 2.8",
    stage: "Release candidate",
    detail: "Readiness center, API guardrails, and QA evidence attachments enter final validation.",
    status: "In progress",
  },
  {
    date: "Jul 12",
    release: "Aurora 2.9",
    stage: "Controlled rollout",
    detail: "Deployment pause controls launch behind an operations-only feature flag.",
    status: "Planned",
  },
  {
    date: "Jul 26",
    release: "Aurora 3.0",
    stage: "Platform release",
    detail: "Billing retries and service-level deployment insights move to general availability.",
    status: "Planned",
  },
];
