import { Routes, Route, Link, useLocation } from "react-router-dom";
import JobsBoard from "./pages/jobsBoard";
import JobDetail from "./pages/jobDetail";
import CreateJob from "./pages/createJob";
import CandidatesList from "./pages/candidate/candidatesList";
import CandidateProfile from "./pages/candidate/candidateProfile";
import CandidatesBoard from "./pages/candidate/candidatesBoard";
import CandidateKanban from "./pages/candidate/candidateKanban";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen min-w-full bg-gray-50">
      {!isHomePage && (
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
      )}

      <main className={isHomePage ? "" : "max-w-6xl mx-auto p-4"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobsBoard />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/jobs/create" element={<CreateJob />} />
          <Route path="/candidates" element={<CandidatesList />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/candidates/kanban" element={<CandidateKanban />} />
        </Routes>
      </main>
    </div>
  );
}