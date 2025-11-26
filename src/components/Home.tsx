import { ChevronRight, Briefcase, User, Mail } from 'lucide-react';

type Page = 'home' | 'resume' | 'bio' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
              SG
            </div>
            <h1 className="text-slate-800 mb-4">
              Shrejit S Gowda
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Computer Science Engineering Student | Full Stack Developer | Problem Solver
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              onClick={() => onNavigate('resume')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Resume
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button
              onClick={() => onNavigate('resume')}
              className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-xl transition-all duration-300 text-left group"
            >
              <Briefcase className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-slate-800 mb-2">Resume</h3>
              <p className="text-slate-600">
                Explore my professional experience, education, and skills
              </p>
            </button>

            <button
              onClick={() => onNavigate('bio')}
              className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-xl transition-all duration-300 text-left group"
            >
              <User className="text-purple-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-slate-800 mb-2">Bio</h3>
              <p className="text-slate-600">
                Learn more about my background, interests, and journey
              </p>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-xl transition-all duration-300 text-left group"
            >
              <Mail className="text-green-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-slate-800 mb-2">Contact</h3>
              <p className="text-slate-600">
                Get in touch for opportunities or collaborations
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}