import Link from "next/link";

export default function INeedSleepTranscriptPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">

      <div className="max-w-3xl mx-auto px-8 py-20">

        <Link
          href="/music/i-need-sleep"
          className="text-zinc-400 hover:text-white transition"
        >
          ← Back to I Need Sleep
        </Link>

        <div className="mt-12 mb-16">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Transcript
          </p>

          <h1 className="text-6xl font-extrabold leading-none mb-6">
            I NEED SLEEP
          </h1>

          <p className="text-zinc-400">
            Written & Performed by Sohon Roy
          </p>

        </div>

        <article className="space-y-8 text-xl leading-relaxed text-zinc-300">

          <p>
            I know we've only just met,<br />
            and I don't mean to move too fast,
          </p>

          <p>
            but I couldn't sleep last night<br />
            because I don't know your middle name,<br />
            or how you take your coffee,
          </p>

          <p>
            and for some reason<br />
            there is nothing in the world<br />
            that I would like to know more.
          </p>

          <p>
            Except maybe<br />
            how your hair looks<br />
            when it's messy in the morning,
          </p>

          <p>
            or what makes you laugh until you cry,
          </p>

          <p>
            what makes you laugh<br />
            when you're crying.
          </p>

          <p>
            Either.<br />
            Or both.<br />
            Or all.
          </p>

          <p>
            Those facts would be fine.
          </p>

          <p>
            And I know we've only just met,<br />
            and I don't mean to move too fast,
          </p>

          <p>
            but I couldn't focus this morning<br />
            because I need to know<br />
            your preference on takeout food,
          </p>

          <p>
            and the dreams<br />
            you would never say out loud,
          </p>

          <p>
            but secretly wish<br />
            to come true.
          </p>

          <p>
            And if I were to buy you flowers,
          </p>

          <p>
            would you want them<br />
            to be blue?
          </p>

          <p>
            And I know we've only just met,<br />
            and I don't mean to move too fast,
          </p>

          <p>
            but suddenly<br />
            a voice is in my head
          </p>

          <p>
            playing on repeat.
          </p>

          <p>
            And I'll never say any of this.
          </p>

          <p>
            And I should probably<br />
            get some sleep.
          </p>

          <p className="text-white text-2xl pt-8">
            It's just that suddenly
          </p>

          <p className="text-white text-2xl">
            everything that's significant to you
          </p>

          <p className="text-white text-2xl">
            is significant to me.
          </p>

        </article>

      </div>

    </main>
  );
}
