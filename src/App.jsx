import { Routes, Route, Link } from "react-router-dom";
import JobsBoard from "./pages/jobsBoard";
import JobDetail from "./pages/jobDetail";
import CreateJob from "./pages/createJob";
import CandidatesList from "./pages/candidate/candidatesList";
import CandidateProfile from "./pages/candidate/candidateProfile";
import CandidatesBoard from "./pages/candidate/candidatesBoard";
import CandidateKanban from "./pages/candidate/candidateKanban";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-emerald-600">
            TalentFlow
          </Link>
          <nav className="space-x-4">
            <Link to="/jobs" className="hover:underline">
              Jobs
            </Link>
            <Link to="/candidates" className="hover:underline">
              Candidates
            </Link>
            
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<JobsBoard />} />
          <Route path="/jobs" element={<JobsBoard />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/jobs/create" element={<CreateJob />} />


           <Route path="/candidates" element={<CandidatesList />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          {/* <Route path="/candidates/board" element={<CandidatesBoard />} /> */}
          <Route path="/candidates/kanban" element={<CandidateKanban />} />
        </Routes>
      </main>
    </div>
  );
}
