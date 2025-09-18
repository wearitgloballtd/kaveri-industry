import {
  Lightbulb,
  MapPin,
  Shield,
  Users,
  Flag,
  Leaf,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const SustainabilityHero = () => {
  return (
    <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-gray-100">
      <div className="max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Our Commitment to a Sustainable Future
        </h1>
        <p className="text-lg text-gray-600">
          Kaveri's sustainability practices and goals
        </p>
      </div>
    </div>
  );
};

const SustainabilityQuote = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 max-w-2xl shadow-lg">
      <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
        At Kaveri, we believe that true success is about creating a positive and
        lasting impact. Sustainability is at the core of our operations, and we
        are dedicated to minimising our environmental footprint through
        resource-efficient processes and responsible waste management. From
        developing green belts to implementing rainwater harvesting systems, we
        ensure our growth respects and protects our natural resources.
      </blockquote>
    </div>
  );
};

const SustainabilityStats = () => {
  const stats = [
    { year: "100%", label: "Clients satisfaction", value: "" },
    { value: "150+", label: "Clients worldwide" },
    { value: "35+", label: "Years of experience" },
    { value: "1000㎡", label: "Production base" },
  ];

  return (
    <div className="mx-8 lg:mx-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-center text-gray-700 font-medium mb-8">
          We're proud of what we've achieved and excited about our big goals
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.year || stat.value}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  // const [activeLocation, setActiveLocation] = useState("PITTSBURGH");

  // const locations = ["PITTSBURGH", "CLEVELAND", "BIRMINGHAM"];

  return (
    <>
      {/* About Us Image Section - Full Width */}
      <section className="w-full mt-10 mb-10">
        <div className="w-screen max-w-full overflow-hidden">
          <img
            src="/about us.jpg"
            alt="Kaveri Industries - About Us"
            className="w-full h-auto object-cover"
            style={{
              height: "65vh",
              objectPosition: "center",
              maxWidth: "100vw",
            }}
          />
        </div>
      </section>

      {/* Image + Stats Section */}
      <section className="relative flex flex-col items-center justify-center w-full mt-0">
        {/* Centered Image, overlapping stats */}
        <div
          className="relative z-20 w-full flex justify-end"
          style={{ marginBottom: "-80px" }}
        >
          <img
            src="/About-Us/A Legacy of Engineering Excellence and Innovation.jpg"
            alt="Welding"
            className="w-[1400px] max-w-full h-[450px] object-cover rounded-lg border-white shadow-xl"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Stats Section */}
        <div className="bg-[#101418] w-full flex justify-center">
          <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 py-20 px-4 md:px-8 mt-20">
            <div>
              <div className="text-2xl font-light text-gray-300 leading-tight text-center mb-1">
                Clients
                <br />
                satisfaction
              </div>
              <div className="text-6xl md:text-7xl font-semibold text-white text-center">
                100
                <span className="align-super text-red-500 text-3xl font-bold">
                  %
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-300 leading-tight text-center mb-1">
                Clients
                <br />
                worldwide
              </div>
              <div className="text-6xl md:text-7xl font-semibold text-white text-center">
                560
                <span className="align-super text-red-500 text-3xl font-bold">
                  +
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-300 leading-tight text-center mb-1">
                Years of
                <br />
                experience
              </div>
              <div className="text-6xl md:text-7xl font-semibold text-white text-center">
                24
                <span className="align-super text-red-500 text-3xl font-bold">
                  +
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-300 leading-tight text-center mb-1">
                Team
                <br />
                members
              </div>
              <div className="text-6xl md:text-7xl font-semibold text-white text-center">
                32
                <span className="align-super text-red-500 text-3xl font-bold">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <div className="flex h-screen">
        {/* Left side - Image (approximately 42% width) */}
        <div className="w-[42%]">
          <img
            src="/About-Us/The Principles That Guide Us.jpg"
            alt="Business meeting in warehouse with person in suit and worker in red overalls"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Dark content area (approximately 58% width) */}
        <div className="w-[70%] bg-[#101418] relative">
          {/* Content positioned towards the left of the dark area */}
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2 max-w-lg">
            {/* Number with line */}
            <div className="flex items-center mb-8">
              <span className="text-red-500 text-sm font-medium">01</span>
              <div className="ml-4 h-px bg-red-500 w-16"></div>
            </div>

            {/* Main heading */}
            <h2 className="text-white text-5xl font-bold leading-tight mb-12">
              The Principles That Guide Us
            </h2>
            <h2 className="text-white ml-16 text-3xl font-semibold leading-tight mb-4">
              Our Vision is to
            </h2>

            {/* Description text */}
            <p className="text-gray-400  text-base leading-relaxed mb-8 max-w-md">
              Our Vision is to be a diversified, innovation-driven manufacturing
              group that delivers excellence in the engineering sectors. We are
              committed to quality, sustainability, and creating value for all
              our stakeholders.
            </p>

            {/* Join us button */}
          </div>

          {/* Content positioned towards the right of the dark area */}
          <div
            className="absolute right-0.5 top-1/2 transform -translate-y-1/2 max-w-lg"
            style={{ top: "calc(56.7% + 60px)" }}
          >
            <h2 className="text-white ml-16 text-3xl font-semibold leading-tight mb-4">
              Our Mission is to
            </h2>

            {/* Description text */}
            <ul className="text-gray-400 text-base leading-relaxed mb-8 max-w-md space-y-2">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  Continuously innovate and improve our engineering and
                  manufacturing practices.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  Diversify responsibly to create multi-sector business value.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  Empower our workforce through training, safety, and growth
                  opportunities.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  Build enduring partnerships with our clients and stakeholders.
                </span>
              </li>
            </ul>
          </div>

          {/* Light gray section at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white"></div>
        </div>
      </div>

      {/* section 3 */}
      <section className=" py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-red-400 w-12"></div>
              <span className="mx-4 text-red-400 font-medium text-sm">03</span>
              <div className="h-px bg-red-400 w-12"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The values that drive
              <br />
              everything we do
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our principles are the foundation of our business. They guide our
              actions, define our character, and drive our commitment to
              engineering excellence and customer success.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Quality */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <Lightbulb className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are relentless in our pursuit of perfection. Quality at
                Kaveri means engineering machines that are not only durable and
                reliable but also deliver unmatched precision.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <MapPin className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation is the engine of our progress. We continuously invest
                in research and development to pioneer the next generation of
                automated packaging solutions.
              </p>
            </div>

            {/* Security */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build equipment you can trust. For us, security means
                ensuring the operational safety of our machines, protecting your
                assets, and safeguarding the integrity of your products.
              </p>
            </div>

            {/* Teamwork */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Teamwork
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our greatest strength is our people. We foster a culture of
                collaboration where our engineers, technicians, and support
                staff work together seamlessly.
              </p>
            </div>

            {/* Leadership */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <Flag className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We aim to set the industry benchmark. Leadership at Kaveri is
                about more than market position; it's about guiding the future
                of packaging automation.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <Leaf className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to responsible engineering. Sustainability is
                at the core of our design philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="min-h-screen bg-gray-50">
        <div className="relative">
          {/* Main sustainability section */}
          <div className="grid lg:grid-cols-2 min-h-screen">
            <SustainabilityHero />
            <div className="relative">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/About-Us/OurCommitmenttoaSustainableFuture.jpg)",
                }}
              />
              {/* Quote overlay */}
              <div className="relative z-5 flex items-center justify-center h-90x p-4">
                <SustainabilityQuote />
              </div>
            </div>
          </div>

          {/* Stats section overlapping the main section */}
          <div className="relative -mt-32 z-20">
            <SustainabilityStats />
          </div>
        </div>
      </section>

      {/* section 5: Meet Our Leader (About Our CEO style) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Number */}
          <div className="mb-8">
            <div className="inline-flex items-center">
              <div className="h-px bg-red-500 w-16"></div>
              <span className="mx-6 text-red-500 font-medium text-lg">05</span>
              <div className="h-px bg-red-500 w-16"></div>
            </div>
          </div>

          {/* Layout: text left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Text content */}
            <div className="md:col-span-7">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                About Our Leader
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
                Mr. Narendra Kumar Srivastava is the dynamic business leader and
                driving force behind Kaveri Industries. With over 25 years of
                proven experience in Engineering, Flexible Packaging, and Real
                Estate, he has a strong track record of establishing
                high-performance manufacturing facilities.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                As the Promoter and Director, Mr. Srivastava's vision is to
                diversify responsibly, embrace modern technologies, and drive
                sustainable growth across all sectors. His strategic mindset and
                hands-on leadership continue to guide our company toward new
                benchmarks of manufacturing excellence.
              </p>

              {/* Feature items */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <Flag className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                      VISIONARY LEADERSHIP
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Strategic diversification with a hands-on approach to
                      results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 tracking-wider mb-1">
                      TECHNOLOGY & GROWTH
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Embracing modern technologies to drive sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image on the right */}
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src="/317.jpg"
                  alt="Mr. Narendra Kumar Srivastava"
                  className="w-full h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
