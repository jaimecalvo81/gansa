import React, { createContext, Component } from 'react';
import PostsView from '../components/PostsView';

const { Provider, Consumer } = createContext();

const PostsContainer = () => (
  <Consumer>{({ posts }) => <PostsView posts={posts} />}</Consumer>
);

export default PostsContainer;