
import React from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { ExternalLink } from "lucide-react";

type Venue = {
  name: string;
  url: string;
  tag: string;
};

// Verified live markets (CoinGecko, June 2026). Update as listings change.
// Removed MEXC / Blynex / CoinEx / XT / MaxBid — no live BUCKAZOIDS trading there.
const venues: Venue[] = [
  { name: "BVOX",        url: "https://www.bvox.com/exchange/BUCKAZOIDS/USDT", tag: "BUCKAZOIDS / USDT" },
  { name: "KCEX",        url: "https://www.kcex.com/exchange/BUCKAZOIDS_USDT", tag: "BUCKAZOIDS / USDT" },
  { name: "WEEX",        url: "https://www.weex.com/spot/BUCKAZOIDS-USDT",     tag: "BUCKAZOIDS / USDT" },
  { name: "PumpSwap",    url: "https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump", tag: "BUCKAZOIDS / SOL · Solana DEX" },
  { name: "DexScreener", url: "https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku", tag: "Live chart" },
  { name: "DEXTools",    url: "https://www.dextools.io/app/en/solana/pair-explorer/8KhsZhgWBEfDyTqJGMgZsmqgQUhB2mHj9CnaxcLXAYdm", tag: "Live chart" },
];

const ExchangeListings = () => {
  const isMobile = useIsMobile();

  return (
    <div
      id="exchange-listings-container"
      className={`grid ${isMobile ? "grid-cols-2 gap-4" : "grid-cols-3 gap-6"}`}
    >
      {venues.map((v) => (
        <a
          key={v.name}
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black/60 backdrop-blur-sm border-gray-800">
            <span className="text-white text-xl sm:text-2xl font-bold group-hover:text-[#f7931a] transition-colors">
              {v.name}
            </span>
            <span className="text-gray-400 text-xs mt-1">{v.tag}</span>
            <span className="mt-3 inline-flex items-center gap-1 text-[#f7931a] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Trade <ExternalLink className="w-3 h-3" />
            </span>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ExchangeListings;
