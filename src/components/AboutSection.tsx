import { Button } from "@/components/ui/button";
import { ExternalLink, History, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TextRotate } from "@/components/ui/text-rotate";
import { OptimizedTextRotate } from "@/components/ui/optimized-text-rotate";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLearnHistoryClick = () => {
    navigate('/community');
  };

  const handleDiscoverMoreClick = () => {
    navigate('/about');
  };

  return (
    <section className="bg-[#FFF5E6] py-24 mt-0" id="intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Buckazoids header positioned first with much larger text size */}
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            About Buckazoids
          </h2>
          
          {/* Now placing the text rotation component between header and description */}
          <div className="mb-8">
            <div className="text-3xl sm:text-4xl font-bold">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="block">Buckazoids is</span>
                <div className="inline-block min-h-[3.5rem]">
                  {isMobile ? (
                    <OptimizedTextRotate
                      texts={[
                        "coded",
                        "the future",
                        "the lore",
                        "bitcoin",
                        "Satoshi",
                        "Nakamoto"
                      ]}
                      mainClassName="text-[#f7931a] overflow-hidden py-2 justify-center"
                      rotationInterval={2000}
                    />
                  ) : (
                    <TextRotate
                      texts={[
                        "coded",
                        "the future",
                        "the lore",
                        "bitcoin",
                        "Satoshi",
                        "Nakamoto"
                      ]}
                      mainClassName="text-[#f7931a] overflow-hidden py-2 justify-center"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Description text after the rotation component */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Buckazoids is the Solana token where retro gaming meets crypto history. The name comes from the in-game currency in Sierra's classic "Space Quest" games, which showed a ₿ symbol on screen decades before Bitcoin existed. A viral Reddit post in March 2025 brought it roaring back, and gamers and crypto fans have run with it ever since.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <History className="text-buckazoid-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community & Growth</h3>
            <p className="text-gray-600 mb-6">
              Buckazoids has grown past 10,000 wallet holders across the USA, China, Brazil, Greece, Southeast Asia, and the Spanish-speaking world. There was no presale and no VC money. This community showed up and built it from the ground up.
            </p>
            <Button 
              variant="outline" 
              className="border-buckazoid-blue text-buckazoid-blue hover:bg-buckazoid-blue/10"
              onClick={handleLearnHistoryClick}
            >
              Learn More <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <TrendingUp className="text-buckazoid-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Cultural Significance</h3>
            <p className="text-gray-600 mb-6">
              Buckazoids turns a real piece of gaming history into a coin you can own, trade, and actually use today.
            </p>
            <Button 
              variant="outline" 
              className="border-buckazoid-orange text-buckazoid-orange hover:bg-buckazoid-orange/10"
              onClick={handleDiscoverMoreClick}
            >
              Discover More <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
