import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSEO } from '@/hooks/useSEO';
import { transparencyReports, OCE_URL } from '@/lib/transparencyReports';
import { Heart, ExternalLink, ArrowRight } from 'lucide-react';

const AGORA_DONATE_URL = 'https://agora.spot/naddr1qvzqqqyygupzq7q6z5ns2hm5c8msyv83qwzxpxe52j8c4d4q5m92wsp9sflelkh9qqx8getpd5khxmmpwp3x77q6va4q9';

export default function Transparency() {
  useSEO({
    title: 'Funding Transparency - Soapbox',
    description: 'Soapbox is funded by grants and donations, not ads or data sales. See how we are funded, who supports us, and read our quarterly grant reports.',
    type: 'website',
    image: '/og-image.png',
    keywords: 'soapbox funding, transparency, open source funding, grants, donations, opensats',
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              How We're Funded
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soapbox is funded by grants from nonprofit organizations and individual donations.
              We make no income from our users or apps. No ads. No data sales. No venture capital. No shareholders.
              We are working toward establishing a 501(c)(3) nonprofit, and are entirely supported by the generosity of our donors and grant-making organizations.
            </p>
          </div>
        </section>

        {/* Supporters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Our Supporters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are grateful for the organizations that believe in our mission and fund our work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <a href="https://opensats.org/" target="_blank" rel="noopener noreferrer" className="block mb-4">
                    <img src="/assets/logos/opensats-logo-soapbox.png" alt="OpenSats" className="max-h-24 mx-auto object-contain" />
                  </a>
                  <h3 className="font-bold text-gray-900 mb-2">OpenSats</h3>
                  <p className="text-sm text-gray-600">Funds core development of Ditto, Nostrify, Shakespeare, and the broader Soapbox ecosystem through ongoing grants.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer" className="block mb-4">
                    <img src="/assets/logos/aos-andotherstuff-logo-soapbox.png" alt="And Other Stuff" className="max-h-24 mx-auto object-contain" />
                  </a>
                  <h3 className="font-bold text-gray-900 mb-2">And Other Stuff (AOS)</h3>
                  <p className="text-sm text-gray-600">Our fiscal sponsor. AOS is a collective of open source developers building freedom technology. Donations to Soapbox are made through AOS via Open Collective Europe.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <a href="https://hrf.org/" target="_blank" rel="noopener noreferrer" className="block mb-4">
                    <img src="/assets/logos/hrf-humanrightsfoudnation-logo.png" alt="Human Rights Foundation" className="max-h-24 mx-auto object-contain" />
                  </a>
                  <h3 className="font-bold text-gray-900 mb-2">Human Rights Foundation</h3>
                  <p className="text-sm text-gray-600">Supports our work building censorship-resistant tools for activists, journalists, and communities under authoritarian regimes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Our Work */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Heart className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Support Our Work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every donation helps us keep building open source tools for the decentralized web. Your support means we never have to compromise on our values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Open Collective */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">Donate via Open Collective</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Support Soapbox through our fiscal sponsor, AOS, on Open Collective Europe. Supports fiat currency donations and recurring contributions.
                  </p>
                  <Button className="bg-azure hover:bg-azure-600 text-white w-full" asChild>
                    <a href={OCE_URL} target="_blank" rel="noopener noreferrer">
                      Open Collective
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Bitcoin via Agora */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">Donate Bitcoin via Agora</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Send Bitcoin directly to Soapbox through Agora, our censorship-resistant donation platform. Wallet to wallet, no custodian.
                  </p>
                  <Button className="bg-azure hover:bg-azure-600 text-white w-full" asChild>
                    <a href={AGORA_DONATE_URL} target="_blank" rel="noopener noreferrer">
                      Donate Bitcoin on Agora
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Grant Reports */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Grant Reports
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We publish our quarterly grant reports so you can see exactly what we're building with the funds we receive.
              </p>
            </div>

            <div className="space-y-4">
              {transparencyReports.map((report) => (
                <Link key={report.slug} to={`/transparency/${report.slug}`} className="block group">
                  <Card className="transition-all hover:shadow-md hover:border-azure-300">
                    <CardContent className="p-5 flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-azure mb-1">{report.dateRange}</div>
                        <p className="text-gray-600 text-sm truncate sm:whitespace-normal">{report.summary}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-azure flex-shrink-0 ml-4 transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
