import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-azure rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-display font-bold text-xl">Soapbox</span>
            </div>
            <p className="text-gray-400">
              Building tools that empower creators and communities in the decentralized web.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/tools" className="hover:text-white transition-colors">Ditto</Link></li>
              <li><Link to="/tools" className="hover:text-white transition-colors">MKstack</Link></li>
              <li><Link to="/tools" className="hover:text-white transition-colors">Stacks</Link></li>
              <li><Link to="/tools" className="hover:text-white transition-colors">Nostrbook</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/showcase" className="hover:text-white transition-colors">Showcase</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contributing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://gitlab.com/groups/soapbox-pub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitLab</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nostr</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Soapbox. Built by builders, for builders.</p>
        </div>
      </div>
    </footer>
  );
}