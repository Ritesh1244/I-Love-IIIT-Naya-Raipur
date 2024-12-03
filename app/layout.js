import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
const metadataBase = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
);
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase,
  title: {
    default: "I Love IIIT NR - Experience the Best of IIIT Naya Raipur",
    template: "%s - I Love IIITnr",
  },
  description:
    "Discover why everyone says 'I Love IIIT NR'! Explore the dynamic academics, research opportunities, and vibrant campus life of IIIT Naya Raipur.",
  other: {
    "google-site-verification": "AWQselovnO5BcnGHaWrIXh9j6qesnZQBW5PfjawUg74",
  },
  openGraph: {
    url: metadataBase,
    images: [`${metadataBase}/opengraph-image.png`],
  },
  twitter: {
    images: [`${metadataBase}/opengraph-image.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <div className="max-w-[1550px] mx-auto px-2 md:px-4 pt-[70px] md:pt-16 mb-10">
          {children}
        </div>
        {/* <footer className="fixed flex items-center justify-center w-full h-12 -translate-y-full bg-black backdrop-blur-md bg-opacity-60 top-full">
          <p className="px-2 my-2 text-xs font-semibold text-justify text-white xl:text-lg">
            © 2024 IIIT-Naya Raipur. All Rights Reserved.<br></br>
            Digital Marketing Group Assignment By Ritesh Kumar, Sanjiv Kushwaha,
            Amitesh Singh, Sumit Kumar.
          </p>
        </footer> */}
        <footer className="fixed flex flex-col items-center justify-center w-full h-20 bg-[#43536a] backdrop-blur-md bg-opacity-90 bottom-0 z-50">
  <p className="px-4 text-sm font-semibold text-center text-white md:text-lg">
    © 2024 IIIT-Naya Raipur. All Rights Reserved.
  </p>
  <p className="px-4 mt-2 text-xs font-medium text-center text-white md:text-base">
    Digital Marketing Group Assignment By Ritesh Kumar, Sanjiv Kushwaha, Amitesh Singh, Sumit Kumar.
  </p>
</footer>

        {/* <footer className="fixed bg-black bg-opacity-60 z-50 min-w-full left-1/2 lg:py-4 py-1 backdrop-blur-md -translate-x-1/2 top-[100%] -translate-y-full text-center">
          <p className="px-2 text-xs font-semibold text-white lg:text-lg">
            Disclaimer: This is a Personal Digital Marketing Project for SEO. I
            Love💗 IIIT Naya Raipur (CG) Copyright Reserved © 2024.
          </p>
        </footer> */}
      </body>
    </html>
  );
}
