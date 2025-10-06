import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCandidateById } from "../../api/candidates";

export default function CandidateProfile() {
  const { id } = useParams();

  const { data: candidate, isLoading, error } = useQuery({
    queryKey: ["candidate", id],
    queryFn: () => fetchCandidateById(id),
  });

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading candidate...
      </div>
    );
  }

  if (error || !candidate) {
    return (
      <div className="p-6 text-center text-gray-600">
        Candidate not found.
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link
        to="/candidates"
        className="text-emerald-600 hover:underline text-sm"
      >
        ← Back to Candidates
      </Link>

      <div className="mt-4 bg-white p-6 rounded-xl shadow">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={candidate.avatar}
            alt={candidate.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{candidate.name}</h1>
            <p className="text-gray-600">{candidate.email}</p>
          </div>
        </div>

        <h2 className="font-semibold text-lg text-gray-700 mb-2">
          Status Timeline
        </h2>
        <ul className="border-l-2 border-emerald-500 pl-4 mb-6">
          {candidate.timeline.map((s, idx) => (
            <li key={idx} className="mb-3">
              <p className="font-medium text-emerald-700">{s.stage}</p>
              <p className="text-sm text-gray-500">
                {new Date(s.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="font-semibold text-lg text-gray-700 mb-2">Notes</h2>
        <ul className="space-y-2">
          {(candidate.notes || []).map((note, idx) => (
            <li
              key={idx}
              className="bg-gray-50 border p-3 rounded-lg text-sm"
              dangerouslySetInnerHTML={{
                __html: (note.text || "").replace(
                  /@(\w+)/g,
                  '<span class="text-emerald-600 font-medium">@$1</span>'
                ),
              }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
