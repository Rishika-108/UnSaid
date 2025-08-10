import React, { useState } from "react";
import "./Home.css";



const CATEGORIES = [
  "Love",
  "Regret",
  "Thanks",
  "Gratitude",
  "Apology",
  "Forgiveness",
  "Hope",
  "Missing Someone",
  "Memories",
  "Confession",
  "Other",
];

const LETTERS = {
  Love: [
    `I never found the courage to say this,\n
but your presence felt like sunlight I was afraid to step into.\n
Every laugh, every glance,\n
was a secret I kept pressed between the pages of my heart.\n
I stayed silent — not for lack of feeling,\n
but for fear of losing the quiet magic between us.\n
If I could go back, I’d trade my silence for one truth: I loved you. I still do.`,

    `You walked into my life like spring after a long winter.\n
And suddenly, everything bloomed.\n
The sky looked softer, the air warmer,\n
and my heart learned a rhythm it never knew before.\n
I never told you, but you were my favorite season.\n
Even now, every petal reminds me of you.\n
I hope if there was a way to get you back.`
  ],
  Regret: [
    `I watched you walk away and told myself it was for the best.\n
But nights are longer when the words stay unsaid.\n
I could have chased you, could have fought for us.\n
Instead, I let the silence win.\n
Now the echoes of what-ifs haunt me more than your absence.`,

    `I wish I had been braver.\n
Brave enough to stay when it was easier to run.\n
Brave enough to say what my heart screamed in the dark.\n
If I could rewrite that day,\n
the ending would be different — you’d still be here.`
  ],
  Thanks: [
    `Thank you for being the light in my storm.\n
For holding my hand when my voice shook.\n
For seeing the parts of me I thought were unlovable,\n
and loving them anyway.\n
The world is a little less frightening because you exist.`,

    `You may never know the depth of what you gave me.\n
Not in gifts or words, but in the way you made me feel safe.\n
You taught me that love could be quiet,\n
steady, and still move mountains.\n
For that, I will always be grateful.`
  ],
  Gratitude: [
    `You didn’t just help me; you changed me.\n
Piece by piece, you taught me kindness.\n
You showed me how love could be both gentle and strong.\n
The echoes of your care still follow me,\n
reminding me that I am never truly alone.`,

    `I will carry your kindness for the rest of my life.\n
You gave without asking,\n
listened without judging,\n
and loved without conditions.\n
For that, I will always be indebted to you.\n
Hope I will meet you again and this time I will speak what is buried.`
  ],
  Apology: [
    `I am sorry for the silence when you needed my voice.\n
Sorry for every moment I looked away instead of reaching out.\n
I let fear write my actions,\n
and it left us with unfinished pages.\n
If you ever let me, I’d rewrite them all.`,

    `I know “sorry” doesn’t rebuild bridges,\n
but it’s the only stone I can place right now.\n
I was wrong.\n
And I hope one day you’ll see my heart\n
and know it never meant to hurt you.`
  ],
  Forgiveness: [
    `I forgive you — not because it was easy,\n
but because my heart refused to carry the weight.\n
I release the anger, the ache, the endless replay.\n
You are free from my bitterness.\n
And in freeing you, I free myself.`,

    `Forgiveness is not forgetting.\n
It is remembering without the sting.\n
It is choosing peace over punishment.\n
So I let go of what broke me,\n
and I wish you well, truly.`
  ],
  Hope: [
    `I know it’s dark now,\n
but every dawn begins in shadows.\n
One day, this ache will fade into something gentler.\n
And you will look back and realize —\n
you survived.\n
That’s all hope is: a whisper that says “keep going.”`,

    `The future is unwritten,\n
and that’s the beauty of it.\n
Tomorrow might bring the answer you’ve been waiting for.\n
Until then, hold on.\n
The light is closer than you think.`
  ],
  "Missing Someone": [
    `I miss you like the moon misses the sun during an eclipse.\n
It’s not darkness, just absence.\n
A waiting, a longing for warmth again.\n
The sky feels emptier without you,\n
and I count the days until your light returns.`,

    `Every place I go has your shadow.\n
Every song carries your voice.\n
Even silence feels like you.\n
It’s strange — I lost you once,\n
but somehow I keep losing you every day.`
  ],
  Memories: [
    `The smell of rain still takes me back to that day.\n
We were laughing, running through puddles,\n
and for a moment the world felt perfect.\n
I didn’t know then it would be one of the last.\n
Now, every storm feels like your touch.`,

    `We laughed so loudly the neighbors learned our names.\n
The air was thick with joy and the sound of belonging.\n
If I close my eyes, I can still hear it.\n
Those moments are my treasure chest —\n
untouched by time, safe from forgetting.`
  ],
  Confession: [
    `I liked you more than I ever admitted.\n
It was easier to hide behind friendship\n
than risk losing you to the truth.\n
But every word I didn’t say\n
is still here, sitting heavy in my chest.`,

    `You were my secret.\n
The best one I ever kept.\n
And now that you’re gone,\n
I wonder if telling you would have changed anything.\n
Maybe… maybe not.`
  ],
  Other: [
    `Sometimes, words aren’t enough — but here they are anyway.\n
Messy, imperfect, but real.\n
I hope they find you when you need them.\n
And I hope they remind you\n
that someone, somewhere, cares.`,

    `Not every story has a name or a neat ending.\n
Some are just feelings that spill over.\n
This is one of them.\n
A note without an address,\n
a heart without a map.`
  ],
};


const Home = () => {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <main className="unsaid-home">
      {/* visual overlay + container */}
      <div className="unsaid-overlay">
        <header className="unsaid-hero" aria-hidden>
          <h1 className="unsaid-title">UnSaid</h1>
          <p className="unsaid-tag">Your safe space to write, share, and connect — anonymously.</p>
        </header>

        <nav className="category-row" aria-label="Browse categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`cat-pill ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </nav>

        <section className="cards-wrap" aria-live="polite">
          { (LETTERS[active] || []).slice(0, 3).map((text, i) => (
            <article key={i} className="letter-card" tabIndex={0}>
              <div className="card-cat">{active}</div>
              <p className="card-text">{text}</p>
              <div className="card-footer">
                <button
                  className="read-btn"
                  onClick={() => window.location.href = "/letter"} /* Replace with router if using one */
                >
                  Respond
                </button>
              </div>
            </article>
          ))}

          {/* fallback if no letters */}
          {(!LETTERS[active] || LETTERS[active].length === 0) && (
            <div className="no-letters">
              <p>No letters yet in <strong>{active}</strong>. Be the first to share. ✉️</p>
            </div>
          )}
        </section>

        <div className="cta-block">
          <p>So what are you waiting for?<br />Share your story in a click 💌</p>
          <button className="write-btn" onClick={() => window.location.href = "/letter"}>
            ✏️ Write a Letter
          </button>
        </div>
         <center><button className="write-btn" onClick={() => window.location.href = "/about"}>
            ✏️ About Us
          </button></center>
      </div>
    </main>
  );
};

export default Home;
