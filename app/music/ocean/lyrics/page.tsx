import Link from "next/link";

export default function OceanLyricsPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">

      <div className="max-w-3xl mx-auto px-8 py-20">

        <Link
          href="/music/ocean"
          className="text-zinc-400 hover:text-white transition"
        >
          ← Back to Ocean
        </Link>

        <div className="mt-12 mb-16">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Lyrics
          </p>

          <h1 className="text-6xl font-extrabold leading-none mb-6">
            OCEAN
          </h1>

          <p className="text-zinc-400">
            Ghost Lyricist
          </p>

        </div>

        <article className="space-y-8 text-xl leading-relaxed text-zinc-300">

          {/* INTRO */}

          <p>
           Your life is the ocean <br />
And your heart is a wave<br />
Like a dog in the sun<br />
I found my peace in your storm<br />
<br />
As I sail for days<br />
I keep drowning away<br />
Would my sailors forgive me<br />
For feeling this way?<br />
<br />
You said, "Hey, Mister!<br />
Do follow through<br />
Let's go and build a house<br />
Big enough to fit us two<br />
We'll weave a castle there<br />
The castle of our dreams<br />
My knight in dining armour<br />
And I your blanket queen"<br />
Girl, you're just like that pretty house<br />
With wooden beams, you're facing south<br />
You are my shelter, you are my little home<br />
Your walls are painted pink and green<br />
With a hint of tangerine<br />
I see a crack in the window<br />
I'm waking up to hold you<br />
Your blemishes, all your tragedies are mine<br />
'Cause your life is the ocean<br />
And your heart is a wave<br />
Like a dog in the sun<br />
I found my peace in your storm<br />
As I sail for days<br />
I keep drowning away<br />
Would my sailors forgive me<br />
For feeling this way?<br />
As days turn into years<br />
Got more than I deserved<br />
There's so much left to learn<br />
And I hope you stay around<br />
Through all the ups and downs<br />
'Cause your life is the ocean<br />
And your heart is a wave<br />
Like a dog in the sun<br />
I found my peace in your storm<br />
As I sail for days<br />
I keep drowning away<br />
Would my sailors forgive me<br />
For feeling this way?<br />
          </p>
          <p>
As I flip through your pages<br />
As sweet as crème brûlée<br />
These memories we've made<br />
Now let me take your hand<br />
And offer a lifetime<br />
'Cause, darling, all these years have gone<br />
Just as the tree we sat upon<br />
So afraid to fall, the way we laughed<br />
We made it through<br />
My sailors, they have come 'round<br />
Their ballads bring a different sound<br />
I guess they all have drowned in love with you<br />
The way I have too<br />
'Cause your life is the ocean<br />
And your heart the biggest wave<br />
Like a dog in the sun<br />
I found my peace in your storm<br />
As I sail for days<br />
I keep on drowning, drowning away<br />
Would the gods forgive me<br />
For feeling this way?<br />
          </p>

        </article>

      </div>

    </main>
  );
}