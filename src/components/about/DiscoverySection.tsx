
const DiscoverySection = () => {
  return (
    <div className="mb-12 p-8 rounded-2xl" style={{ background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #02314d 0%, #045c94 100%) border-box`, border: "2px solid transparent" }}>
      <h2 className="text-3xl font-bold mb-6 text-[#02314d]">The Discovery</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        In March 2025, a Reddit post led us to Space Quest, an old-school adventure game from
        Sierra On-Line (later Sierra Entertainment). What we found inside it was hard to believe.
      </p>
      <div className="mb-8">
        <ul className="list-none space-y-4 text-gray-700">
          {[
            'Released in 1986, Space Quest quickly became a cult classic',
            'In 1986, Buckazoids appeared as a transactional currency in the game',
            'By 1991, in Space Quest IV, it evolved into a tradeable digital token',
            'The design of the Buckazoids token mirrors what we now recognize as the Bitcoin logo (₿)'
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#045c94]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-[#02314d]">Uncovering the Mystery</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A small group of us kept digging. Since then we've traced connections across names, symbols,
        and dates that all point back to crypto's biggest question: who is Satoshi Nakamoto?
      </p>
    </div>
  );
};

export default DiscoverySection;
