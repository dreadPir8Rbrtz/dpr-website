import React from 'react';
import { Code2, Globe, Database, Server, CreditCard, MessageSquare, Mail } from 'lucide-react';
import DPRLogo from './components/DPRLogo';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff00]">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#0a0a0a] border-b border-[#00ff00] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#00ff00]">
              <DPRLogo />
            </div>
            <span className="text-xl font-bold text-[#ff00ff]">dpr development</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:dreadPir8Rbrtz@dpr.dev"
              className="text-[#00ff00] hover:text-[#ff00ff] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <button className="px-6 py-2 border border-[#00ff00] hover:bg-[#00ff00] hover:text-[#0a0a0a] transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative pt-16">
        <div className="h-64 matrix-bg">
          {/* Matrix falling binary code */}
          <div className="binary">01</div>
          <div className="binary">10</div>
          <div className="binary">01</div>
          <div className="binary">11</div>
          <div className="binary">00</div>
          <div className="binary">10</div>
          <div className="binary">01</div>
          <div className="binary">11</div>
          <div className="binary">00</div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative -mt-24">
            <div className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-4 border-[#00ff00] overflow-hidden">
                  <DPRLogo />
                </div>
                <h1 className="text-4xl font-bold mt-4 text-[#ff00ff]">dreadPir8Rbrtz</h1>
                <p className="text-lg mt-2 max-w-2xl text-center text-[#f5f5dc]">
                  software engineer who enjoys building things... send me an email or schedule a free consultation if you want me to build something for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Terminal Section */}
        <section className="mt-32">
          <h2 className="text-2xl font-bold mb-8 font-mono">
            <span className="text-[#f5f5dc]">dpr@development</span>
            <span className="text-[#00ff00]">:~$</span>
            <span className="text-[#ff00ff] ml-2">./send-message.sh</span>
          </h2>
          <Terminal />
        </section>

        {/* Past Projects Section */}
        <section className="mt-32">
          <h2 className="text-2xl font-bold mb-8 font-mono">
            <span className="text-[#f5f5dc]">dpr@development</span>
            <span className="text-[#00ff00]">:~$</span>
            <span className="text-[#ff00ff] ml-2">./show-projects.sh</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Smoke & Go',
                url: 'https://smokengowa.com',
                image: 'https://i.imgur.com/faKg2A5.png',
                description: 'Custom e-commerce solution for a local smoke shop'
              },
              {
                title: "D's Outdoor Living",
                url: 'https://ds-outdoorliving.com',
                image: 'https://i.imgur.com/z2Uodiq.png',
                description: 'Professional website for hot tub/spa retailer'
              }
            ].map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card terminal-border p-6 hover:cursor-pointer"
              >
                <h3 className={`text-xl font-bold ${project.title === 'Smoke & Go' || project.title === "D's Outdoor Living" ? 'text-[#ff00ff]' : ''}`}>
                  {project.title}
                </h3>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mt-4"
                  />
                )}
                <p className="mt-2 text-[#f5f5dc]">{project.description}</p>
                <div className="mt-4 flex items-center text-[#f5f5dc]">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.url}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-8 font-mono">
            <span className="text-[#f5f5dc]">dpr@development</span>
            <span className="text-[#00ff00]">:~$</span>
            <span className="text-[#ff00ff] ml-2">./list-services.sh</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: 'Custom Web Development',
                description: 'Full stack web applications built from scratch'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Domain Setup',
                description: 'Professional domain configuration and management'
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: 'Database Design & Setup',
                description: 'Secure and scalable database implementation'
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: 'Hosting Setup',
                description: 'Reliable website hosting configuration'
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: 'Payment Processing',
                description: 'Secure payment gateway integration'
              }
            ].map((service) => (
              <div key={service.title} className="terminal-border p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#ff00ff]">{service.title}</h3>
                <p className="mt-2 text-[#f5f5dc]">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-24 mb-24">
          <h2 className="text-2xl font-bold mb-8 font-mono">
            <span className="text-[#f5f5dc]">dpr@development</span>
            <span className="text-[#00ff00]">:~$</span>
            <span className="text-[#ff00ff] ml-2">./view-testimonials.sh</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Working with this developer transformed our business. The custom e-commerce solution perfectly fits our needs and has significantly increased our online sales.",
                author: "Owner, Smoke N Go WA"
              },
              {
                text: "The website created for our landscaping business has helped us reach more customers and showcase our work professionally. Couldn't be happier with the results.",
                author: "Owner, DS Outdoor Living"
              }
            ].map((testimonial, index) => (
              <div key={index} className="terminal-border p-6">
                <MessageSquare className="w-8 h-8 mb-4" />
                <p className="italic text-[#f5f5dc]">"{testimonial.text}"</p>
                <p className="mt-4 font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
