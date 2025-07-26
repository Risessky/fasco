import Showcase from "@/app/_components/Showcase";
import Arrivals from "./_components/Arrivals";
import Benefits from "./_components/Benefits";
import DealsOfTheMonth from "./_components/DealsOfTheMonth";
import FollowUS from "./_components/FollowUS";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Logos from "./_components/Logos";
import PeakyBlinders from "./_components/PeakyBlinders";
import Subscribe from "./_components/Subscribe";
import { auth } from "./_lib/auth";

export default async function Page({ searchParams }) {
  const filter = searchParams?.category ?? "women";
const  session =await auth()
console.log(session)

  return (
    <>
      <Header/>
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
