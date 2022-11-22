type BlogCardProps = {
  title: string;
  description: string;
  date: string;
};

export function BlogCard({ title, description, date }: BlogCardProps) {
  return (
    <article className="bg-medium-purple p-6 mb-8 rounded-b transition-transform cursor-pointer hover:scale-105">
      <p className="mb-3.5">
        <time
          //TODO: transform date string in right format
          dateTime="2022-12-08"
          className="text-gradient text-xs uppercase font-medium"
        >
          {date}
        </time>
      </p>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </article>
  );
}
