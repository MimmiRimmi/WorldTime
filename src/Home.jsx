import Clock from "./Clock";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start px-2 pt-10 md:p-10 space-x-0 md:space-x-4 font-display bg-bg-clock bg-cover h-screen w-full">
      <Clock cityKey={"stockholm"} />
      <Clock cityKey={"london"} />
      <Clock cityKey={"newYork"} />
      <Clock cityKey={"sydney"} />
    </div>
  );
}
