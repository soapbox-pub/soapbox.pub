import { Link } from "react-router-dom";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { EmailSignupForm } from "@/components/EmailSignupForm";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <SoapboxLogo size={32} />
                <span className="font-display font-bold text-xl">Soapbox</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Software for the next generation of social media.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Stay Updated</h4>
              <EmailSignupForm tags={['Soapbox']} />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://ditto.pub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Ditto</a></li>
              <li><a href="https://mkstack.xyz" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">MKStack</a></li>
              <li><a href="https://getstacks.dev" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Stacks</a></li>
              <li><a href="https://nostrbook.dev" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Nostrbook</a></li>
              <li><a href="https://nostrhub.io" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">NostrHub</a></li>
              <li><a href="https://nostrify.dev" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Nostrify</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Communities</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://ditto.pub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Ditto.pub</a></li>
              <li><a href="https://treasures.to" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Treasures</a></li>
              <li><a href="https://blobbi.pet" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Blobbi</a></li>
              <li><a href="https://bookstr.xyz" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Bookstr</a></li>
              <li><Link to="/showcase" className="hover:text-white transition-colors">Showcase</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/media-kit" className="hover:text-white transition-colors">Media Kit</Link></li>
              <li><Link to="/soapbox-sessions" className="hover:text-white transition-colors">Soapbox Sessions</Link></li>
              <li><Link to="/get-involved" className="hover:text-white transition-colors">Get Involved</Link></li>
              <li><a href="https://gitlab.com/groups/soapbox-pub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitLab</a></li>
              <li><a href="https://njump.me/npub10qdp2fc9ta6vraczxrcs8prqnv69fru2k6s2dj48gqjcylulmtjsg9arpj" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Nostr</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>♡{currentYear} Soapbox Technology. Please <a className="underline hover:text-white transition-colors" href="https://gitlab.com/soapbox-pub/soapbox.pub" target="_blank" rel="noopener noreferrer">copy and share</a>.</p>
        </div>
      </div>
    </footer>
  );
}