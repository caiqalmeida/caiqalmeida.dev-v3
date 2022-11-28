import TimelineItem from "./TimelineItem";
import careerData from "../data/timeline";

export function Timeline() {
  return (
    <div className="flex flex-col relative my-10 after:bg-medium-purple after:content-none after:absolute after:left-0 after:w-1 h-full">
      {careerData.map((data, index) => (
        <TimelineItem data={data} key={index} />
      ))}
    </div>
  );
}
