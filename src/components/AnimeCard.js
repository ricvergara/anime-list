import React from 'react'

function AnimeCard({ anime }) {
    return (
        <article className="anime-card">
            <a
                href={anime.url}
                rel="noreferrer"
                target="_blank">
                <figure>
                    <img
                        src={anime.image_url}
                        alt="Anime Image" />
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard