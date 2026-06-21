
import { Gamepad2, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const UtilitySection = () => {
  return (
    <section id="utility" className="bg-[#000222] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Where Your Buckazoids Go to Work
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Buckazoids isn't just a chart. Two live platforms give the coin real utility. Play with it, spend it, and be part of what we're building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* NodeB59 Arcade */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col hover:border-[#f7931a]/60 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#f7931a]/15 flex items-center justify-center mb-5">
              <Gamepad2 className="w-7 h-7 text-[#f7931a]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">NodeB59 Arcade</h3>
            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
              A retro arcade powered by Buckazoids. The games are free to play. Drop BZ to enter
              tournaments and the Game of the Month, where every coin you spend goes straight to the
              game's creator. This is Buckazoids you can actually use.
            </p>
            <Button
              className="bg-[#f7931a] hover:bg-[#feb73f] text-white w-full sm:w-auto"
              onClick={() => window.open('https://nodeb59.com', '_blank')}
            >
              Enter the Arcade <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Project B59 */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col hover:border-[#00f3ff]/60 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-[#00f3ff]/15 flex items-center justify-center mb-5">
              <Rocket className="w-7 h-7 text-[#00f3ff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Project B59</h3>
            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
              The hub behind it all. Project B59 is the research initiative tracing the Space Quest
              and Bitcoin connection, and the home base for everything the community builds around
              Buckazoids. It's where the lore lives and the ecosystem grows.
            </p>
            <Button
              variant="outline"
              className="border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff] hover:text-[#000222] w-full sm:w-auto"
              onClick={() => window.open('https://projectb59.com', '_blank')}
            >
              Explore Project B59 <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
