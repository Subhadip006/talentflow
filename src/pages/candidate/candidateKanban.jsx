import React, { useState, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import { useQuery } from "@tanstack/react-query";
import { fetchCandidates } from "../../api/candidates";
import SortableCandidate from "../../components/sortableCandidate";

// Define the possible candidate stages
const stages = ["Applied", "Interview", "Offer", "Hired", "Rejected"];

const CandidateKanban = () => {
  // ✅ Initialize columns with empty arrays so Virtuoso never breaks
  const [columns, setColumns] = useState(() =>
    stages.reduce((acc, stage) => {
      acc[stage] = [];
      return acc;
    }, {})
  );

  // ✅ Fetch candidates with React Query
  const { data: candidates = [], isLoading, isError } = useQuery({
    queryKey: ["candidates"],
    queryFn: fetchCandidates,
  });

  // ✅ Whenever candidates change, group them by stage
  useEffect(() => {
    if (candidates.length > 0) {
      const grouped = stages.reduce((acc, stage) => {
        acc[stage] = candidates.filter((c) => c.stage === stage);
        return acc;
      }, {});
      setColumns(grouped);
    }
  }, [candidates]);

  // ✅ Handle loading and error states
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-400">
        Loading candidates...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        Failed to load candidates.
      </div>
    );
  }

  // ✅ Render the Kanban board
  return (
    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 min-h-screen">
      {stages.map((stage) => (
        <div
          key={stage}
          className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col"
        >
          {/* Stage Header */}
          <div className="px-3 py-2 text-center font-semibold text-gray-700 border-b">
            {stage} ({columns[stage]?.length || 0})
          </div>

          {/* Virtualized Candidate List */}
          <Virtuoso
            style={{ height: "75vh" }}
            totalCount={columns[stage]?.length || 0}
            itemContent={(index) => {
              const candidate = columns[stage]?.[index];
              return candidate ? (
                <div className="p-2">
                  <SortableCandidate
                    key={candidate.id}
                    id={candidate.id}
                    candidate={candidate}
                  />
                </div>
              ) : null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CandidateKanban;
