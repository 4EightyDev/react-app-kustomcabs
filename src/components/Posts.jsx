import React, { Component } from 'react';
import axios from 'axios';

export class Posts extends Component {
     state = {
          posts: [],
          isLoaded: false,
     };

     componentDidMount() {
          axios.get('https://blog.kustomcabs.com/wp-json/wp/v2/posts/')
               .then((res) =>
                    this.setState({
                         posts: res.data,
                         isLoaded: true,
                    })
               )
               .catch((err) => console.log(err));
     }

     render() {
          const { posts, isLoaded } = this.state;
          return (
               <>
                    {posts.map((post) => (
                         <>
                              {post.title.rendered}
                              {post.content.rendered}
                         </>
                    ))}
               </>
          );
     }
}
export default Posts;
