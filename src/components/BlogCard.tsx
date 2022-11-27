type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export function BlogCard({
  title,
  description,
  date,
  readingTime,
}: BlogCardProps) {
  return (
    <article className="bg-medium-purple p-6 mb-8 rounded-b transition-transform cursor-pointer hover:scale-105">
      <p className="mb-3.5 flex justify-between text-gradient text-xs uppercase font-medium">
        <time dateTime={date}>{date}</time>
        <span>{readingTime}</span>
      </p>
      <h2 className="text-xl text-white font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </article>
  );
}
