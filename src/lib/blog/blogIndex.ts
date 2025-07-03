// Auto-generated blog posts index
import * as announcingditto from '../../components/blog/posts/announcing-ditto';
import * as announcinghenhouse from '../../components/blog/posts/announcing-henhouse';
import * as announcingnostrify from '../../components/blog/posts/announcing-nostrify';
import * as announcingnostrhub from '../../components/blog/posts/announcing-nostrhub';
import * as announcingtreasures from '../../components/blog/posts/announcing-treasures';
import * as announcingsoapboxbev10 from '../../components/blog/posts/announcing-soapbox-be-v1.0';
import * as announcingsoapboxfev10 from '../../components/blog/posts/announcing-soapbox-fe-v1.0';
import * as choosingabackend from '../../components/blog/posts/choosing-a-backend';
import * as chorusvibecoding from '../../components/blog/posts/chorus-vibe-coding';
import * as comoentrarnonostrbrasilcobrafuma from '../../components/blog/posts/como-entrar-no-nostr-brasil-cobrafuma';
import * as comparingprotocols from '../../components/blog/posts/comparing-protocols';
import * as curatedcommunitieswithditto from '../../components/blog/posts/curated-communities-with-ditto';
import * as discoveringcontent from '../../components/blog/posts/discovering-content';
import * as ditto11 from '../../components/blog/posts/ditto-1.1';
import * as ditto12 from '../../components/blog/posts/ditto-1.2';
import * as ditto13 from '../../components/blog/posts/ditto-1.3';
import * as followbluesky from '../../components/blog/posts/follow-bluesky';
import * as followthreads from '../../components/blog/posts/follow-threads';
import * as futureisdecentralized from '../../components/blog/posts/future-is-decentralized';
import * as howtoinstalldittomobile from '../../components/blog/posts/how-to-install-ditto-mobile';
import * as howtojoinnostrbrazilcobrafuma from '../../components/blog/posts/how-to-join-nostr-brazil-cobrafuma';
import * as loomlyzapiernostrbridge from '../../components/blog/posts/loomly-zapier-nostr-bridge';
import * as mostrfediversenostrbridge from '../../components/blog/posts/mostr-fediverse-nostr-bridge';
import * as mostrzaps from '../../components/blog/posts/mostr-zaps';
import * as mkstacktutorial from '../../components/blog/posts/mkstack-tutorial';
import * as nostr101 from '../../components/blog/posts/nostr101';
import * as nostrbookmcp from '../../components/blog/posts/nostrbook-mcp';
import * as releasingsoapbox30 from '../../components/blog/posts/releasing-soapbox-3.0';
import * as revivelegacywebsite from '../../components/blog/posts/revive-legacy-website';
import * as releasingsoapboxbev11 from '../../components/blog/posts/releasing-soapbox-be-v1.1';
import * as serversafetyandmoderation from '../../components/blog/posts/server-safety-and-moderation';
import * as soapboxawardedgrant from '../../components/blog/posts/soapbox-awarded-grant';
import * as soapboxbeisnowrebased from '../../components/blog/posts/soapbox-be-is-now-rebased';
import * as soapboxfev11release from '../../components/blog/posts/soapbox-fe-v1.1-release';
import * as soapboxfev12release from '../../components/blog/posts/soapbox-fe-v1.2-release';
import * as soapboxfev13cryptocurrencyrelease from '../../components/blog/posts/soapbox-fe-v1.3-cryptocurrency-release';
import * as stacks from '../../components/blog/posts/stacks';
import * as takedownbigtechwithgreatux from '../../components/blog/posts/take-down-big-tech-with-great-ux';
import * as threadsserverblocking from '../../components/blog/posts/threads-server-blocking';
import * as unlockingmastodonapps from '../../components/blog/posts/unlocking-mastodon-apps';
import * as whatisthefediverse from '../../components/blog/posts/what-is-the-fediverse';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
}

