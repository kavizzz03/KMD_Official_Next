export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`marquee-track overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center whitespace-nowrap px-6 font-display text-lg italic-accent sm:text-xl"
          >
            {item}
            <span className="ml-6 h-1.5 w-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
