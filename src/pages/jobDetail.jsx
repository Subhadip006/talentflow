import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, MapPin, DollarSign, Clock, Users, Star, Send } from "lucide-react";

export default function JobDetail() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual API call later
  const job = {
    id: jobId,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    posted: "2 days ago",
    applicants: 45,
    status: "active",
    description: `We're looking for an experienced Frontend Developer to join our growing team. You'll work on building beautiful, responsive web applications using modern technologies.`,
    responsibilities: [
      "Develop and maintain high-quality web applications",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable code following best practices",
      "Participate in code reviews and technical discussions",
      "Optimize applications for maximum speed and scalability"
    ],
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong understanding of HTML, CSS, and responsive design",
      "Experience with state management libraries (Redux, Zustand)",
      "Familiarity with TypeScript and testing frameworks",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Modern office with great amenities"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Jobs</span>
        </button>

        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {job.title.charAt(0)}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{job.title}</h1>
                <p className="text-lg text-slate-600 mb-3">{job.company}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md whitespace-nowrap">
                <Send className="w-4 h-4" />
                Apply Now
              </button>
              <button className="flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                <Star className="w-4 h-4" />
                Save Job
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-slate-800 mb-1">
                <Users className="w-5 h-5 text-emerald-600" />
                {job.applicants}
              </div>
              <p className="text-sm text-slate-600">Applicants</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">Remote</div>
              <p className="text-sm text-slate-600">Work Option</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800 mb-1">Mid-Senior</div>
              <p className="text-sm text-slate-600">Experience</p>
            </div>
            <div className="text-center">
              <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
              </span>
              <p className="text-sm text-slate-600 mt-1">Status</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">About the Role</h2>
          <p className="text-slate-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </div>
                <span className="text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <span className="text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {job.benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-5 h-5 text-emerald-600 mt-0.5">✓</div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}