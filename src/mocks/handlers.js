import { http, HttpResponse } from "msw";
import { db } from "../db";
import { nanoid } from "nanoid";

const delay = (min = 200, max = 1000) =>
  new Promise((res) => setTimeout(res, Math.floor(Math.random() * (max - min)) + min));

export const handlers = [
  // GET /api/jobs
  http.get("/api/jobs", async ({ request }) => {
    await delay();
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";
    const status = url.searchParams.get("status") || "";
    const page = Number(url.searchParams.get("page") || 1);
    const pageSize = Number(url.searchParams.get("pageSize") || 10);

    let jobs = await db.jobs.toArray();
    if (search) jobs = jobs.filter((j) => j.title.toLowerCase().includes(search.toLowerCase()));
    if (status) jobs = jobs.filter((j) => j.status === status);

    jobs.sort((a, b) => a.order - b.order);
    const total = jobs.length;
    const data = jobs.slice((page - 1) * pageSize, page * pageSize);

    return HttpResponse.json({ data, total }, { status: 200 });
  }),

  // POST /api/jobs
  http.post("/api/jobs", async ({ request }) => {
    await delay();
    const body = await request.json();
    if (!body.title) {
      return HttpResponse.json({ message: "Title required" }, { status: 400 });
    }

    const slug = body.title.toLowerCase().replace(/\s+/g, "-") + "-" + nanoid(4);
    const order = (await db.jobs.count()) + 1;

    const job = {
      id: nanoid(),
      title: body.title,
      slug,
      status: "active",
      tags: body.tags || [],
      order,
      createdAt: Date.now(),
    };

    await db.jobs.add(job);
    return HttpResponse.json(job, { status: 201 });
  }),
];
