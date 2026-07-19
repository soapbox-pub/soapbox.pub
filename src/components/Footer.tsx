import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaTiktok, FaGitlab } from "react-icons/fa6";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import { RelaySelector } from "@/components/RelaySelector";
import { UserFooterSection } from "@/components/UserFooterSection";

type SocialLink = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
};

const socialLinks: SocialLink[] = [
  { label: "Nostr (on Ditto)", href: "https://ditto.pub/soapbox@ditto.pub", image: "/assets/images/ditto/planet.png" },
  { label: "X (Twitter)", href: "https://x.com/SoapboxTech", icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/team_soapbox/", icon: FaInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@teamsoapbox", icon: FaTiktok },
  { label: "GitLab", href: "https://gitlab.com/soapbox-pub", icon: FaGitlab },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-6 gap-8">
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

              {/* Relay Selector Section */}
              <div className="pt-2">
                <RelaySelector className="w-full" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soapbox</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/ethics" className="hover:text-white transition-colors">Ethics Pledge</Link></li>
              <li><Link to="/transparency" className="hover:text-white transition-colors">Transparency</Link></li>
              <li><Link to="/media-kit" className="hover:text-white transition-colors">Media Kit</Link></li>
              <li><a href="https://gitlab.com/groups/soapbox-pub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitLab</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Apps</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://ditto.pub" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Ditto</a></li>
              <li><a href="https://agora.spot" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Agora</a></li>
              <li><a href="https://armada.buzz" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Armada</a></li>
              <li><a href="https://shakespeare.diy" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Shakespeare</a></li>
              <li><Link to="/toybox" className="hover:text-white transition-colors">Toybox</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Dev Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://mkstack.xyz" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">MKStack</a></li>
              <li><a href="https://relay.ditto.pub/" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Ditto Relay</a></li>
              <li><a href="https://chromewebstore.google.com/detail/ditto-extension/fbiegkepanmjielbemkhieckmlckiagi" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Ditto Extension</a></li>
              <li><a href="https://nostrhub.io" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">NostrHub</a></li>
              <li><a href="https://nostrify.dev" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Nostrify</a></li>
            </ul>
          </div>

          <div>
            <UserFooterSection />

            <div className="mt-8 space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon, image }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-gray-300 overflow-hidden transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    {image ? (
                      <img src={image} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
                    ) : (
                      Icon && <Icon className="w-4 h-4" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>♡{currentYear} Soapbox Technology. Please <a className="underline hover:text-white transition-colors" href="https://gitlab.com/soapbox-pub/soapbox.pub" target="_blank" rel="noopener noreferrer">copy and share</a>.</p>
        </div>
      </div>
    </footer>
  );
}