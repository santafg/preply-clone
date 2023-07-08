import Banner from "@/components/Banner";
import ComfortZone from "@/components/ComfortZone";
import Footer from "@/components/Footer/Footer";
import MobileNavbar from "@/components/Navbars/MobileNavbar";
import Navbar from "@/components/Navbars/Navbar";
import Rating from "@/components/Rating";
import StartLearning from "@/components/StartLearning";
import Tutor from "@/components/Tutor";
import Works from "@/components/Works";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Preply - Best online</title>
      </Head>
      <div className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <Banner />
      <div className="">
        <div className="my-8 mt-2 ">
          <Rating />
        </div>
        <ComfortZone />
        <div className="my-8 ">
          <Works />
        </div>
        <Tutor />
        <div className="my-8">
          <StartLearning />
        </div>
      </div>
      <Footer />
    </div>
  );
}
