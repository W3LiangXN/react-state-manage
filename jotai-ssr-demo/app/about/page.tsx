import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <nav>
        <Link href="/">Index</Link>
      </nav>
      <h1>About</h1>
      <p>Jotai demo with Next.js App Router</p>
    </div>
  );
}
