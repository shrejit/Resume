import {
  Code,
  GraduationCap,
  Award,
  Download,
  Database,
  Layers,
  Trophy,
  Lightbulb
} from "lucide-react";

export default function Resume() {
  const projects = [
    {
      title: "Personal Portfolio/CV Website",
      type: "Frontend Based",
      description:
        "Created a responsive personal portfolio website to highlight academic background, projects, and contact details.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      highlights: [
        "Clean, minimalist design with fluid navigation",
        "Fully responsive across all devices",
        "Showcases projects and skills effectively"
      ]
    },
    {
      title: "MR.Traveler",
      type: "Travel Agency Web Application",
      description:
        "Built a complete full-stack travel website including itinerary, and contact modules.",
      technologies: ["HTML", "CSS", "JavaScript", "Backend Integration"],
      highlights: [
        "Integrated backend for handling forms and query submissions",
        "Complete itinerary management system",
        "User-friendly interface for travel planning"
      ]
    },
    {
      title: "Hospital Management System",
      type: "Database Focused",
      description:
        "Built a hospital management application with patient history, doctor details, and medication modules using Flask and SQL.",
      technologies: ["Flask", "SQL", "Python"],
      highlights: [
        "Established database relationships for complex data management",
        "Secure access control for different roles",
        "Comprehensive patient and medication tracking"
      ]
    },
    {
      title: "Smart Dustbin",
      type: "Neo4j-Based Project",
      description:
        "Developed a sensors, microcontrollers and Neo4j-based intelligent dustbin system to monitor and maximize waste collection.",
      technologies: ["Neo4j", "IoT Sensors", "Microcontrollers"],
      highlights: [
        "Real-time waste monitoring system",
        "Optimized waste collection routes",
        "Integration of graph database with IoT sensors"
      ]
    },
    {
      title: "Smart Street Light",
      type: "IoT Project",
      description:
        "Developed an automated street light system to minimize energy consumption, employing motion sensors and light detectors.",
      technologies: ["IoT", "Motion Sensors", "Light Detectors"],
      highlights: [
        "Significant energy consumption reduction",
        "Automated lighting based on environmental conditions",
        "Motion detection for intelligent lighting control"
      ]
    }
  ];

  const education = [
    {
      degree: "BE, Computer Science and Engineering",
      institution: "Bangalore Institute of Technology",
      period: "Expected Graduation: 2027",
      score: "CGPA: 8.2"
    },
    {
      degree: "PUC (Pre-University Course)",
      institution: "Vidya Mandir Ind PU College",
      period: "2023",
      score: "Percentage: 90%"
    },
    {
      degree: "SSLC (CBSE)",
      institution: "Sindhi High School",
      period: "2021",
      score: "Percentage: 84.8%"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      items: ["C", "Java", "Python (Basics)", "JavaScript (Basics)"]
    },
    {
      category: "Web Technologies",
      icon: Layers,
      items: ["HTML", "CSS", "JavaScript", "React (Basics)", "Node.js (Basics)"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["Oracle SQL", "MongoDB"]
    }
  ];

  const tools = ["VS Code", "Eclipse", "SQL Developer", "Git & GitHub"];

  const concepts = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming (OOP)",
    "Operating Systems (Basics)"
  ];

  const certifications = [
    {
      name: "Data Structures and Algorithms using Java",
      issuer: "Infosys Springboard"
    },
    {
      name: "Basics of Python",
      issuer: "Infosys Springboard"
    },
    {
      name: "HTML & CSS",
      issuer: "CodeKaro E-Certificate"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-slate-800 mb-4">Resume</h1>

          <a
          href="/resume.pdf"
          download="resume.pdf"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg"
          >
          <Download size={20} />
          Download PDF
          </a>

        </div>


        {/* Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-slate-800 mb-4">Summary</h2>
            <p className="text-slate-700">
              Enthusiastic and curious Computer Science engineering student with a passion for turning real-world
              problems into practical tech solutions. I have a basic understanding of data structures and algorithms.
              Over time, I've gained hands-on experience building web applications across front-end, and I work well
              in collaborative, agile environments. I'm always up for a challenge and enjoy using a mix of creativity,
              logic, and innovation to find smart, effective solutions.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-green-600" size={28} />
            <h2 className="text-slate-800">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="text-green-600" size={24} />
                    <h3 className="text-slate-800">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools & Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-slate-800 mb-4">Tools & IDEs</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-slate-800 mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                {concepts.map((concept, idx) => (
                  <li key={idx} className="text-slate-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-blue-600" size={28} />
            <h2 className="text-slate-800">Projects</h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-slate-800 mb-1">{project.title}</h3>
                    <p className="text-blue-600">{project.type}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-slate-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-purple-600" size={28} />
            <h2 className="text-slate-800">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-slate-800 mb-1">{edu.degree}</h3>
                    <p className="text-purple-600 mb-2">{edu.institution}</p>
                    <p className="text-slate-600">{edu.score}</p>
                  </div>
                  <span className="text-slate-500 mt-2 sm:mt-0">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-amber-600" size={28} />
            <h2 className="text-slate-800">Certifications</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-slate-800">{cert.name}</p>
                    <p className="text-slate-600">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hackathons */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-orange-600" size={28} />
            <h2 className="text-slate-800">Hackathons</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
            <h3 className="text-slate-800 mb-2">TechXcelerate Hackathon</h3>
            <p className="text-orange-600 mb-3">BITS Pilani</p>
            <p className="text-slate-700">
              Built a platform connecting food donors to NGOs for redistributing excess food.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
