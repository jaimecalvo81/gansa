import React, { createContext, Component } from 'react';
import Store from './Store';
import PostsContainer from './containers/PostsContainer';
class App extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <Store>
          <PostsContainer />
        </Store>
      </div>
    );
  }
}

export default App;