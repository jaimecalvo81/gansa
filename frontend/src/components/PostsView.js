import React, { Component } from 'react';

class PostsView extends Component {
  render() {
    const { posts } = this.props;
    return posts.length ? (
      posts.map(({ title, id, date, slug, excerpt }) => <p>{title.rendered}</p>)
    ) : (
      <div>Loading...</div>
    );
  }
}

export default PostsView;