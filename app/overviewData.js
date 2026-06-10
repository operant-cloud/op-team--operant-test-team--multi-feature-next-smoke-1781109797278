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
