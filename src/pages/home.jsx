import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Briefcase,
      title: "Job Management",
      description: "Create, edit, and manage all your job postings in one place"
    },
    {
      icon: Users,
      title: "Applicant Tracking",
      description: "Track candidates through every stage of your hiring process"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your data"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-blue-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Trusted by 500+ companies
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Hire the best talent,
            <span className="text-emerald-600"> faster</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Streamline your recruitment process with our powerful job board platform. 
            Post jobs, track applicants, and make better hiring decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/login")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              Start Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/jobs")}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-lg font-semibold transition-colors border-2 border-slate-200 text-lg"
            >
              View Demo
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-lg border border-slate-200 p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
              <div className="text-slate-600 font-medium">Active Jobs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-slate-600 font-medium">Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-slate-600 font-medium">Satisfaction Rate</div>
            </div>
            
          </div>
        </div>

        <div className="mt-24 text-center bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your hiring?</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Join hundreds of companies already using our platform
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg text-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}