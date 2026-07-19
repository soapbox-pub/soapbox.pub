import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { getReportBySlug, transparencyReports } from '@/lib/transparencyReports';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import NotFound from '../NotFound';

export default function TransparencyReport() {
  const { slug } = useParams<{ slug: string }>();
  const report = slug ? getReportBySlug(slug) : undefined;

  const currentIndex = report ? transparencyReports.findIndex((r) => r.slug === report.slug) : -1;
  const prevReport = currentIndex < transparencyReports.length - 1 ? transparencyReports[currentIndex + 1] : undefined;
  const nextReport = currentIndex > 0 ? transparencyReports[currentIndex - 1] : undefined;

  useSEO(report ? {
    title: `${report.title} - Soapbox Transparency`,
    description: report.summary,
    type: 'article' as const,
    image: '/og-image-v2.png',
    keywords: 'soapbox grant report, transparency, opensats, open source funding',
  } : {
    title: 'Report Not Found - Soapbox',
    description: 'This transparency report could not be found.',
  });

  if (!report) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/transparency">
          <Button variant="ghost" className="mb-8 hover:bg-azure/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Reports
          </Button>
        </Link>

        <header className="mb-12">
          <div className="text-sm font-medium text-azure mb-2">{report.dateRange}</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-4">
            {report.title}
          </h1>
          <p className="text-lg text-gray-600">{report.summary}</p>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: report.content }}
        />

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {prevReport ? (
              <Link to={`/transparency/${prevReport.slug}`}>
                <Button variant="outline" className="hover:bg-azure hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {prevReport.dateRange}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextReport ? (
              <Link to={`/transparency/${nextReport.slug}`}>
                <Button variant="outline" className="hover:bg-azure hover:text-white transition-colors">
                  {nextReport.dateRange}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
