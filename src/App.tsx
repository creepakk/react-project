import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router';
import { IndexPage } from './pages/IndexPage';
import { UsersPage } from './pages/UsersPage';
import { PostsPage } from './pages/PostsPage';
import { UsersList } from './components/UsersList';
import { User } from './components/User';
import { Layout } from './components/Layout';
import { PostsList } from './components/PostsList';
import { Post } from './components/Post';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<IndexPage />} />

          <Route path='/users' element={<UsersPage />}>
            <Route index element={<UsersList />} />
            <Route path=':id' element={<User />} />
          </Route>

          <Route path='/posts' element={<PostsPage />} >
            <Route index element={<PostsList />} />
            <Route path=':id' element={<Post />} />
          </Route>

          <Route path="*" element={<h2>404: Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
