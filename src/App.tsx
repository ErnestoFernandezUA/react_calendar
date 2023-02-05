import { createHashRouter, Outlet } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { PostPage } from './pages/PostPage/PostPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App__Header">
        <h1>Calendar</h1>
      </header>

      <main className="App__Container">
        <Outlet />
      </main>
    </div>
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
