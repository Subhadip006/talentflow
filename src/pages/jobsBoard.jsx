import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Eye,
  Filter,
} from "lucide-react";
import { fetchJobs } from "../api/jobs";

export default function JobsBoard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const pageSize = 10;
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs", { search, page }],
    queryFn: () => fetchJobs({ search, page, pageSize }),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-emerald-500 border-r-transparent mb-4"></div>
          <p className="text-slate-600 font-medium">Loading jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-800 font-medium">Failed to load jobs</p>
          <p className="text-red-600 text-sm mt-1">Please try again later</p>
        </div>
      </div>
    );
  }

  const jobs = data?.data || [];
  const total = data?.total || 0;
  
  // Filter jobs on the client side based on status
  const filteredJobs = statusFilter === "all" 
    ? jobs 
    : jobs.filter(job => job.status === statusFilter);
  
  const totalPages = Math.ceil(total / pageSize);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "inactive":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "pending":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-slate-800">Jobs Board</h1>
          </div>
          <p className="text-slate-600">Manage and track all your job postings</p>
        </div>

        {/* Search + Filters + Button */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Search jobs by title..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                className="appearance-none pl-9 pr-8 py-3 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                }}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* New Job Button */}
            <button
              onClick={() => navigate("/jobs/create")}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
            >
              <Plus className="w-5 h-5" />
              New Job
            </button>
          </div>
        </div>

        {/* Jobs List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 px-4">
              <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-1">No jobs found</h3>
              <p className="text-slate-500">
                {search || statusFilter !== "all" 
                  ? "Try adjusting your search or filters" 
                  : "Create your first job to get started"}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {filteredJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="px-6 py-4 hover:bg-slate-50 transition-colors group cursor-pointer"
                  style={{
                    animation: `fadeIn 0.3s ease-in ${index * 0.05}s both`,
                  }}
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-sm">
                          {job.title.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors truncate">
                            {job.title}
                          </h3>
                          <p className="text-sm text-slate-500 mt-0.5 truncate">{job.slug}</p>
                          {job.tags && job.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {job.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                          job.status
                        )}`}
                      >
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleJobClick(job.id);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl shadow-sm border border-slate-200 px-6 py-4">
            <div className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-semibold text-slate-800">
                {(page - 1) * pageSize + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-slate-800">
                {Math.min(page * pageSize, total)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-800">{total}</span> jobs
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="flex items-center gap-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium text-slate-700"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (page <= 3) pageNum = i + 1;
                  else if (page >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = page - 2 + i;

                  return (
                    <button
                      key={i}
                      onClick={() => setPage(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        page === pageNum
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="flex items-center gap-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium text-slate-700"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
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