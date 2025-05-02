import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import MainView from './pages/main-view';
import PersonalCenter from './pages/personal-center';
import PostNotes from './pages/post-notes';
import NoteDetail from './pages/note-detail';
import Auth from './pages/auth';
import Login from './pages/auth/components/login';
import Register from './pages/auth/components/register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="personal-center" element={<PersonalCenter />} />
        <Route path="post-notes" element={<PostNotes />} />
        <Route path="note-detail" element={<NoteDetail />} />
        <Route element={<Auth />}>
          <Route index path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
