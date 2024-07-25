'use client';
import { Suspense } from 'react';
import { useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { postId, postData } from '../store';

const PostId = () => {
  const [id, setId] = useAtom(postId);

  const next = () => setId((x) => x + 1);
  const prev = () => setId((x) => x - 1 || 1);

  return (
    <div>
      id: {id} {id > 1 ? <button onClick={prev}>Prev</button> : null}{' '}
      <button onClick={next}>Next</button>
    </div>
  );
};

const PostTitle = () => {

  const [data] = useAtom(postData);

  return (
    <div>
      <h1>{data.title}</h1>
      <a href={data.url}>{data.url}</a>
      <p>{data.text}</p>
    </div>
  );
};

const Post = ({ initialPost }: { initialPost: any }) => {

  // 主要是这个方法 处理水合的问题
  useHydrateAtoms([[postData, initialPost]]);

  return (
    <>
      <PostId />
      <Suspense fallback="Loading...">
        <PostTitle />
      </Suspense>
    </>
  );
};

export default Post;
