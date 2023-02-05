import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectPosts } from '../../features/Posts/postsSlice';

import './HomePage.scss';

export const HomePage: FunctionComponent = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <ul style={{
        listStyle: 'none',
        textAlign: 'left',
      }}
      >
        {posts.map(post => (
          <li key={post.id}>
            <Link
              to={`post/${post.id}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                border: '1px solid grey',
                borderRadius: '10px',
                margin: '1rem',
                padding: '1rem',
                boxSizing: 'border-box',
              }}
            >
              {`${post.id}. ${post.title}: ${post.body}`}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};
