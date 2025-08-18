import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 text-gray-100 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                  <a 
                    href="mailto:contact@neuctraui.com" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    contact@neuctraui.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Github className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/Taha-Asif-313/neuctra" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    github.com/Taha-Asif-313/neuctra
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Twitter className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Twitter</h3>
                  <a 
                    href="https://twitter.com/neuctraui" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    @neuctraui
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}