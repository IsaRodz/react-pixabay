import React from 'react'

const Image = props => {

    const { largeImageURL, likes, tags, views } = props.image;

    return (
        <a href={largeImageURL}
            target="_blank"
            className="image-holder"
            rel="noopener noreferrer">
            <img src={largeImageURL} alt={tags} />
            <div className="content">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z" />
                        <path d="M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z" />
                    </svg>
                    {views}
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z" />
                    </svg>
                    {likes}
                </p>
            </div>
        </a>
    );

}

export default Image;