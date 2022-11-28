import styles from "../styles/timeline-item.module.css";
import cn from "classnames";

export default function BlogCard({ data }: any) {
  return (
    <div className="flex my-3 w-full justify-start self-end pr-0 pl-7">
      <div
        className={cn(
          styles.timeline__item__content,
          "bg-medium-purple rounded-md flex flex-col p-4 text-left items-start max-w-[90%] relative w-[500px]"
        )}
      >
        <span className="background-gradient rounded-[50%] absolute top-[calc(50%-10px)] w-5 h-5 z-10 right-auto -left-10 after:content-none" />

        <header className=" w-full flex justify-between items-center mb-2">
          <p className="text-lg text-white font-bold">{data.jobTitle}</p>
          <time className="text-xs">{data.date}</time>
        </header>

        <a
          target="_blank"
          href={data.companySite}
          className="text-sm text-white font-light underline mb-5"
        >
          {data.company}
        </a>

        <p className="text-gradient text-sm">{data.stack}</p>
      </div>
    </div>
  );
}
