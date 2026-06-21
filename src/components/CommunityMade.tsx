
const localClips = [
  "/community/community-1.mp4",
  "/community/community-2.mp4",
  "/community/community-3.mp4",
];

const CommunityMade = () => {
  return (
    <section id="community-made" className="bg-[#FFF5E6] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#02314d] mb-3">
            Community Made
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Videos, art, and memes created by the Buckazoids community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Featured YouTube video */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3uvaFC7tY4M"
              title="Buckazoids community video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Community clips */}
          {localClips.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black aspect-video"
            >
              <video
                className="w-full h-full object-contain bg-black"
                src={src}
                controls
                preload="metadata"
                playsInline
              ></video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityMade;
