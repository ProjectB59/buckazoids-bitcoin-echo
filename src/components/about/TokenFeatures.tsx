
const TokenFeatures = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-[#02314d]">The Buckazoids Token Features</h2>
      <ul className="list-none space-y-4 text-gray-700">
        {['A ₿-style "B" logo that predates Bitcoin',
          'A rocket ship, a nod to its origins as a cosmic currency in Space Quest',
          'The number 59, a prime number with cryptographic significance'
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#045c94]" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-700">
        Bitcoin's foundation is built on prime numbers, representing indivisibility, security,
        and incorruptibility. The number 59 is a cryptographic fingerprint embedded into the
        roots of Buckazoids.
      </p>
      <div className="mt-6 p-4 rounded-lg bg-[#fff3e2] border border-[#045c94]/20">
        <p className="text-[#02314d] font-semibold">
          Is there more to it? There's a lot more to it.{" "}
          <a
            href="https://projectb59.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#045c94] underline hover:text-[#02314d]"
          >
            Follow the research at Project B59
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TokenFeatures;
