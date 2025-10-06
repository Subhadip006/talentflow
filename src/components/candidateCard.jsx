import React from "react";
import { useNavigate } from "react-router-dom";

export default function CandidateCard({ candidate }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition cursor-pointer"
      onClick={() => navigate(`/candidates/${candidate.id}`)}
    >
      <div className="flex items-center gap-3">
        <img
          src={candidate.avatar}
          alt={candidate.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-slate-800">{candidate.name}</h3>
          <p className="text-sm text-slate-500">{candidate.email}</p>
        </div>
      </div>
      <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700">
        {candidate.stage}
      </span>
    </div>
  );
}
