
import { History } from "lucide-react";

const JourneyTimeline = () => {
  return (
    <div className="mb-12 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#02314d] to-[#045c94] shadow-lg text-center">
      <History className="w-10 h-10 text-buckazoid-yellow mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">A Story You're Now Part Of</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Buckazoids started as fictional money in a video game.
        </p>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          More than three decades later, it became a real token.
        </p>
        <p className="text-lg md:text-xl font-semibold text-buckazoid-yellow leading-relaxed">
          And somewhere between those two points, a very strange piece of internet history began to unfold.
        </p>
      </div>
    </div>
  );
};

export default JourneyTimeline;
