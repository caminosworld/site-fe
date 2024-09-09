import Image from "next/image";
import styles from "./page.module.css";
import EmailSub from "@/components/EmailSub";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.header}>
          <img src="logo-samp.svg"></img>
        </div>
        <div>
          <p>
            Gone are the days of generic itineraries. With Caminos, you&apos;ll
            embark on journeys perfectly catered to your interests, preferences,
            and quirks.
          </p>
        </div>
        <div>
          <EmailSub />
        </div>
        <div className={styles.purpose}>
          <div>
            <p>🔎</p>
            <p>
              Discover the best destinations, map out your journeys, all without
              breaking the bank.
            </p>
          </div>
          <div>
            <p>🦄</p>
            <p>
              We believe that every traveler is as individual as their preferred
              brand of cereal. Let our team work their magic to curate a travel
              plan tailored to your specific vibe.
            </p>
          </div>
          <div>
            <p>🗺️</p>
            <p>
              From exotic vacations to weekend escapades, we help you make the
              most out of every travel opportunity.
            </p>
          </div>
        </div>
        <div className={styles.prepose}>
          <h2>
            Have a better vacation then <em>them</em>.
          </h2>
          <p>
            We&apos;ve got the link to local informatin, and make it dead simmple for
            you to book the best trip ever. Connect wwith us for one-on-one
            support and access to perks -- all for less then a latte.
          </p>
        </div>
        <div className={styles.howToTitle}>
          <img src="howto-title.svg"></img>
        </div>
        <div className={styles.howTo}>
          <div className={styles.steps}>
            <div>
              <img></img>
            </div>
            <div>
              <h3>1</h3>
              <p>
                Discover your travel style. Take our quiz and find out your
                travel style. Are you an adventurous pineapple or a relaxed
                banana?
              </p>
            </div>
          </div>
          <div className={styles.steps}>
            <div>
              <img></img>
            </div>
            <div>
              <h3>2</h3>
              <p>
                Based on your personality, we&apos;ll create a unique itinerary that
                fits your taste. No more generic travel plans!
              </p>
            </div>
          </div>
          <div className={styles.steps}>
            <div>
              <img></img>
            </div>
            <div>
              <h3>3</h3>
              <p>
                Pick and choose the experiences that fit your budget. Our $1.99
                base plan ensures everyone can afford a taste of adventure.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.authors}>
          <div>
            <h4>Victoria Aguirre</h4>
            <p>Founder / CEO</p>
          </div>
          <div>
            <h4>Brian Felix</h4>
            <p>Founder</p>
          </div>
        </div>
        <div>
          <EmailSub />
        </div>
      </div>
    </main>
  );
}
