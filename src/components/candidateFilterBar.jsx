import React from "react";
import { Search } from "lucide-react";

export default function CandidateFilterBar({ search, setSearch, stage, setStage }) {
  const stages = ["Applied", "Interview", "Offer", "Hired", "Rejected"];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col sm:flex-row items-center gap-3">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        value={stage}
        onChange={(e) => setStage(e.target.value)}
        className="border border-slate-300 rounded-lg px-4 py-2.5 bg-white"
      >
        <option value="">All Stages</option>
        {stages.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
