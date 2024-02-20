// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import SearchBar from './components/Search/SearchBar';
// import CommentsList from './components/Comments/CommentsList';
import VideoThumbnail from './components/Video/VideoThumbnail';
import VideoPlayer from './components/Video/VideoPlayer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/search" element={<SearchBar />} />
            {/* <Route path="/comments" element={<CommentsList />} /> */}
            <Route path="/video" element={<VideoThumbnail />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
