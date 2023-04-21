import DevelopersInfo from "./DevelopersInfo";
import Subscribe from "./Subscribe";
import SubscribeAdd from "./SubscribeAdd";

export default function FooterInfo() {
  return (
    <div className="h-[226px] w-full sm:w-[37%]">
      <div className="mb-[20px] text-lg font-medium tracking-widest">
        Follow us
      </div>
      <Subscribe />
      <SubscribeAdd />
      <DevelopersInfo />
    </div>
  );
}
