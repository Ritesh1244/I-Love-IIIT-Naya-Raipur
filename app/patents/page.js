import React from "react";

export const metadata = {
  title: "Innovative Patents - IIIT Naya Raipur",
  description:
    "Explore the trailblazing patents by IIIT Naya Raipur's brilliant minds. Delve into cutting-edge technologies and their potential to revolutionize industries.",
  keywords: "IIIT Naya Raipur innovations, patents, student inventions, technology breakthroughs",
};

// Patent data
const patents = [
  {
    title: "Smart Electricity Metering System and Method Thereof",
    inventors:
      "Nenavath Srinivas Naik, Yathin Prakash Kethepalli, Rony Joseph, Nandita Yadav",
    applicationNo: "202221045988",
    filingDate: "12-08-2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awarded",
  },
  {
    title: "AI-Powered Fruit Segregation System",
    inventors: "Mallikharjuna Rao K, Yathin Prakash Kethepalli, Chahat Mittal",
    applicationNo: "202221052788",
    filingDate: "15 Sept 2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awarded",
  },
  {
    title:
      "Smartphone-Based Body Temperature Detection System with USB Thermal Camera Integration",
    inventors:
      "Shrivishal Tripathi, Divyansh Kushwaha, Deepanshu Pratik, Shivanshu Kumar Prajapati, Manoj Kumar Majumder, Vivek Tiwari, Anurag Singh, Sresha Yadav, Muneendra Ojha",
    applicationNo: "202221041826",
    filingDate: "23/7/2022",
    publicationDate: "--",
    patentNo: "Awaited",
    status: "Awarded",
  },
  // Add additional patents as needed
];

const Patents = () => {
  return (
    <main className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-50 px-8 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
          Groundbreaking Patents by IIIT Naya Raipur
        </h1>
        <p className="text-lg text-center text-gray-700 mb-16">
          Discover the transformative innovations brought to life by IIIT Naya Raipur's talented students and faculty. From smart systems to cutting-edge technologies, these patents are setting new standards.
        </p>

        {/* Patent List */}
        <div className="space-y-10">
          {patents.map((patent, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">{patent.title}</h2>
              <p className="text-lg text-gray-800">
                <strong className="text-indigo-600">Inventors:</strong> {patent.inventors}
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-indigo-600">Application No.:</strong> {patent.applicationNo}
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-indigo-600">Filing Date:</strong> {patent.filingDate}
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-indigo-600">Publication Date:</strong> {patent.publicationDate}
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-indigo-600">Patent No.:</strong> {patent.patentNo}
              </p>
              <p className="text-lg text-gray-800">
                <strong className="text-indigo-600">Status:</strong>{" "}
                <span
                  className={`${
                    patent.status === "Awarded"
                      ? "text-green-500"
                      : "text-yellow-500"
                  } font-semibold`}
                >
                  {patent.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Patents;
