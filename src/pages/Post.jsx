import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function formatDate(input) {
    const date = new Date(input);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
}

function Post({match}) {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://blog.kustomcabs.com/wp-json/wp/v2/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.log(error));
    });

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            {post._embedded && post._embedded['wp:featuredmedia'] &&
                <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
            }
            <section className="bg-gray-lighter p-4 w-full sticky top-[75px] md:top-[100px] left-[100px] z-30">
                <div className="container-2xl">
                    <h1 className="font-serif text-3xl pl-2 pb-1 border-l-4 border-gold leading-none">{post.title.rendered}</h1></div>
            </section>
            <div className="container mb-8">
                <div className="post-meta"><div className="post-date text-neutral-400 pb-2 pt-2">{formatDate(post.date)}</div></div>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
            </div>

        </div>
    );
}

export default Post;
