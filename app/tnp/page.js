import React, { Suspense } from "react";
import amit from "@/assets/images/jpg/tnp/amit.jpg";
import Image from "next/image";
import Loading from "../loading";

export const metadata = {
  title: "Training and Placement - IIIT Naya Raipur",
  description:
    "Explore the transformative efforts of the Training and Placement Cell at DSPM IIIT Naya Raipur. Discover how it bridges academics and careers.",
  keywords:
    "Training and Placement, IIIT Naya Raipur, Career Growth, Internships, Campus Placements",
};

const TNP = () => {
  return (
    <main className="px-8 py-12 bg-gradient-to-r from-gray-100 via-white to-gray-50">
      <section className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900">
            Training & Placement
          </h1>
          <p className="mt-4 text-xl text-blue-700">
            Where academic potential meets career excellence.
          </p>
          <hr className="mt-6 border-blue-300" />
        </div>

        {/* Profile Section */}
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col items-center gap-6 p-8 mb-16 bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-lg shadow-lg md:flex-row">
            <Image
              src={amit}
              width={160}
              height={160}
              className="border-4 border-blue-300 rounded-full"
              alt="Amit Kumar Agrawal"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-blue-900">
                Amit Kumar Agrawal
              </h2>
              <p className="text-lg text-blue-800">
                Incharge - Training and Career Cell
              </p>
              <p className="mt-3 text-blue-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:amitag@iiitnr.edu.in"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  amitag@iiitnr.edu.in
                </a>
              </p>
            </div>
          </div>
        </Suspense>

        {/* About Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-4xl font-bold text-blue-900">
            Bridging Academics and Careers
          </h2>
          <p className="text-lg leading-8 text-blue-800">
            The Training & Placement Cell at DSPM IIIT-Naya Raipur plays a
            pivotal role in preparing students for the competitive professional
            world. With a mission to connect academic learning to real-world
            opportunities, the T&P cell ensures that every student is equipped
            with the skills, confidence, and resources to excel.
          </p>
          <p className="mt-6 text-lg leading-8 text-blue-800">
            From facilitating internships to organizing world-class placement
            drives, the cell works relentlessly to foster holistic growth,
            making every student industry-ready and primed for success.
          </p>
        </div>

        {/* Key Activities */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gradient-to-b from-blue-200 to-blue-100 rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-blue-900">
              Corporate Collaborations
            </h3>
            <p className="text-blue-800">
              Building partnerships with top industries and organizations for
              internships, training, and career opportunities.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-green-200 to-green-100 rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-green-900">
              Campus Drives
            </h3>
            <p className="text-green-800">
              Hosting campus interviews and recruitment sessions to connect
              students with esteemed companies.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-yellow-200 to-yellow-100 rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-yellow-900">
              Skill Development
            </h3>
            <p className="text-yellow-800">
              Organizing workshops, mock interviews, and group discussions to
              enhance soft and technical skills.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-purple-200 to-purple-100 rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-purple-900">
              State-of-the-Art Facilities
            </h3>
            <p className="text-purple-800">
              Offering modern infrastructure and tools to streamline placement
              activities.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-red-200 to-red-100 rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-red-900">
              Student Empowerment
            </h3>
            <p className="text-red-800">
              Encouraging students to pursue their dreams by aligning their
              passions with their careers.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-b from-indigo-200 to-indigo-100 rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-indigo-900">
              Holistic Growth
            </h3>
            <p className="text-indigo-800">
              Nurturing interpersonal and societal skills to ensure well-rounded
              development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TNP;
