import Showcase from "@/app/_components/Showcase";
import Arrivals from "./_components/Arrivals";
import Benefits from "./_components/Benefits";
import DealsOfTheMonth from "./_components/DealsOfTheMonth";
import FollowUS from "./_components/FollowUS";
import Logos from "./_components/Logos";
import PeakyBlinders from "./_components/PeakyBlinders";

export default function Page() {
  return (
    <main>
      <Showcase />
      <Logos />
      <DealsOfTheMonth />
      <Arrivals/>
      <PeakyBlinders/>
      <Benefits/>
      <FollowUS/>
    </main>
  );
}
