import Clock from "./Clock";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start p-10 space-x-0 md:space-x-4 font-display bg-bg-clock bg-cover h-screen w-full">
      <Clock cityKey={"stockholm"} />
      <Clock cityKey={"london"} />
      <Clock cityKey={"newYork"} />
      <Clock cityKey={"sydney"} />
    </div>
  );
}
