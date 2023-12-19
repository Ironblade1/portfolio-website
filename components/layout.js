import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

export const siteTitle = "Rohit's Portfolio";

export default function Layout({ pageTitle, children }) {
  const title = `Rohit - ${pageTitle}`;
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/it-logo.gif" />
        <meta
          name="description"
          content=" I'm MERN stack developer and passionate programmer with a deep enthusiasm for new technologies. I am currently pursuing a Bachelor of Technology degree from the esteemed IIITDM Jabalpur."
        />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="#" />
        <meta property="og:site_name" content="Rohit's Portfolio" />
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="Portfolio" />
        <title>{title}</title>
      </Head>
      <div className={styles.header}>
        <h1>Hi👋, I'm Rohit!</h1>
      </div>
      <div className={styles.navbar} id="navbar">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">My Projects</Link>
        <Link href="/skills">My Skills</Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc4Qj_TgzYpOIZBqIgUHhVdIzetkZ6E0DZRasAVbTJbxppFBw/viewform">Resume</Link>
      </div>
      <main>{children}</main>
      <Analytics />
    </div>
  );
}
