import { Comments } from "@/components/Comments";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <p className="p-2">I&apos;m JBin, I&apos;m an IT freshman. I&apos;m 21, that is all - goodbye.</p>
      <Marquee text="Peach mango pie is the best dessert ever." />
      <Comments />
    </>
  );
}
