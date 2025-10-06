export async function fetchJobs({ search = "", status = "", page = 1, pageSize = 10 } = {}) {
  const params = new URLSearchParams({ search, status, page, pageSize });
  const res = await fetch(`/api/jobs?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to load jobs");
  return res.json();
}

export async function createJob(payload) {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create job");
  return res.json();
}
