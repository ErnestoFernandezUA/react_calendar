import { createHashRouter, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { PostPage } from './pages/PostPage/PostPage';
import { Controls } from './components/Controls';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  `;

const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1rem;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>Calendar</h1>
        <Controls />
      </Header>

      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    id: 'root',
    children: [
      {
        path: '/',
        element: <HomePage />,
        id: 'homepage',
        errorElement: <>Error on Homepage</>,
      },
      {
        path: '/post/:id',
        element: <PostPage />,
        errorElement: <>Error on PostPage</>,
      },
    ],
  },
]);
