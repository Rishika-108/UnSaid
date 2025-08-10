import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header">
        <h1>Unsent</h1>
        <a href="/write.html" className="btn">Write Your Letter</a>
      </header>

      {/* Tagline */}
      <section className="tagline">
        <h2>“For the words you’ll never say out loud.”</h2>
      </section>

      {/* Story */}
      <section className="story">
        <p>
          Everyone has something unsaid — a thought, a thank you, an apology.
          <strong> Unsent </strong>
          is a place to let those words out, without fear or judgment. Whether it's something from years ago or yesterday, your voice deserves a space, even if it's anonymous.
        </p>
        <p>
          This project was created to help people feel less alone in their emotions. Because sometimes, writing what you can’t say out loud is the first step to healing.
        </p>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div>
            <div className="emoji">✍️</div>
            <p><strong>Write anonymously</strong></p>
          </div>
          <div>
            <div className="emoji">📬</div>
            <p><strong>We review & publish</strong></p>
          </div>
          <div>
            <div className="emoji">🤝</div>
            <p><strong>Someone feels less alone</strong></p>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="privacy-note">
        <p>No names. No tracking. No logins. Just a space for your words.</p>
      </section>

      {/* CTA */}
      <div className="cta">
        <a href="/write.html" className="btn-lg">Write Your Letter</a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Share Unsent with someone who needs it. 💌</p>
      </footer>
    </div>
  );
};

export default About;
