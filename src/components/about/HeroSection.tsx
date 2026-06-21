
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16 p-12 rounded-2xl bg-[#fff3e2]">
      <h1 className="text-5xl font-bold text-[#000222] mb-6">
        The Greatest Discovery in Crypto History
      </h1>
      <p className="text-xl text-[#000222] mb-8">
        We believe we've uncovered one of the most surprising stories in crypto — one that ties
        a 1980s video game to the origins of Bitcoin itself. Here's what we found.
      </p>
      <div className="mt-8">
        <Button
          className="bg-white text-[#000222] hover:bg-[#feb73f] hover:text-white px-8 py-6 text-lg font-semibold active:bg-[#feb73f] active:text-white"
          onClick={() => window.open('https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump', '_blank')}
        >
          Buy Buckazoids <ExternalLink className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
