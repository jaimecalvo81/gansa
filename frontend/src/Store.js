import React, { createContext, Component } from 'react';

const { Provider, Consumer } = createContext();

class Store extends Component {
  state = {
    posts: [],
  };
  loadPosts = () => {
    fetch('/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  };
  render() {
    const {
      state: { posts },
      props: { children },
      loadPosts,
    } = this;
    return <Provider value={{ posts, loadPosts }}>{children}</Provider>;
  }
}

export default Store;