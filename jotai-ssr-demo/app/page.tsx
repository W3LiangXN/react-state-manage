import Link from 'next/link';
import Post from '../components/Post';
import { fetchPost } from '../store';

export default async function IndexPage() {
  const initialPost = await fetchPost();

  return (
    <>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <h1>Index</h1>
      <article>
        <Post initialPost={initialPost} />
      </article>
    </>
  );
}
