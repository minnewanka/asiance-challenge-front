import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { getAllPost } from '../src/services/postService';
import Posts from './features/posts/PostList';
import About from './features/about/About';
import Footer from './components/footer/Footer';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const results = await getAllPost();
      setPosts(results);
    })();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="posts" />
          <Route
            exact
            path="/posts"
            component={() => <Posts posts={posts} />}
          />
          <Route exact path="/about" component={About} />
          <Redirect to="posts" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
