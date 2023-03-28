import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function formatDate(input) {
    const date = new Date(input);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
}

function WordPressPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blog.kustomcabs.com/wp-json/wp/v2/posts?_embed')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error));
    }, []);

    return (

        <div className="container">
            <h1 className="mb-8"><span
                className="font-serif text-4xl block text-gold">Kustomcabs Connection</span></h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="list-post">

                        <section
                            className="bg-gray-lighter p-4 w-full sticky top-[75px] md:top-[100px] left-[100px] z-30">
                            <div className="container-2xl"><h2
                                className="font-serif text-3xl pl-2 pb-1 border-l-4 border-gold leading-none"><Link to={`/post/${post.id}`}>{post.title.rendered}</Link></h2></div>
                        </section>
                        {post._embedded && post._embedded['wp:featuredmedia'] &&
                            <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                        }

                        <div className="post-meta"><div className="post-date">{formatDate(post.date)}</div></div>
                        <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                        <div className="read-more"><Link to={`/post/${post.id}/${post.slug}`}>Read More</Link></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WordPressPosts;