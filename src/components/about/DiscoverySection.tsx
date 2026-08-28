
import { Search } from "lucide-react";

const DiscoverySection = () => {
  return (
    <div className="mb-12 p-8 rounded-2xl bg-[#eaf4fa] border border-[#045c94]/20">
      <div className="flex items-start gap-4 mb-6">
        <Search className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
        <h2 className="text-3xl font-bold text-[#02314d]">The Rediscovery</h2>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        On March 27, 2025, a Reddit post brought new attention to Buckazoids, the currency from
        Sierra On-Line's legendary <em>Space Quest</em> series.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What caught everyone's attention was the coin.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Years before Bitcoin existed, <em>Space Quest</em> featured Buckazoids with a symbol that
        looks remarkably familiar today: a stylized <strong>B crossed by vertical lines</strong>.
      </p>
      <p className="text-[#02314d] font-semibold text-lg text-center">
        Then people started digging. And the story got much more interesting.
      </p>
    </div>
  );
};

export default DiscoverySection;
