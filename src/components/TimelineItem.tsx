import styles from "../styles/timeline-item.module.css";
import cn from "classnames";

export default function BlogCard({ data }: any) {
  return (
    <div className="flex my-3 w-full justify-start self-end pr-0 pl-7 first:mt-0 last:mb-0">
      <div
        className={cn(
          styles.timeline__item__content,
          "bg-medium-purple rounded-md flex flex-col p-4 text-left items-start max-w-[90%] relative w-[500px]"
        )}
      >
        <span className="background-gradient rounded-[50%] absolute top-[calc(50%-10px)] w-5 h-5 z-10 right-auto -left-10 after:content-none" />

        <header className=" w-full flex justify-between items-center mb-1">
          <a
            target="_blank"
            href={data.companySite}
            className="text-lg text-white font-bold"
          >
            {data.company}
          </a>
          <span className="px-[2px] py-[2px] background-gradient rounded-[50px]">
            <time className="px-2 py-1 text-xs uppercase bg-medium-purple rounded-[50px]">
              {data.date}
            </time>
          </span>
        </header>

        <p
          className="text-gradient text-xs tracking-wide uppercase mb-4
        "
        >
          {data.jobTitle}
        </p>

        <p className="text-sm">{data.stack}</p>
      </div>
    </div>
  );
}
