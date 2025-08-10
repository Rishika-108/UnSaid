import './Letter.css'
import React, { useState, useRef } from "react";
export default function WriteLetterPage({ onSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Other");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const textareaRef = useRef(null);

  const PROMPTS = [
    "To someone I miss…",
    "The thing I never said…",
    "If I could go back…",
    "Thank you for showing up when I needed you…",
  ];

  const handlePromptClick = (prompt) => {
    // Insert prompt at cursor position (if possible), otherwise append
    const el = textareaRef.current;
    if (!el) {
      setText((t) => (t ? `${t}\n\n${prompt}` : prompt));
      return;
    }

    const start = el.selectionStart ?? text.length;
    const end = el.selectionEnd ?? text.length;
    const before = text.slice(0, start);
    const after = text.slice(end);
    const next = `${before}${prompt}${after}`;
    setText(next);

    // Move caret after inserted prompt
    requestAnimationFrame(() => {
      const pos = start + prompt.length;
      el.focus();
      el.setSelectionRange(pos, pos);
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmed = text.trim();
    if (!trimmed) {
      setErrorMsg("Please write something before submitting.");
      return;
    }

    setStatus("submitting");

    try {
      if (typeof onSubmit === "function") {
        // allow parent to handle posting; await if it returns a promise
        await onSubmit(trimmed, category);
      } else {
        // fallback: log to console (developer can replace this)
        console.log("Anonymous letter submission:", { text: trimmed, category });
        // simulate small delay for UX
        await new Promise((r) => setTimeout(r, 500));
      }

      setStatus("success");
      setText("");
      setCategory("Other");

      // keep success message for a moment then reset to idle
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err?.message || "There was an issue submitting — please try again."
      );
      setStatus("error");
    }
  };

  return (
    <main className="write-letter-page">
      <header className="wl-header">
        <h1 className="wl-title">Write a Letter</h1>
        <p className="wl-intro">
          <strong>Your letter will remain anonymous.</strong> No names, no
          sign-ups, just your words.
        </p>
      </header>

      <form className="wl-form" onSubmit={submitForm} aria-describedby="wl-privacy-note">
        <label htmlFor="wl-textarea" className="wl-label">
          Your letter
        </label>
        <textarea
          id="wl-textarea"
          ref={textareaRef}
          className="wl-textarea"
          placeholder="Write as if you're scribbling in a private notebook…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          aria-label="Write your anonymous letter"
          aria-required="true"
        />

        <div className="wl-controls">
          <div className="wl-select-group">
            <label htmlFor="wl-category" className="wl-select-label">
              Category
            </label>
            <select
              id="wl-category"
              className="wl-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Love">Love</option>
              <option value="Regret">Regret</option>
              <option value="Thanks">Thanks</option>
              <option value="Gratitude">Gratitude</option>
              <option value="Apology">Apology</option>
              <option value="Forgiveness">Forgiveness</option>
              <option value="Hope">Hope</option>
              <option value="Missing Someone">Missing Someone</option>
              <option value="Memories">Memories</option>
              <option value="Confession">Confession</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="wl-submit-group">
            <button
              type="submit"
              className="wl-submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting…" : "Submit"}
            </button>
          </div>
        </div>

        <p id="wl-privacy-note" className="wl-privacy-note">
          <small>Submissions may be published after review.</small>
        </p>

        {errorMsg && <div className="wl-error" role="alert">{errorMsg}</div>}
        {status === "success" && (
          <div className="wl-success" role="status">
            Thank you — your anonymous letter has been received.
          </div>
        )}
      </form>

      <aside className="wl-prompts" aria-label="Optional prompt ideas">
        <h2 className="wl-prompts-title">Optional prompt ideas</h2>
        <ul className="wl-prompts-list">
          {PROMPTS.map((p) => (
            <li key={p}>
              <button
                type="button"
                className="wl-prompt-button"
                onClick={() => handlePromptClick(p)}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>

        <div className="wl-tip">
          <strong>💡 Tip:</strong> Keep the form visually calm and uncluttered —
          like writing in a private notebook.
        </div>
      </aside>
    </main>
  );
}
