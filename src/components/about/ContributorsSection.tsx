
import { Star, Calendar, Network } from "lucide-react";

const ContributorsSection = () => {
  return (
    <div className="mb-12">
      <div className="flex items-start gap-3 md:gap-4 mb-8">
        <Star className="w-6 h-6 md:w-8 md:h-8 text-[#045c94] flex-shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-[#02314d]">Key names from the Space Quest development team:</h3>
          <ul className="list-none space-y-4 text-gray-700">
            {['Scott Murphy and Mark Crowe (known as "The Two Guys from Andromeda")',
              'Satoshi Uesaka',
              'Rod Nakamoto and Nancy Nakamoto'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#045c94] flex-shrink-0 mt-2" />
                <span className="text-sm md:text-base break-words">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[#02314d] font-semibold p-3 md:p-4 bg-[#fff3e2] rounded-lg text-sm md:text-base">
            Put those last two names together and what do you get? Satoshi Nakamoto.
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
            What's also very interesting...
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
            Hal Finney was a game designer, cryptographer, cypherpunk, and one of Bitcoin's earliest contributors. Back in the late 1970s he was already working on sci-fi and space-themed games, starting out in sound effects. Read the <a href="https://projectb59.com/content/B59-0090/hal-finney-atari-interview.mht" target="_blank" rel="noopener noreferrer" className="text-[#045c94] font-semibold hover:underline">Hal Finney Atari interview</a>.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 md:gap-4 mb-8">
        <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#045c94] flex-shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-[#02314d]">The Buckazoids Token Launch</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            On March 27th, 2025, the Buckazoids token launched on Solana, a fast, low-cost blockchain.
            After decades as an in-game currency, Buckazoids finally had a real home on-chain.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 md:gap-4">
        <Network className="w-6 h-6 md:w-8 md:h-8 text-[#045c94] flex-shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-[#02314d]">Part of a Bigger Story</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Buckazoids sits inside a much longer history. Long before Bitcoin, the cypherpunks were
            building the pieces that made it possible: anonymous remailers, digital signatures, and
            early digital cash. Pioneers like Phil Salin, who launched one of the first online
            marketplaces (AMiX) in the early 1990s, were already imagining digital economies decades
            ahead of their time. Preserving that record is part of what Project B59 is about.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
