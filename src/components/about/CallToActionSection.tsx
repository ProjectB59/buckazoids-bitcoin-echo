
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <>
      <div className="mb-12 p-8 rounded-2xl bg-[#fff3e2] text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#02314d]">Follow the Story</h2>
        <p className="text-gray-800 mb-6 max-w-xl mx-auto">
          The research is ongoing, documented in the open at Project B59. Buckazoids is where that
          story lives on-chain.
        </p>
        <Button
          className="bg-[#02314d] text-white hover:bg-[#045c94] px-8 py-6 text-lg font-semibold"
          onClick={() => window.open('https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump', '_blank')}
        >
          Buy Buckazoids <ExternalLink className="ml-2" />
        </Button>
      </div>

      <div className="text-sm text-gray-500 text-center p-6 bg-gray-50 rounded-lg">
        <p className="mb-2">
          This is not financial advice. Never invest more than you can afford to lose.
          Do your own research.
        </p>
      </div>
    </>
  );
};

export default CallToActionSection;
