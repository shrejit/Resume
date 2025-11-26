import { User, Heart, Target, BookOpen, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export function Bio() {
  const personalInfo = [
    { label: 'Full Name', value: 'Shrejit S Gowda' },
    { label: 'Location', value: 'Bangalore, Karnataka' },
    { label: 'Email', value: 'shrejit18gowda@gmail.com' },
    { label: 'Phone', value: '+91 8618365699' },
    { label: 'LinkedIn', value: 'linkedin.com/in/shrejit-s-gowda-9b2b642b7' },
  ];

  const interests = [
    { 
      icon: '🏓', 
      title: 'Table Tennis', 
      description: 'Active player, competing in college tournaments and matches' 
    },
    { 
      icon: '🏐', 
      title: 'Volleyball', 
      description: 'Team sports enthusiast, playing regularly with college teams' 
    },
    { 
      icon: '👔', 
      title: 'Fashion Events', 
      description: 'Member of the Fashion Team, organizing and participating in college fashion events and inter-college competitions' 
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl">
            <User size={80} />
          </div>
          <h1 className="text-slate-800 mb-4">Bio & Personal Information</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Computer Science Engineering Student | Passionate Developer | Tech Enthusiast
          </p>
        </div>

        {/* About Me */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-600" size={28} />
            <h2 className="text-slate-800">About Me</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-slate-700 mb-4">
              Hello! I'm Shrejit S Gowda, a passionate Computer Science engineering student at Bangalore Institute 
              of Technology, currently pursuing my BE degree with a CGPA of 8.2. My journey in technology is driven 
              by a genuine enthusiasm for turning real-world problems into practical tech solutions.
            </p>
            <p className="text-slate-700 mb-4">
              I have developed a solid foundation in data structures and algorithms, and have gained hands-on experience 
              building various web applications, IoT projects, and database systems. From creating responsive frontend 
              interfaces to implementing backend solutions and working with databases like Oracle SQL and MongoDB, I 
              enjoy every aspect of the development process.
            </p>
            <p className="text-slate-700">
              I thrive in collaborative, agile environments and believe in continuous learning. Whether it's participating 
              in hackathons like TechXcelerate at BITS Pilani or earning certifications from Infosys Springboard, I'm 
              always looking for opportunities to expand my knowledge and skills. When I'm not coding, you'll find me 
              on the table tennis or volleyball court, or actively participating in college fashion events as a member 
              of the Fashion Team.
            </p>
          </div>
        </section>

        {/* Personal Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-purple-600" size={28} />
            <h2 className="text-slate-800">Contact Details</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className={`p-4 flex flex-col sm:flex-row sm:justify-between ${
                  index !== personalInfo.length - 1 ? 'border-b border-slate-200' : ''
                }`}
              >
                <span className="text-slate-600 mb-1 sm:mb-0">{info.label}</span>
                <span className="text-slate-800 break-all">{info.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Extracurricular */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-red-500" size={28} />
            <h2 className="text-slate-800">Hobbies & Extracurricular Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-4xl">{interest.icon}</span>
                  </div>
                  <h3 className="text-slate-800 mb-2">{interest.title}</h3>
                  <p className="text-slate-600">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Academic Journey */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-green-600" size={28} />
            <h2 className="text-slate-800">Academic Journey</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-800 mb-2">Current Education</h3>
                <p className="text-slate-700">
                  <strong>BE in Computer Science and Engineering</strong> at Bangalore Institute of Technology
                </p>
                <p className="text-slate-600">CGPA: 8.2 | Expected Graduation: 2027</p>
              </div>
              <div>
                <h3 className="text-slate-800 mb-2">Previous Education</h3>
                <p className="text-slate-700">
                  <strong>PUC</strong> - Vidya Mandir Ind PU College (90%)
                </p>
                <p className="text-slate-700">
                  <strong>SSLC (CBSE)</strong> - Sindhi High School (84.8%)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-indigo-600" size={28} />
            <h2 className="text-slate-800">My Approach to Development</h2>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md border-l-4 border-indigo-600">
            <blockquote className="text-slate-700 italic mb-4">
              "I'm always up for a challenge and enjoy using a mix of creativity, logic, and innovation to find 
              smart, effective solutions."
            </blockquote>
            <p className="text-slate-700">
              My approach combines technical expertise with creative problem-solving. I believe in writing clean, 
              maintainable code and creating solutions that make a real difference. Whether it's developing a 
              smart dustbin system for waste optimization or building a platform to connect food donors with NGOs, 
              I focus on creating technology that serves people and solves real-world problems.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-pink-600" size={28} />
            <h2 className="text-slate-800">Quick Facts</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-3">
              <li className="text-slate-700 flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Completed multiple projects spanning web development, IoT, and database management</span>
              </li>
              <li className="text-slate-700 flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Participated in TechXcelerate Hackathon at BITS Pilani</span>
              </li>
              <li className="text-slate-700 flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Earned certifications in DSA, Python, and Web Technologies from Infosys Springboard and CodeKaro</span>
              </li>
              <li className="text-slate-700 flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Active member of college Fashion Team, participating in events and competitions</span>
              </li>
              <li className="text-slate-700 flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Work well in collaborative and agile environments</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
