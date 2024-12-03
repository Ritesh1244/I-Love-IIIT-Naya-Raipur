import React from "react";

export const metadata = {
  title: "Curriculum - I Love IIIT Naya Raipur",
  description:
    "Discover the academic excellence at IIIT Naya Raipur. Our curriculum blends theoretical knowledge with practical expertise to prepare students for a dynamic future.",
  keywords:
    "IIIT Naya Raipur Academics, Modular Learning, Industry-Ready Skills, Interdisciplinary Education, Capstone Projects",
};

const Curriculum = () => {
  return (
    <main className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-50 px-8 py-12">
      <section className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
          Our Academics
        </h1>
        <p className="text-lg text-center text-gray-700 mb-16">
          At IIIT Naya Raipur, the academic framework is crafted to blend
          theoretical depth with practical expertise, empowering students for
          future challenges. Here’s what sets our education apart:
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Comprehensive Curriculum */}
          <section className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-lg text-gray-800">
              Our programs are structured to build a solid academic foundation
              while fostering hands-on learning through innovative teaching
              methodologies and interdisciplinary opportunities.
            </p>
          </section>

          {/* Year-by-Year Breakdown */}
          <section className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Year-by-Year Breakdown
            </h2>
            <ul className="space-y-3 text-lg text-gray-800 list-disc list-inside">
              <li>
                <strong>Year 1:</strong> Fundamentals of mathematics, physics,
                and introductory programming form the building blocks.
              </li>
              <li>
                <strong>Year 2:</strong> Core subjects like data structures,
                algorithms, and digital systems take center stage.
              </li>
              <li>
                <strong>Year 3:</strong> Advanced topics such as Artificial
                Intelligence, Internet of Things (IoT), and software
                engineering, paired with interdisciplinary elective options.
              </li>
              <li>
                <strong>Year 4:</strong> Specialized electives, capstone
                projects, and internships provide a gateway to industry and
                research careers.
              </li>
            </ul>
          </section>

          {/* Modular Learning Experience */}
          <section className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Modular Learning Experience
            </h2>
            <p className="text-lg text-gray-800">
              Each semester follows a modular format, emphasizing project-based
              learning and real-world applications. Key areas of focus include
              emerging fields like Blockchain, Cybersecurity, and AI, enabling
              students to gain cutting-edge expertise.
            </p>
          </section>

          {/* Skill-Oriented Development */}
          <section className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Skill-Oriented Development
            </h2>
            <p className="text-lg text-gray-800">
              Our pedagogy prioritizes practical skills through consistent
              mini-projects and hands-on activities. Students gain proficiency
              in industry-relevant tools and technologies, ensuring they remain
              competitive in the job market.
            </p>
          </section>

          {/* Diverse Elective Options */}
          <section className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Diverse Elective Options
            </h2>
            <p className="text-lg text-gray-800">
              Electives across diverse domains, including entrepreneurship,
              design, and humanities, allow students to broaden their
              perspectives and explore multidisciplinary career paths.
            </p>
          </section>

          {/* Capstone Excellence */}
          <section className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Capstone Excellence
            </h2>
            <p className="text-lg text-gray-800">
              The final semester culminates in a capstone project, enabling
              students to address real-world challenges, often in partnership
              with industry leaders. This invaluable experience serves as a
              bridge to professional success and innovation.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;
