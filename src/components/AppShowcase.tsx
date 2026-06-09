import { ArrowRight } from "lucide-react";
import { Github, Gitlab } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type RepoHost = "gitlab" | "github";

export interface RepoLink {
  url: string;
  host: RepoHost;
  /** Optional short label shown alongside the icon (e.g. "App", "CLI"). */
  label?: string;
}

export interface ShowcaseApp {
  name: string;
  tagline: string;
  /** Square logo / app icon. */
  icon: string;
  /** Wide product screenshot. */
  screenshot: string;
  /** Optional object-position tweak for the screenshot crop. */
  screenshotPosition?: string;
  /** Live URL (app, site, or store listing). */
  url?: string;
  /** Label for the primary action button (defaults to "Open app"). */
  ctaLabel?: string;
  /** A single source repo (shorthand). */
  repo?: string;
  repoHost?: RepoHost;
  /** Multiple source repos (takes precedence over `repo`). */
  repos?: RepoLink[];
  /** Person/people who built it. */
  builder?: string;
  /** Status key — must exist in the page's status map. */
  status: string;
  /** Optional pill shown next to the name (e.g. "Ditto support"). */
  pill?: string;
  /** Tailwind gradient (from/to) used for the card accent + icon halo. */
  accent: string;
  /** Some apps have no square logo asset; hide the floating icon when false. */
  hasIcon?: boolean;
}

export interface StatusMeta {
  label: string;
  className: string;
}

export function RepoIcon({ host }: { host: RepoHost }) {
  return host === "github" ? (
    <Github className="h-4 w-4" />
  ) : (
    <Gitlab className="h-4 w-4" />
  );
}

export function ShowcaseCard({
  app,
  statusMeta,
}: {
  app: ShowcaseApp;
  statusMeta: Record<string, StatusMeta>;
}) {
  const status = statusMeta[app.status];
  const showIcon = app.hasIcon !== false;

  // Normalize repos: prefer the `repos` array, else the single `repo`/`repoHost`.
  const repos: RepoLink[] =
    app.repos ?? (app.repo && app.repoHost ? [{ url: app.repo, host: app.repoHost }] : []);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Screenshot — the star of the show */}
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-gray-100"
      >
        <img
          src={app.screenshot}
          alt={`${app.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          style={app.screenshotPosition ? { objectPosition: app.screenshotPosition } : undefined}
        />
        {/* gradient veil on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {status && (
          <div className="absolute right-3 top-3">
            <Badge variant="secondary" className={`border ${status.className} backdrop-blur`}>
              {status.label}
            </Badge>
          </div>
        )}
      </a>

      {/* Floating logo straddling screenshot + body */}
      {showIcon && (
        <div className="relative px-6">
          <div
            className={`absolute -top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${app.accent} p-[3px] shadow-lg ring-4 ring-white`}
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[14px] bg-white">
              <img src={app.icon} alt={`${app.name} logo`} className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <div className={`flex flex-1 flex-col px-6 pb-6 ${showIcon ? "pt-12" : "pt-6"}`}>
        <div className="flex items-center gap-3">
          <h3 className="font-display text-2xl font-bold text-gray-900">{app.name}</h3>
          {app.pill && (
            <span className="inline-flex items-center rounded-full bg-azure-50 px-2.5 py-0.5 text-xs font-medium text-azure-700">
              {app.pill}
            </span>
          )}
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{app.tagline}</p>

        {app.builder && (
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <span>
              Built by <span className="font-medium text-gray-700">{app.builder}</span>
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          {app.url && (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r ${app.accent} px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]`}
            >
              {app.ctaLabel ?? "Open app"}
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
          {repos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.name} source code${r.label ? ` (${r.label})` : ""}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <RepoIcon host={r.host} />
              <span className="hidden sm:inline">{r.label ?? "Source"}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The tilted grid of app icons that headlines a showcase page (matches the OG image). */
export function HeroIconGrid({
  apps,
  pinLast = [],
  exclude = [],
  order,
}: {
  apps: ShowcaseApp[];
  /** App names to force into the final grid slots, in the given order. */
  pinLast?: string[];
  /** App names to keep out of the hero grid entirely. */
  exclude?: string[];
  /** Fully explicit grid order by app name; overrides pinLast/exclude. */
  order?: string[];
}) {
  let iconApps: ShowcaseApp[];

  if (order && order.length > 0) {
    // Fully explicit order: take exactly the named apps, in the given order.
    iconApps = order
      .map((name) => apps.find((a) => a.name === name && a.hasIcon !== false))
      .filter((a): a is ShowcaseApp => Boolean(a))
      .slice(0, 9);
  } else {
    const excluded = new Set(exclude);
    // Apps with a real square logo, in display order.
    const withIcon = apps.filter(
      (a) => a.hasIcon !== false && !excluded.has(a.name),
    );

    // Pull out the pinned apps and append them at the end so they land in the
    // last grid slots; everything else keeps its display order.
    const pinned = pinLast
      .map((name) => withIcon.find((a) => a.name === name))
      .filter((a): a is ShowcaseApp => Boolean(a));
    const pinnedNames = new Set(pinned.map((a) => a.name));
    const rest = withIcon.filter((a) => !pinnedNames.has(a.name));

    // Cap at 9 for a 3x3 grid, keeping the pinned apps in the final positions.
    const lead = rest.slice(0, Math.max(0, 9 - pinned.length));
    iconApps = [...lead, ...pinned];
  }

  return (
    <TooltipProvider delayDuration={120}>
      <div className="showcase-hero-grid grid grid-cols-3 gap-4 sm:gap-5">
        {iconApps.map((app, i) => (
          <Tooltip key={app.name}>
            <TooltipTrigger asChild>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${app.name}`}
                className="showcase-hero-tile group/icon block"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div
                  className={`relative h-[88px] w-[88px] rounded-[26px] bg-gradient-to-br ${app.accent} p-[3px] shadow-lg ring-4 ring-white transition-all duration-300 group-hover/icon:-translate-y-1.5 group-hover/icon:scale-105 group-hover/icon:shadow-2xl sm:h-[104px] sm:w-[104px]`}
                >
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-white">
                    <img src={app.icon} alt={`${app.name} logo`} className="h-full w-full object-contain" />
                  </div>
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent>{app.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

/** Scoped keyframes for the hero grid entrance + idle float. */
export function ShowcaseHeroStyles() {
  return (
    <style>{`
      @keyframes showcaseFloatIn {
        0% { opacity: 0; transform: translateY(16px) scale(0.9); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes showcaseFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .showcase-hero-tile {
        opacity: 0;
        animation: showcaseFloatIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .showcase-hero-tile > div {
        animation: showcaseFloat 5s ease-in-out infinite;
      }
      .showcase-hero-tile:nth-child(3n+1) > div { animation-duration: 5.5s; }
      .showcase-hero-tile:nth-child(3n+2) > div { animation-duration: 6.5s; animation-delay: 0.4s; }
      .showcase-hero-tile:nth-child(3n+3) > div { animation-duration: 6s; animation-delay: 0.8s; }
      @media (prefers-reduced-motion: reduce) {
        .showcase-hero-tile { opacity: 1; animation: none; }
        .showcase-hero-tile > div { animation: none; }
      }
    `}</style>
  );
}
