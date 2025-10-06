import { faker } from "@faker-js/faker";

const candidates = Array.from({ length: 1000 }).map((_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  stage: faker.helpers.arrayElement([
    "Applied",
    "Interview",
    "Offer",
    "Hired",
    "Rejected",
  ]),
  avatar: faker.image.avatar(),
  timeline: [
    { stage: "Applied", date: faker.date.past().toISOString() },
    { stage: "Interview", date: faker.date.recent().toISOString() },
  ],
}));

export async function fetchCandidates({ search = "", stage = "" }) {
  await new Promise((r) => setTimeout(r, 200)); 
  return candidates.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStage = !stage || c.stage === stage;
    return matchesSearch && matchesStage;
  });
}

export async function fetchCandidateById(id) {
  await new Promise((r) => setTimeout(r, 200));
  return candidates.find((c) => c.id === Number(id));
}
