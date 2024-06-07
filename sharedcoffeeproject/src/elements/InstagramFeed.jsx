import React, { useEffect, useState } from 'react';

const predefinedPosts = [
    'https://www.instagram.com/p/C71Fx1EqpoM/?utm_source=ig_embed',
    'https://www.instagram.com/p/C71Dwu5qzOX/?utm_source=ig_embed',
    'https://www.instagram.com/p/C7zGuf-Kb6Q/?utm_source=ig_embed'
];

const InstagramFeed = () => {
    const [postUrls, setPostUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchInstagramPosts() {
            try {
                // Mock fetch function to simulate API call
                const mockFetch = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(predefinedPosts);
                    }, 1000);
                });
                const data = await mockFetch;

                setPostUrls(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
                setError('Error loading posts. Please try again later.');
                setLoading(false);
            }
        }

        fetchInstagramPosts();
    }, []);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div id="instagram-feed" className="flex flex-wrap justify-center">
            {postUrls.length > 0 ? (
                postUrls.map((url, index) => (
                    <blockquote
                        key={index}
                        className="instagram-media instagram-post bg-white shadow-lg rounded-lg m-2"
                        data-instgrm-captioned=""
                        data-instgrm-permalink={url}
                        data-instgrm-version="14"
                        style={{ width: '300px' }}
                    >
                        <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full text-center">
                            <div className="p-4"></div>
                        </a>
                    </blockquote>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
}

export default InstagramFeed;
