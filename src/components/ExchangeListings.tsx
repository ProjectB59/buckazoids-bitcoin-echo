
import React from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type Venue = {
  name: string;
  url: string;
  domain: string;
  tag: string;
  // Optional local asset override — used when a platform has given us their
  // own official logo file, instead of falling back to their favicon.
  logo?: string;
  // Hover call-to-action. Defaults to "Trade" — set to "View" for venues
  // that only show price/chart data rather than letting you execute a trade.
  cta?: string;
};

// Verified live markets (CoinGecko, June 2026). Update as listings change.
// Logos load from each platform's own domain favicon (reliable, no hosted files)
// unless a `logo` override is set (official asset provided by the platform).
const venues: Venue[] = [
  { name: "BVOX",        url: "https://www.bvox.com/exchange/BUCKAZOIDS/USDT", domain: "bvox.com",        tag: "BUCKAZOIDS / USDT" },
  { name: "KCEX",        url: "https://www.kcex.com/exchange/BUCKAZOIDS_USDT", domain: "kcex.com",        tag: "BUCKAZOIDS / USDT" },
  { name: "WEEX",        url: "https://www.weex.com/spot/BUCKAZOIDS-USDT",     domain: "weex.com",        tag: "BUCKAZOIDS / USDT" },
  { name: "PumpSwap",    url: "https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump", domain: "pump.fun", tag: "BUCKAZOIDS / SOL · Solana DEX" },
  { name: "DexScreener", url: "https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku", domain: "dexscreener.com", tag: "Live chart", cta: "View" },
  { name: "DEXTools",    url: "https://www.dextools.io/app/en/solana/pair-explorer/8KhsZhgWBEfDyTqJGMgZsmqgQUhB2mHj9CnaxcLXAYdm", domain: "dextools.io", tag: "Live chart", cta: "View" },
  { name: "Blockspot",   url: "https://blockspot.io/coin/buckazoids/", domain: "blockspot.io", tag: "Verified Listing", logo: "/logos/blockspot-icon.svg", cta: "View" },
  // Confirmed buyable directly in the Coinbase app (DEX-routed buy/sell, pay with USD).
  { name: "Coinbase",    url: "https://www.coinbase.com/price/buckazoids-solana-bqqzevyt4knthhkspbvskblg1lecziswlhx5ydjipump-token", domain: "coinbase.com", tag: "BUCKAZOIDS / USD", cta: "Buy" },
];

const ExchangeListings = () => {
  return (
    // flex-wrap + justify-center (not CSS grid) so an odd card count centers
    // its last row instead of leaving an empty grid cell.
    <div
      id="exchange-listings-container"
      className="flex flex-wrap justify-center gap-4 sm:gap-5"
    >
      {venues.map((v) => (
        <a
          key={v.name}
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.834rem)]"
        >
          <Card className="p-5 h-full flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl bg-black/70 backdrop-blur-sm border-gray-800">
            <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow">
              <img
                src={v.logo ?? `https://www.google.com/s2/favicons?domain=${v.domain}&sz=128`}
                alt={`${v.name} logo`}
                className="w-7 h-7 object-contain"
                loading="lazy"
                width={28}
                height={28}
              />
            </span>
            <span className="text-white text-lg sm:text-xl font-bold group-hover:text-[#f7931a] transition-colors">
              {v.name}
            </span>
            <span className="text-gray-400 text-xs">{v.tag}</span>
            <span className="inline-flex items-center gap-1 text-[#f7931a] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {v.cta ?? "Trade"} <ExternalLink className="w-3 h-3" />
            </span>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ExchangeListings;
