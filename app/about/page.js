import React from "react";

export const metadata = {
  title: "Explore IIIT Naya Raipur - A Hub of Innovation",
  description:
    "Step into the world of cutting-edge technology and holistic education at IIIT Naya Raipur. Learn about dynamic academics, advanced research, global exposure, and more!",
  keywords:
    "IIIT Naya Raipur, Innovation, Research Labs, Global Education, Technological Excellence, Engineering Future",
};

const About = () => {
  return (
    <main className="px-8 py-16 bg-gradient-to-r from-purple-100 via-indigo-200 to-blue-300">
      <section className="max-w-6xl mx-auto space-y-10">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-6">
          Welcome to IIIT Naya Raipur
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          IIIT Naya Raipur stands as a beacon for students who dream of shaping
          the future. Join us for an educational journey that blends technical
          prowess with real-world experience.
        </p>

        {/* Sections */}
        <div className="space-y-12 mt-16">
          {/* Dynamic Academics */}
          <section className="p-8 bg-white rounded-3xl shadow-xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              Dynamic Academics
            </h2>
            <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
              <li>
                Hands-on engineering experience from the very first semester.
              </li>
              <li>
                Practical, project-based learning with industry relevance.
              </li>
              <li>
                Future-forward modular courses tailored to emerging
                technologies.
              </li>
              <li>
                The unique "T"-Education model ensures both depth and breadth.
              </li>
              <li>
                Unbeatable industry connections for internships and electives.
              </li>
            </ul>
          </section>

          {/* Advanced Research Labs */}
          <section className="p-8 bg-white rounded-3xl shadow-xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              State-of-the-Art Research Labs
            </h2>
            <p className="text-lg text-gray-700">
              Dive into groundbreaking research with our labs focusing on Data
              Science, AI, IoT, and more!
            </p>
          </section>

          {/* Semester Abroad Experiences */}
          <section className="p-8 bg-white rounded-3xl shadow-xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              Global Exposure - Semester Abroad
            </h2>
            <p className="text-lg text-gray-700">
              Unlock international opportunities with up to ₹5 Lakhs financial
              aid for global projects.
            </p>
          </section>

          {/* Research & Innovation */}
          <section className="p-8 bg-white rounded-3xl shadow-xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              Fueling Research & Innovation
            </h2>
            <p className="text-lg text-gray-700">
              We support innovation with grants for research, conferences, and
              prototype development.
            </p>
          </section>

          {/* Holistic Personality Growth */}
          <section className="p-8 bg-white rounded-3xl shadow-xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              Holistic Growth - Beyond Academics
            </h2>
            <p className="text-lg text-gray-700">
              Develop leadership skills through workshops, clubs, and events
              focused on personal growth.
            </p>
          </section>

          {/* Extracurricular Activities */}
          <section className="p-8 bg-white rounded-3xl shadow-xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
              Unleash Your Passions
            </h2>
            <p className="text-lg text-gray-700">
              Explore your creative and athletic sides with our wide range of
              extracurricular activities, supported by world-class facilities.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
