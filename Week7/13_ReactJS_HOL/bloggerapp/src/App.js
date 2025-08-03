import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('book');
  const [showCourse, setShowCourse] = useState(true);

  // 1. if/else conditional rendering
  let component;
  if (view === 'book') {
    component = <BookDetails />;
  } else if (view === 'blog') {
    component = <BlogDetails />;
  }

  return (
    <div className="App">
      <h1>📚 Blogger App</h1>

      <div>
        <button onClick={() => setView('book')}>Show Book</button>
        <button onClick={() => setView('blog')}>Show Blog</button>
        <button onClick={() => setShowCourse(!showCourse)}>
          {showCourse ? 'Hide' : 'Show'} Course
        </button>
      </div>

      <hr />

      {/* 2. element variable */}
      {component}

      {/* 3. ternary operator */}
      <p>
        {view === 'book'
          ? 'You are viewing Book Details.'
          : 'You are viewing Blog Details.'}
      </p>

      {/* 4. short-circuit && rendering */}
      {showCourse && <CourseDetails />}
    </div>
  );
}

export default App;
