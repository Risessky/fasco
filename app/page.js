import Showcase from "@/app/_components/Showcase";
import Arrivals from "./_components/Arrivals";
import Benefits from "./_components/Benefits";
import DealsOfTheMonth from "./_components/DealsOfTheMonth";
import FollowUS from "./_components/FollowUS";
import Logos from "./_components/Logos";
import PeakyBlinders from "./_components/PeakyBlinders";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Subscribe from "./_components/Subscribe";

export default function Page({ searchParams }) {
  const filter = searchParams?.category ?? "women";
  // console.log(filter)

  return (
    <>
      <Header />
      <main>
        <Showcase />
        <Logos />
        <DealsOfTheMonth />
        <Arrivals filter={filter} />
        <PeakyBlinders />
        <Benefits />
        <FollowUS />
      </main>
      <Subscribe />
      <Footer />
    </>
  );
}