export const blogPosts: BlogPost[] = [
  announcingditto.meta,
  announcinghenhouse.meta,
  announcingnostrify.meta,
  announcingnostrhub.meta,
  announcingtreasures.meta,
  announcingsoapboxbev10.meta,
  announcingsoapboxfev10.meta,
  choosingabackend.meta,
  chorusvibecoding.meta,
  comoentrarnonostrbrasilcobrafuma.meta,
  comparingprotocols.meta,
  curatedcommunitieswithditto.meta,
  discoveringcontent.meta,
  ditto11.meta,
  ditto12.meta,
  ditto13.meta,
  followbluesky.meta,
  followthreads.meta,
  futureisdecentralized.meta,
  howtoinstalldittomobile.meta,
  howtojoinnostrbrazilcobrafuma.meta,
  loomlyzapiernostrbridge.meta,
  mkstacktutorial.meta,
  mostrfediversenostrbridge.meta,
  mostrzaps.meta,
  nostr101.meta,
  nostrbookmcp.meta,
  releasingsoapbox30.meta,
  releasingsoapboxbev11.meta,
  revivelegacywebsite.meta,
  serversafetyandmoderation.meta,
  soapboxawardedgrant.meta,
  soapboxbeisnowrebased.meta,
  soapboxfev11release.meta,
  soapboxfev12release.meta,
  soapboxfev13cryptocurrencyrelease.meta,
  stacks.meta,
  takedownbigtechwithgreatux.meta,
  threadsserverblocking.meta,
  unlockingmastodonapps.meta,
  whatisthefediverse.meta
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = async (slug: string) => {
  const normalizedSlug = slug.replace(/-/g, '').replace(/\./g, '');
  
  switch (normalizedSlug) {
    case 'announcingditto':
      return (await import('../../components/blog/posts/announcing-ditto')).default;
    case 'announcinghenhouse':
      return (await import('../../components/blog/posts/announcing-henhouse')).default;
    case 'announcingnostrify':
      return (await import('../../components/blog/posts/announcing-nostrify')).default;
    case 'announcingnostrhub':
      return (await import('../../components/blog/posts/announcing-nostrhub')).default;
    case 'announcingtreasures':
      return (await import('../../components/blog/posts/announcing-treasures')).default;
    case 'announcingsoapboxbev10':
      return (await import('../../components/blog/posts/announcing-soapbox-be-v1.0')).default;
    case 'announcingsoapboxfev10':
      return (await import('../../components/blog/posts/announcing-soapbox-fe-v1.0')).default;
    case 'choosingabackend':
      return (await import('../../components/blog/posts/choosing-a-backend')).default;
    case 'chorusvibecoding':
      return (await import('../../components/blog/posts/chorus-vibe-coding')).default;
    case 'comoentrarnonostrbrasilcobrafuma':
      return (await import('../../components/blog/posts/como-entrar-no-nostr-brasil-cobrafuma')).default;
    case 'comparingprotocols':
      return (await import('../../components/blog/posts/comparing-protocols')).default;
    case 'curatedcommunitieswithditto':
      return (await import('../../components/blog/posts/curated-communities-with-ditto')).default;
    case 'discoveringcontent':
      return (await import('../../components/blog/posts/discovering-content')).default;
    case 'ditto11':
      return (await import('../../components/blog/posts/ditto-1.1')).default;
    case 'ditto12':
      return (await import('../../components/blog/posts/ditto-1.2')).default;
    case 'ditto13':
      return (await import('../../components/blog/posts/ditto-1.3')).default;
    case 'followbluesky':
      return (await import('../../components/blog/posts/follow-bluesky')).default;
    case 'followthreads':
      return (await import('../../components/blog/posts/follow-threads')).default;
    case 'futureisdecentralized':
      return (await import('../../components/blog/posts/future-is-decentralized')).default;
    case 'howtoinstalldittomobile':
      return (await import('../../components/blog/posts/how-to-install-ditto-mobile')).default;
    case 'howtojoinnostrbrazilcobrafuma':
      return (await import('../../components/blog/posts/how-to-join-nostr-brazil-cobrafuma')).default;
    case 'loomlyzapiernostrbridge':
      return (await import('../../components/blog/posts/loomly-zapier-nostr-bridge')).default;
    case 'mkstacktutorial':
      return (await import('../../components/blog/posts/mkstack-tutorial')).default;
    case 'mostrfediversenostrbridge':
      return (await import('../../components/blog/posts/mostr-fediverse-nostr-bridge')).default;
    case 'mostrzaps':
      return (await import('../../components/blog/posts/mostr-zaps')).default;
    case 'nostr101':
      return (await import('../../components/blog/posts/nostr101')).default;
    case 'nostrbookmcp':
      return (await import('../../components/blog/posts/nostrbook-mcp')).default;
    case 'releasingsoapbox30':
      return (await import('../../components/blog/posts/releasing-soapbox-3.0')).default;
    case 'revivelegacywebsite':
      return (await import('../../components/blog/posts/revive-legacy-website')).default;
    case 'releasingsoapboxbev11':
      return (await import('../../components/blog/posts/releasing-soapbox-be-v1.1')).default;
    case 'serversafetyandmoderation':
      return (await import('../../components/blog/posts/server-safety-and-moderation')).default;
    case 'soapboxawardedgrant':
      return (await import('../../components/blog/posts/soapbox-awarded-grant')).default;
    case 'soapboxbeisnowrebased':
      return (await import('../../components/blog/posts/soapbox-be-is-now-rebased')).default;
    case 'soapboxfev11release':
      return (await import('../../components/blog/posts/soapbox-fe-v1.1-release')).default;
    case 'soapboxfev12release':
      return (await import('../../components/blog/posts/soapbox-fe-v1.2-release')).default;
    case 'soapboxfev13cryptocurrencyrelease':
      return (await import('../../components/blog/posts/soapbox-fe-v1.3-cryptocurrency-release')).default;
    case 'stacks':
      return (await import('../../components/blog/posts/stacks')).default;
    case 'takedownbigtechwithgreatux':
      return (await import('../../components/blog/posts/take-down-big-tech-with-great-ux')).default;
    case 'threadsserverblocking':
      return (await import('../../components/blog/posts/threads-server-blocking')).default;
    case 'unlockingmastodonapps':
      return (await import('../../components/blog/posts/unlocking-mastodon-apps')).default;
    case 'whatisthefediverse':
      return (await import('../../components/blog/posts/what-is-the-fediverse')).default;
    default:
      return null;
  }
};

