import React, { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      async function loadPosts() {
          const response = await fetch('http://localhost:80/wp-json/wp/v2/posts');
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
          const posts = await response.json();
          setPosts(posts);
      }
      loadPosts();
 }, [])
return (
  <div>
    {posts.map((post, index) => (
    <div>
      <div>
        <div>{post.title.rendered} </div>
        <div>{post.content.rendered} </div>
      </div>
    </div>
   ))}
  </div>
);
}
