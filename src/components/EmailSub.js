"use client";
import { useState } from "react";
import styles from "../app/page.module.css";

export default function EmailSub() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/saveEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("We're excited to have you on board. Stay tuned!");
        setEmail("");
        setError("");
      } else {
        throw new Error(data.error || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setError("Oops! Something went wrong. We couldn't subscribe you at this time. Please try again later.");
    }
  };

  return (
    <>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterCopy}>
          <h2>Get on the waitlist</h2>
          <div className={styles.newsletterAction}>
            <div className={styles.subscribeContainer}>
              {!message && !error && (
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                  <label>
                    <input
                      className={styles.news}
                      type="email"
                      value={email}
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <button className={styles.subButton} type="submit">
                    Subscribe
                  </button>
                </form>
              )}
              {message && <p className={styles.successMessage}>{message}</p>}
              {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
