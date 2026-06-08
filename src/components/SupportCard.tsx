import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OCE_URL = 'https://opencollective.com/aos-collective?hostname=opencollective.com';
const AGORA_DONATE_URL = 'https://agora.spot/naddr1qvzqqqyygupzq7q6z5ns2hm5c8msyv83qwzxpxe52j8c4d4q5m92wsp9sflelkh9qqx8getpd5khxmmpwp3x77q6va4q9';

export function SupportCard() {
  return (
    <Card className="border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50 mt-12">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Heart className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
              Soapbox is funded by grants and donations, not ads or data sales.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Everything we build is <Link to="/blog/free-software-free-societies" className="text-azure hover:underline">open source</Link> and belongs to the community. Help us keep it that way.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <Button size="sm" className="bg-azure hover:bg-azure-600 text-white" asChild>
            <a href={OCE_URL} target="_blank" rel="noopener noreferrer">
              Donate via Open Collective
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={AGORA_DONATE_URL} target="_blank" rel="noopener noreferrer">
              Donate Bitcoin via Agora
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <Link to="/transparency" className="text-sm text-azure hover:underline">
          Learn how we use funds &rarr;
        </Link>
      </CardContent>
    </Card>
  );
}
