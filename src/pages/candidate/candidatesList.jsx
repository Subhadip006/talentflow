import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import { fetchCandidates } from "../../api/candidates";
import CandidateCard from "../../components/candidateCard";
import CandidateFilterBar from "../../components/candidateFilterBar";

export default function CandidatesList() {
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");
  
  const { data: candidates = [], isLoading } = useQuery({
    queryKey: ["candidates", search, stage],
    queryFn: () => fetchCandidates({ search, stage }),
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-emerald-600" />
          <h1 className="text-3xl font-bold text-slate-800">Candidates</h1>
        </header>

        <CandidateFilterBar
          search={search}
          setSearch={setSearch}
          stage={stage}
          setStage={setStage}
        />

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mt-6">
          {isLoading ? (
            <div className="p-10 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent mb-3"></div>
              <p className="text-slate-600">Loading candidates...</p>
            </div>
          ) : candidates.length === 0 ? (
            <div className="p-10 text-center">
              <Users className="w-16 h-16 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-medium">No candidates found.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto">
              {candidates.map((candidate, index) => (
                <div 
                  key={candidate.id || index}
                  style={{
                    animation: `fadeIn 0.3s ease-in ${index * 0.05}s both`,
                  }}
                >
                  <CandidateCard candidate={candidate} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button 
          className="px-4 mt-4 py-2 bg-emerald-600 text-white rounded-md shadow-md hover:bg-emerald-700"
          onClick={() => window.location.href = '/candidates/kanban'}>
            go to kanban 
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}