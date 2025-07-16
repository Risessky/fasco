import Showcase from "@/app/_components/Showcase";
import Logos from "./_components/Logos";
import DealsOfTheMonth from "./_components/DealsOfTheMonth";
// import Arrivals from "./_components/Arrivals";
import PeakyBlinders from "./_components/PeakyBlinders";
import Benefits from "./_components/Benefits";
import FollowUS from "./_components/FollowUS";

export default function Home() {
  return (
    <main>
      <Showcase />
      <Logos />
      <DealsOfTheMonth />
      {/* <Arrivals/> */}
      <PeakyBlinders/>
      <Benefits/>
      <FollowUS/>
    </main>
  );
}
