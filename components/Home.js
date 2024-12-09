// "use client";
// import React from "react";
// import home from "@/assets/images/webp/home/home.webp";
// // import iiit from "@/assets/images/webp/home/iloveiiitnr.webp";
// import iiit from "@/assets/images/jpg/home/college12.jpeg";
// import college8 from "@/assets/images/jpg/home/college8.png";
// import Image from "next/image";
// import Link from "next/link";

// const Home = () => {
//   return (
//     <main className="px-6 py-12 bg-gray-100">
//       <section className="max-w-5xl mx-auto">
//         {/* Welcome Section */}
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
//             Welcome to "i love iiitnr"
//           </h1>
//           <p className="text-lg text-gray-700">
//             Discover why IIIT Naya Raipur is the perfect choice for your
//             academic journey.
//           </p>
//         </div>

//         {/* Image and Campus Section */}
//         <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
//           <div className="relative w-full h-96">
//             <Image
//               priority
//               src={college8}
//               alt="IIIT Naya Raipur Campus Building"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-lg"
//             />
//           </div>
//           <div className="p-6">
//             <p className="mb-4 text-gray-700 text-md">
//               Explore the state-of-the-art facilities, vibrant campus life, and
//               unparalleled learning opportunities at IIIT NR. Join a community
//               of innovators and thinkers shaping the future.
//             </p>
//             <div className="flex justify-center">
//               <Link href="/about">
//                 <button className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-black rounded-lg bg-opacity-60 hover:bg-blue-700">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-hidden bg-white rounded-lg shadow-lg">
//           <div className="relative w-full h-96">
//             <Image
//               priority
//               src={iiit}
//               alt="IIIT Naya Raipur Campus Building"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-lg"
//             />
//           </div>
//           <div className="p-6">
//             <p className="mb-4 text-gray-700 text-md">
//               Explore the state-of-the-art facilities, vibrant campus life, and
//               unparalleled learning opportunities at IIIT NR. Join a community
//               of innovators and thinkers shaping the future.
//             </p>
//             <div className="flex justify-center">
//               <Link href="/about">
//                 <button className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-black rounded-lg bg-opacity-60 hover:bg-blue-700">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;
// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import iiit from "@/assets/images/jpg/home/college12.jpeg";
// import college8 from "@/assets/images/jpg/home/college8.png";

// const Home = () => {
//   return (
//     <main className="bg-gradient-to-b from-blue-50 to-gray-100">
//       {/* Hero Section */}
//       <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${college8.src})` }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//           <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
//             Welcome to <span className="text-blue-400">"I Love IIITNR"</span>
//           </h1>
//           <p className="text-lg lg:text-2xl max-w-3xl mx-auto mb-8">
//             Discover why IIIT Naya Raipur stands out as a hub of academic excellence, vibrant campus life, and unparalleled opportunities.
//           </p>
//           <Link href="/about">
//             <button className="px-8 py-4 text-lg lg:text-xl font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
//               Learn More About Us
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Feature 1 */}
//           <div className="relative overflow-hidden rounded-lg shadow-xl group">
//             <Image
//               src={iiit}
//               alt="State-of-the-art campus facilities at IIIT Naya Raipur"
//               layout="responsive"
//               width={1200}
//               height={800}
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-60 transition duration-300"></div>
//             <div className="absolute bottom-4 left-4 text-white z-20">
//               <h2 className="text-2xl font-bold">Vibrant Campus Life</h2>
//               <p className="mt-2 text-md max-w-md">
//                 Experience a campus buzzing with energy, innovation, and opportunities that redefine education.
//               </p>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className="relative overflow-hidden rounded-lg shadow-xl group">
//             <Image
//               src={college8}
//               alt="Student community and academics at IIIT Naya Raipur"
//               layout="responsive"
//               width={1200}
//               height={800}
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-60 transition duration-300"></div>
//             <div className="absolute bottom-4 left-4 text-white z-20">
//               <h2 className="text-2xl font-bold">World-Class Education</h2>
//               <p className="mt-2 text-md max-w-md">
//                 Join a community of innovators and thinkers with access to state-of-the-art facilities and expert guidance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="bg-blue-600 py-12">
//         <div className="container mx-auto text-center text-white">
//           <h2 className="text-3xl lg:text-5xl font-bold mb-4">Take the First Step Towards Excellence</h2>
//           <p className="text-lg lg:text-xl mb-8">
//             Explore our academic programs, vibrant community, and exceptional infrastructure at IIIT Naya Raipur.
//           </p>
//           <Link href="/about">
//             <button className="px-8 py-4 text-lg lg:text-xl font-semibold bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
//               Learn More
//             </button>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;

// updated Homepage
"use client";
import React from "react";
import Head from "next/head"; // Import Head for adding meta tags
import Image from "next/image";
import Link from "next/link";
import iiit from "@/assets/images/jpg/home/college12.jpeg";
import college8 from "@/assets/images/jpg/home/college8.png";

const Home = () => {
  return (
    <>
      {/* Add meta tag for Google verification */}
      <Head>
        <meta name="google-site-verification" content="BTRKo61Gadt04gd3KgS51UmXaJir6JQ-RuL3iuHr_SQ" />
        <title>I Love IIITNR - Discover Excellence</title>
        <meta name="description" content="Explore the vibrant campus life, state-of-the-art facilities, and academic excellence at IIIT Naya Raipur." />
      </Head>

      <main className="bg-gradient-to-b from-blue-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${college8.src})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
              Welcome to <span className="text-blue-400">"I Love IIITNR"</span>
            </h1>
            <p className="text-lg lg:text-2xl max-w-3xl mx-auto mb-8">
              Discover why IIIT Naya Raipur stands out as a hub of academic excellence, vibrant campus life, and unparalleled opportunities.
            </p>
            <Link href="/about">
              <button className="px-8 py-4 text-lg lg:text-xl font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                Learn More About Us
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group">
              <Image
                src={iiit}
                alt="State-of-the-art campus facilities at IIIT Naya Raipur"
                layout="responsive"
                width={1200}
                height={800}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-60 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h2 className="text-2xl font-bold">Vibrant Campus Life</h2>
                <p className="mt-2 text-md max-w-md">
                  Experience a campus buzzing with energy, innovation, and opportunities that redefine education.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group">
              <Image
                src={college8}
                alt="Student community and academics at IIIT Naya Raipur"
                layout="responsive"
                width={1200}
                height={800}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-60 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h2 className="text-2xl font-bold">World-Class Education</h2>
                <p className="mt-2 text-md max-w-md">
                  Join a community of innovators and thinkers with access to state-of-the-art facilities and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-blue-600 py-12">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Take the First Step Towards Excellence</h2>
            <p className="text-lg lg:text-xl mb-8">
              Explore our academic programs, vibrant community, and exceptional infrastructure at IIIT Naya Raipur.
            </p>
            <Link href="/about">
              <button className="px-8 py-4 text-lg lg:text-xl font-semibold bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;


