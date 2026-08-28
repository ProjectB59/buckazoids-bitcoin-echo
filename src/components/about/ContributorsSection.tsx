
import { Network, Clock } from "lucide-react";

const ContributorsSection = () => {
  return (
    <div className="mb-12 space-y-8">
      <div className="p-8 rounded-2xl bg-[#fff3e2] border border-buckazoid-orange/20">
        <div className="flex items-start gap-4 mb-4">
          <Network className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#02314d]">Down the Rabbit Hole</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          What began with an old video game turned into an ongoing research project spanning early
          internet culture, gaming history, digital money and the cypherpunk movement that helped
          give birth to Bitcoin.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We've uncovered names connected to Sierra such as <strong>Satoshi Uesaka</strong> and{" "}
          <strong>Rod and Nancy Nakamoto</strong>.
        </p>

        <div className="my-6 py-4 px-6 border-l-4 border-[#045c94] bg-white/60 rounded-r-lg">
          <p className="text-[#02314d] font-semibold">Interesting? Absolutely.</p>
          <p className="text-[#02314d] font-semibold">
            Proof of anything involving Bitcoin's mysterious creator? <span className="underline">No.</span>
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          But they're exactly the kind of historical coincidences that made us keep looking. And that
          search has led much further than names.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We've found archived messages showing <strong>Sierra On-Line communicating directly with the
          Cypherpunks mailing list in 1997</strong>, the same historic online community where people
          including Hal Finney, Nick Szabo, Wei Dai and other cryptography pioneers discussed privacy,
          digital money and the future of the internet.
        </p>

        <div className="my-6 py-4 px-6 border-l-4 border-[#045c94] bg-white/60 rounded-r-lg">
          <p className="text-[#02314d] font-semibold">That doesn't prove Sierra had anything to do with Bitcoin.</p>
          <p className="text-[#02314d] font-semibold">
            It does prove these two pieces of internet history weren't as completely separated as we
            once thought.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">And we're still digging.</p>
      </div>

      <div className="p-8 rounded-2xl bg-[#eaf4fa] border border-[#045c94]/20">
        <div className="flex items-start gap-4 mb-4">
          <Clock className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#02314d]">Before Bitcoin</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The story also reaches beyond Sierra. Years before Bitcoin, people were already trying to
          figure out what digital economies could look like.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Phil Salin built the <strong>American Information Exchange (AMIX)</strong>, an early
          marketplace for buying and selling information electronically. Cypherpunks experimented with
          privacy, cryptography and digital cash. Hal Finney moved between the worlds of computer games
          and cryptography long before becoming the recipient of the first Bitcoin transaction. Read the{" "}
          <a
            href="https://projectb59.com/content/B59-0090/hal-finney-atari-interview.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#045c94] font-semibold hover:underline"
          >
            Hal Finney Atari interview
          </a>
          .
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nick Szabo proposed <strong>bit gold</strong>. Wei Dai described <strong>b-money</strong>.
          Bitcoin didn't appear from nowhere.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Buckazoids gives us a very strange doorway into exploring the world that came before it.
          That's why we created{" "}
          <a
            href="https://projectb59.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#045c94] font-semibold hover:underline"
          >
            Project B59
          </a>
          , to document the evidence, preserve the original sources and clearly separate what we can
          prove from what remains a mystery.
        </p>
      </div>
    </div>
  );
};

export default ContributorsSection;
