import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'shrejit18gowda@gmail.com', href: 'mailto:shrejit18gowda@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8618365699', href: 'tel:+918618365699' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, Karnataka', href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/shrejit-s-gowda-9b2b642b7', color: 'text-blue-600' },
    { icon: Github, label: 'GitHub', url: 'https://github.com', color: 'text-slate-800' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', color: 'text-sky-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-slate-800 mb-4">Get In Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-slate-800 mb-6">Contact Information</h2>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-600 mb-1">{item.label}</p>
                      <p className="text-slate-800">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-slate-800 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className={social.color} size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-slate-800 mb-2">Availability</h3>
              <p className="text-slate-700">
                Currently pursuing BE in Computer Science. Open to internships, collaborative projects, and learning opportunities.
              </p>
              <div className="mt-3 flex items-center gap-2 text-green-700">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-slate-800 mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-white p-12 rounded-lg shadow-md text-center animate-fade-in">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h3 className="text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}