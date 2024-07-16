import { atom } from 'jotai';

const INITIAL_POST_ID = 1;
const EMPTY_POST_DATA = {
  title: '',
  url: '',
  text: '',
};

export interface PostType {
  id: number;
  title: string;
  url: string;
  text: string;
}

export const fetchPost = async (id = INITIAL_POST_ID) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const data = await response.json();
  return data;
};

export const postId = atom(INITIAL_POST_ID);
export const postCache = atom({});

export const postData = atom(
  async (get) => {
    const id = get(postId);
    const cache: any = get(postCache);

    if (cache[id]) {
      return cache[id];
    }

    // to cache fetch, use jotai-cache
    const postFetched = await fetchPost(id);
    if (postFetched) {
      return postFetched;
    }

    return cache[id] || EMPTY_POST_DATA;
  },
  (_, set, post: PostType) => {
    // only for hydrated data for now
    set(postCache, (cache) => ({
      ...cache,
      [post.id]: post,
    }));
  }
);
