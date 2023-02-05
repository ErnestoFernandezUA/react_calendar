import { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetState, selectPosts } from '../../features/Posts/postsSlice';

import './PostPage.scss';

export const PostPage: FunctionComponent = () => {
  const { id } = useParams();

  // eslint-disable-next-line no-console
  console.log(id);

  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  dispatch(resetState());

  const post = posts.find(p => String(p.id) === String(id));

  return (
    <div
      className="PostPage"
    >
      <Link
        to="/"
        className="PostPage__Link"
      >
        Back
      </Link>

      {post ? (
        <div>
          <h1>{`PostPage: ${post.title}`}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <>
          post doesn&nbsp;t exist
        </>
      )}
    </div>
  );
};
