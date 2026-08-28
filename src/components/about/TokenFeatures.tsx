
import { Rocket } from "lucide-react";

const TokenFeatures = () => {
  return (
    <div className="mb-12 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#02314d] to-[#045c94] shadow-lg text-white">
      <Rocket className="w-10 h-10 text-buckazoid-yellow mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">From Space Quest to Solana</h2>

      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-white/90 leading-relaxed">Then the story took another turn.</p>
        <p className="text-white/90 leading-relaxed">
          On <strong className="text-white">March 27, 2025</strong>, the same day the Reddit post
          surfaced, Buckazoids launched on Solana.
        </p>
        <p className="text-white/90 leading-relaxed">
          A fictional currency from the early days of PC gaming had become an actual cryptocurrency.
        </p>
        <p className="text-white/90 leading-relaxed">
          The modern Buckazoids coin carries pieces of that history with it: the familiar{" "}
          <strong className="text-white">B</strong>, the{" "}
          <strong className="text-white">59</strong>, and the spacecraft representing where the story
          began.
        </p>
        <p className="text-white/90 leading-relaxed">
          But Buckazoids isn't pretending we solved the Satoshi mystery. We're doing something more
          fun. We're following the evidence wherever it goes, preserving a strange corner of digital
          history, and building something new from what we find.
        </p>

        <div className="pt-4 space-y-2 text-center">
          <p className="text-lg md:text-xl font-bold text-buckazoid-yellow">
            The original Buckazoids lived inside a game.
          </p>
          <p className="text-lg md:text-xl font-bold text-buckazoid-yellow">
            These Buckazoids live on-chain.
          </p>
          <p className="text-lg md:text-xl font-semibold text-white pt-2">
            And this time, you don't have to discover them 30 years late.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenFeatures;
