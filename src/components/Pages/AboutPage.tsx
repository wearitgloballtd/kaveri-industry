import {
  Lightbulb,
  MapPin,
  Shield,
  Users,
  Flag,
  Leaf,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState } from "react";

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
      At Kaveri Industries, we believe that true success is about creating a positive and lasting impact. Sustainability is at the core of our operations, and we are dedicated to minimising our environmental footprint through resource-efficient processes and responsible waste management. From developing green belts to implementing rainwater harvesting systems, we ensure our growth respects and protects our natural resources. We are committed to building a better future for our people, our partners, and the generations to come.
      </blockquote>
    </div>
  );
};

const SustainabilityStats = () => {
  const stats = [
    { year: "2021", label: "CARBON NEUTRAL GLOBALLY", value: "" },
    { value: "+90%", label: "DECREASE IN EMISSIONS FROM CLOUD SERVICES" },
    { value: "3.5M+", label: "TREES PLANTED BY 2022" },
    { value: "800+", label: "CLIMATE TEMPLATES" },
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
  const [activeLocation, setActiveLocation] = useState("PITTSBURGH");

  const locations = ["PITTSBURGH", "CLEVELAND", "BIRMINGHAM"];

  const teamMembers = [
    {
      id: 1,
      name: "John Carter",
      title: "CEO & Founder",
      image: "/160.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Kathie Corl",
      title: "CTO & Co-Founder",
      image: "/160.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Lily Woods",
      title: "Project Manager",
      image: "/160.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto mt-20 py-24 px-6 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left: Heading and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-7xl md:text-7xl font-semibold text-gray-900 mb-10 leading-tight text-center md:text-left">
            A Legacy of Engineering Excellence
            <br />
            and Innovation
          </h1>
          <h1 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-10 leading-tight text-center md:text-left">
            Over 35 Years of Manufacturing Excellence
          </h1>
          <div className="flex gap-4 mb-4">
            <button className="bg-[#FF3D2E] text-white px-8 py-2 rounded-full font-semibold flex items-center gap-2 text-lg shadow-sm hover:bg-[#e22c1c] transition">
              Join us <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-300 text-gray-800 px-8 py-2 rounded-full font-semibold text-lg bg-white hover:bg-gray-100 transition">
              Our values
            </button>
          </div>
        </div>
        {/* Right: Paragraph */}
        <div className="flex-1 max-w-xl mt-10 md:mt-0 md:pl-12 flex items-center md:items-end">
          <p className="text-gray-500 text-lg text-center md:text-left md:self-end md:mt-40">
            Welcome to Kaveri Industries, a trusted and well-established
            engineering and manufacturing company with a powerful legacy of over
            35 years. We are recognised for our innovation, durability, and
            precision in the manufacturing sector. Our journey began with a
            focus on high-performance packaging machinery, where we became a
            leading supplier, specialising in rotary machines for the tobacco
            industry.
          </p>
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
            src="/28820.jpg"
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
            src="/160.jpg"
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
              Lorem ipsum dolor sit amet consectetur locus purus tincidunt
              mauris dolor molestae suscipit id egestas mauris justo laoreet sed
              quis.
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
                Lorem ipsum dolor sit amet consectetur locus purus tincidunt
                mauris dolor non molestae suscipit id egestas mauris.
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
                Lorem ipsum dolor sit amet consectetur locus purus tincidunt
                mauris dolor non molestae suscipit id egestas mauris.
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
                Lorem ipsum dolor sit amet consectetur locus purus tincidunt
                mauris dolor non molestae suscipit id egestas mauris.
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
                Lorem ipsum dolor sit amet consectetur locus purus tincidunt
                mauris dolor non molestae suscipit id egestas mauris.
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
                Lorem ipsum dolor sit amet consectetur locus purus tincidunt
                mauris dolor non molestae suscipit id egestas mauris.
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
                Lorem ipsum dolor sit amet consectetur locus purus tincidunt
                mauris dolor non molestae suscipit id egestas mauris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="bg-gray-100 py-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-10">
          <div className="mb-10">
            <div className="relative text-red-500 text-base font-semibold mb-4">
              04
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-15 h-0.5 bg-red-500"></div>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-5 leading-tight">
              Visit our location
            </h2>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-10">
              Lorem ipsum dolor sit amet consectetur. Locus purus tincidunt
              mauris dolor molestie suscipit id. Egestas mauris justo laoreet
              sed quis.
            </p>

            <div className="flex gap-10 ml-auto justify-end -mt-32">
              {locations.map((location) => (
                <button
                  key={location}
                  className={`relative text-base font-medium py-2 transition-colors duration-300 ${
                    activeLocation === location
                      ? "text-gray-800 after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-red-500 after:content-['']"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveLocation(location)}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image section that extends to the right edge */}
        <div className="relative">
          <div className="ml-56 mr-0 mt-16">
            <div className="relative rounded-l-xl overflow-hidden h-[500px]">
              <img
                src="/160.jpg"
                alt="Industrial facility in Pittsburgh"
                className="w-full h-[450px] object-cover"
              />

              <div className="absolute bottom-0 left-0 w-1/2 bg-black bg-opacity-85 text-white p-10 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Pittsburgh, PA
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet consectetur. Locus purus tincidunt
                  mauris dolor molestie suscipit id egestas mauris justo
                  laoreet.
                </p>

                <div className="flex gap-15">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">📧</span>
                      <span className="text-white font-semibold text-base">
                        Contact us
                      </span>
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      <p className="my-1">Email: contact@industrial.com</p>
                      <p className="my-1">Phone: (123) 456 - 789</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">📍</span>
                      <span className="text-white font-semibold text-base">
                        Our location
                      </span>
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      <p className="my-1">16 Finland St Pittsburgh,</p>
                      <p className="my-1">Pennsylvania PA, 15219</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      <section className="min-h-screen bg-gray-50">
        <div className="relative">
          {/* Main sustainability section */}
          <div className="grid lg:grid-cols-2 min-h-screen">
            <SustainabilityHero />
            <div className="relative">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/28820.jpg)" }}
              />
              {/* Quote overlay */}
              <div className="relative z-10 flex items-center justify-center h-full p-8">
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

      {/* section 5 */}
      <section className="py-16 px-4 bg-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Number */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center">
              <div className="h-px bg-red-500 w-16"></div>
              <span className="mx-6 text-red-500 font-medium text-lg">06</span>
              <div className="h-px bg-red-500 w-16"></div>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-16 leading-tight">
            Meet the team
            <br />
            behind Industrial
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                {/* Member Photo Container */}
                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Social Media Icons Overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.facebook}
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-md"
                      aria-label={`${member.name} Facebook`}
                    >
                      <Facebook size={18} className="text-gray-700" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-md"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter size={18} className="text-gray-700" />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-md"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-red-500 font-medium text-base lg:text-lg">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 6: Follow us on social media */}
      <section className="bg-gray-200 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section number with line */}
          <div className="flex items-center mb-8">
            <span className="text-red-500 text-lg font-medium">06</span>
            <div className="w-12 h-0.5 bg-red-500 ml-4"></div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Follow us on social media
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-lg mb-16 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Locus purus tincidunt mauris
            dolor molestie suscipit id. Egestas mauris justo laoreet sed quis.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 items-center">
            {/* Facebook */}
            <div className="w-32 h-32 bg-gray-800 flex items-center justify-center">
              <Facebook className="w-12 h-12 text-white fill-white" />
            </div>

            {/* X (Twitter) */}
            <div className="w-32 h-32 bg-white flex items-center justify-center border border-gray-200">
              <svg
                className="w-10 h-10 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>

            {/* Twitch */}
            <div className="w-32 h-32 bg-white flex items-center justify-center border border-gray-200">
              <svg
                className="w-10 h-10 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.149 0L.537 4.119v15.581h5.378V24l4.119-4.3h3.49L21.463 12V0H2.149zm17.44 11.07l-3.49 3.49h-3.49l-3.07 3.07v-3.07H4.119V1.86h15.47v9.21z" />
                <path d="M17.44 5.35h-1.86v5.58h1.86V5.35zm-4.93 0h-1.86v5.58h1.86V5.35z" />
              </svg>
            </div>

            {/* YouTube */}
            <div className="w-32 h-32 bg-gray-800 flex items-center justify-center">
              <Youtube className="w-12 h-12 text-white fill-white" />
            </div>
          </div>
        </div>
      </section>

      {/* section 7: Brands & companies we worked with */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section number with line */}
          <div className="flex items-center mb-8">
            <span className="text-red-500 text-lg font-medium">07</span>
            <div className="w-12 h-0.5 bg-red-500 ml-4"></div>
          </div>

          {/* Heading and arrows */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Brands & companies
              <br />
              we worked with
            </h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-gray-200 bg-white rounded-lg overflow-hidden shadow-sm">
            {/* Card 1 */}
            <div className="p-8 flex flex-col items-start">
              <div className="mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    fill="#A3ACB9"
                  />
                  <rect x="6" y="6" width="4" height="4" rx="1" fill="#fff" />
                  <rect x="14" y="6" width="4" height="4" rx="1" fill="#fff" />
                  <rect x="6" y="14" width="4" height="4" rx="1" fill="#fff" />
                  <rect x="14" y="14" width="4" height="4" rx="1" fill="#fff" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
                Constructfy X
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Sed ultricies adipiscing pretium viverra tortor consequat nisl
                quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut
                malesuada quis eget duis netus.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 flex flex-col items-start">
              <div className="mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path d="M4 16V8l8-4 8 4v8l-8 4-8-4Z" fill="#A3ACB9" />
                  <path
                    d="M4 8l8 4 8-4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
                Cargo X
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Sed ultricies adipiscing pretium viverra tortor consequat nisl
                quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut
                malesuada quis eget duis netus.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-8 flex flex-col items-start">
              <div className="mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M3 17V7l9-5 9 5v10l-9 5-9-5Z"
                    stroke="#A3ACB9"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10v4l5 3 5-3v-4"
                    stroke="#A3ACB9"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
                Carpenters X
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Sed ultricies adipiscing pretium viverra tortor consequat nisl
                quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut
                malesuada quis eget duis netus.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-8 flex flex-col items-start">
              <div className="mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="10"
                    rx="2"
                    fill="#A3ACB9"
                  />
                  <rect x="7" y="11" width="2" height="2" rx="1" fill="#fff" />
                  <rect x="15" y="11" width="2" height="2" rx="1" fill="#fff" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
                Construktion X
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Sed ultricies adipiscing pretium viverra tortor consequat nisl
                quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut
                malesuada quis eget duis netus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
