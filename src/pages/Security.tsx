import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSEO } from '@/hooks/useSEO';
import { Bitcoin, Mail, ShieldCheck } from 'lucide-react';

const SECURITY_EMAIL = 'security@soapbox.pub';

export default function Security() {
  useSEO({
    title: 'Security and Bug Bounty - Soapbox',
    description: 'Report security vulnerabilities in Soapbox software to security@soapbox.pub. We pay bounties of up to $1,000 in Bitcoin for critical issues.',
    type: 'website',
    image: '/og-image-v2.png',
    keywords: 'soapbox security, bug bounty, vulnerability disclosure, responsible disclosure, bitcoin bug bounty, nostr security',
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="h-12 w-12 text-azure mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              Security
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you've found a security vulnerability in Soapbox software, please tell us privately so we can fix it before it's exploited.
              We pay bounties of up to $1,000 for critical issues.
            </p>
          </div>
        </section>

        {/* Report + Bounty */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-azure mx-auto mb-4" />
                <h2 className="font-bold text-gray-900 text-xl mb-3">Report a Vulnerability</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Email the details to <a href={`mailto:${SECURITY_EMAIL}`} className="text-azure hover:underline">{SECURITY_EMAIL}</a>.
                  Please don't open a public issue or post about it until we've had a chance to fix it.
                </p>
                <Button className="bg-azure hover:bg-azure-600 text-white w-full" asChild>
                  <a href={`mailto:${SECURITY_EMAIL}`}>
                    Email {SECURITY_EMAIL}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Bitcoin className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <h2 className="font-bold text-gray-900 text-xl mb-3">Bug Bounty</h2>
                <p className="text-sm text-gray-600">
                  We pay bounties of up to $1,000 for critical security issues.
                  The amount depends on the severity and impact of the issue.
                  All bounties are paid in Bitcoin.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to include */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
              What to Include in Your Report
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
              <li>The affected project and version, or the URL where you found it.</li>
              <li>A description of the issue and its impact.</li>
              <li>Steps to reproduce it, or a proof of concept.</li>
              <li>How you'd like to be credited, if at all.</li>
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  );
}
