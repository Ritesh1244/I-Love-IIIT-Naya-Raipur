import React, { Suspense } from "react";
import Image from "next/image";
import shail from "@/assets/images/webp/contact/sahil.webp";
import bhavesh from "@/assets/images/webp/contact/bhavesh.webp";
import soumya from "@/assets/images/webp/contact/soumya.webp";
import devjit from "@/assets/images/webp/contact/devajit.webp";
import Loading from "../loading";

export const metadata = {
  title: "Reach Out - I Love IIIT Naya Raipur",
  description:
    "Have questions or want to know more about IIIT Naya Raipur? Get in touch with us for all the details and team insights.",
  keywords: "Contact IIIT Naya Raipur, IIIT NR Team, Team Members",
};

const Contact = () => {
  return (
    <main className="px-6 py-16 bg-gradient-to-r from-blue-50 via-green-100 to-purple-100">
      <section className="max-w-6xl mx-auto">
        <h1 className="mb-10 text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Get in Touch with Us!
        </h1>
        <p className="text-xl text-center text-gray-800 mb-10">
          We're excited to connect with you. Whether you have questions or just
          want to chat about the incredible journey at IIIT Naya Raipur, we're
          all ears!
        </p>

        {/* Team Members Section */}
        <Suspense fallback={<Loading />}>
          <div className="mt-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  image: shail,
                  name: "Sanjiv Kushwaha",
                  position: "+91 8005835848",
                },
                {
                  image: bhavesh,
                  name: "Ritesh Kumar",
                  position: "+91 6203854844",
                },
                {
                  image: soumya,
                  name: "Sumit Kumar",
                  position: "+91 4378537488",
                },
                {
                  image: devjit,
                  name: "Amitesh Singh",
                  position: "+91 9843879834",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative w-32 h-32 rounded-full border-4 border-indigo-500 overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={`${member.name}'s profile picture`}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </Suspense>

        {/* Address Section */}
        <div className="mt-12 space-y-8">
          <div className="p-6 bg-gradient-to-r from-teal-100 via-blue-200 to-lime-100 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Location
            </h2>
            <address className="mt-4 text-gray-600 text-lg">
              IIIT Naya Raipur <br />
              Plot No. 7, Sector 24, Near Purkhoti Muktangan, <br />
              Atal Nagar – 493661, Chhattisgarh, India
            </address>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
