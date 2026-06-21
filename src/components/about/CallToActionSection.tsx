
import { Rocket, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <>
      <Card className="mb-12" style={{ backgroundColor: '#fff3e2' }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Rocket className="w-8 h-8 text-buckazoid-navy" />
            <span className="text-3xl font-bold text-buckazoid-navy">Join the Movement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-gray-800">
            Buckazoids launched on March 27th, 2025, and it's still early in its valuation and market cap.
            Bitcoin is now worth over a trillion dollars. Imagine what happens when this story reaches the masses.
            Buckle up.
          </p>
          <div className="mt-6">
            <p className="text-lg mb-4 text-gray-800">
              We believe Buckazoids is the spiritual predecessor to Bitcoin. It's built for 
              the future, it's built to scale, and it's only just getting started.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mb-12 p-8 rounded-2xl bg-[#fff3e2]">
        <h2 className="text-2xl font-bold mb-4 text-[#02314d]">Get Involved</h2>
        <p className="text-gray-800 mb-4">
          The connection between Space Quest, its creators, and the origins of Bitcoin is one of the
          most fascinating open questions in crypto. Buckazoids is where that story is researched,
          documented, and brought to a wider audience.
        </p>
        <p className="text-gray-800 mb-4">
          Bitcoin will always be the original. Buckazoids carries a piece of the history that came
          before it, and a global community is making sure that history is not forgotten.
        </p>
        <div className="mt-8 text-center">
          <Button
            className="bg-[#02314d] text-white hover:bg-[#045c94] px-8 py-6 text-lg font-semibold"
            onClick={() => window.open('https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump', '_blank')}
          >
            Buy Now <ExternalLink className="ml-2" />
          </Button>
        </div>
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
