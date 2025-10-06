import Dexie from "dexie";
import { nanoid } from "nanoid";

export const db = new Dexie("TalentFlowDB");

db.version(1).stores({
  jobs: "id,slug,title,status,order",
  candidates: "id,jobId,name,email,stage,createdAt",
  assessments: "jobId",
});

const JOB_COUNT = 25;
const CANDIDATE_COUNT = 1000;
const tagsPool = ["frontend", "backend", "design", "devops", "mobile", "data", "qa", "hr"];

function makeSlug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function randomTags() {
  const n = Math.floor(Math.random() * 3) + 1;
  const out = [];
  for (let i = 0; i < n; i++) out.push(tagsPool[Math.floor(Math.random() * tagsPool.length)]);
  return Array.from(new Set(out));
}

export async function dbInit() {
  const jobCount = await db.jobs.count();
  if (jobCount > 0) return;

  const jobs = Array.from({ length: JOB_COUNT }).map((_, i) => {
    const titles = [
      "Software Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "Product Designer",
      "DevOps Engineer",
      "Data Engineer",
      "QA Engineer",
      "HR Specialist",
    ];
    const title = `${titles[i % titles.length]} ${i + 1}`;
    const slug = `${makeSlug(title)}-${i + 1}`;

    return {
      id: nanoid(),
      title,
      slug,
      status: Math.random() < 0.8 ? "active" : "archived",
      tags: randomTags(),
      order: i,
      createdAt: Date.now() - i * 1000,
    };
  });

  await db.jobs.bulkAdd(jobs);

  const stages = ["applied", "screen", "tech", "offer", "hired", "rejected"];
  const candidates = Array.from({ length: CANDIDATE_COUNT }).map((_, i) => {
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    return {
      id: nanoid(),
      name: `Candidate ${i + 1}`,
      email: `candidate${i + 1}@example.com`,
      jobId: job.id,
      stage: stages[Math.floor(Math.random() * stages.length)],
      createdAt: Date.now() - Math.floor(Math.random() * 100000000),
    };
  });

  await db.candidates.bulkAdd(candidates);
}
