export function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y">
      <span className="inline-block animate-marquee motion-reduce:animate-none">{text}</span>
    </div>
  );
}
