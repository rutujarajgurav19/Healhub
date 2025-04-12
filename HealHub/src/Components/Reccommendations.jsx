import React from 'react';
import './Reccommendations.css';

const Recommendations = () => {
    const songs = [
        { title: 'Weightless', artist: 'Marconi Union', audio: '/src/assets/Audio/weightless-soundscape-for-sleep-315426.mp3' },
        { title: 'Beautiful', artist: 'Christina Aguilera', audio: '/src/assets/Audio/Christina_Aguilera_-_Fighter_CeeNaija.com_.mp3' },
        { title: 'Born This Way', artist: 'Lady Gaga', audio: '/src/assets/Audio/Lady_Gaga_-_Born_This_Way.mp3' },
        { title: 'Don\'t Stop Believin\'', artist: 'Journey', audio: '/src/assets/Audio/dont-stop-believin.mp3' },
        { title: 'Kun Faya Kun', artist: 'A.R. Rahman, Javed Ali, Mohit Chauhan', audio: '/src/assets/Audio/Kun Faya Kun (PenduJatt.Com.Se).mp3' },
        { title: 'He Will Hold Me Fast', artist: 'Keith & Kristyn Getty', audio: '/src/assets/Audio/Matt_Merker_-_He_Will_Hold_Me_Fast_CeeNaija.com_.mp3' },
        { title: 'Ae Zindagi Gale Laga Le', artist: 'Suresh Wadkar ', audio: '/src/assets/Audio/128-Aye Zindagi Gale Lagaa Le - Sadma 128 Kbps.mp3' },
        { title: 'I\'m Alive', artist: 'Celine Dion', audio: '/src/assets/Audio/Celine_Dion_-_Im_Alive_CeeNaija.com_.mp3' },
        { title: 'I Look To You', artist: 'Whitney Houston”', audio: '/src/assets/Audio/Whitney_Houston_-_I_Look_To_You_CeeNaija.com_.mp3' }
    

    
    ];

    const books = [
        { 
            title: 'Chatter: The Voice in Our Head, Why It Matters, and How to Harness It', 
            author: 'Ethan Kross', 
            image: '/src/assets/chatter.jpg',
            link: 'https://achology.com/books/chatter-the-voice-in-our-head/?srsltid=AfmBOooqngd5JaVBFF0W_7OXoEuB0A55pIAhrFaCPLO7beWMfBYd9m1I' 
        },
        { title: 'Wherever You Go, There You Are: Mindfulness Meditation in Everyday Life', 
            author: 'Jon Kabat-Zinn', 
            image: '/src/assets/wherever-you-go.jpg' ,
            link:'https://www.goodreads.com/en/book/show/14096.Wherever_You_Go_There_You_Are'
        },
        { title: 'Little House in the Big Woods', 
            author: 'Laura Ingalls Wilder', 
            image: '/src/assets/little-house.jpg',
            link:'https://www.goodreads.com/book/show/8337.Little_House_in_the_Big_Woods'
         },
        { title: 'When You Are Engulfed In Flames',
             author: 'David Sedaris', 
             image: '/src/assets/when-you-are-engulfed.jpg',
             link:'https://www.goodreads.com/book/show/1044355.When_You_Are_Engulfed_in_Flames'},
        { title: 'Gilead', 
            author: 'Marilynne Robinson', 
            image: '/src/assets/gilead.jpg',
            link:'https://www.amazon.in/Gilead-Novel-Marilynne-Robinson/dp/1250784018'
        },
        { title: 'The PowThe Comfort Book by Matt Haig ',
            author: 'Matt Haig',
            image: '/src/assets/the-comfort-book.jpg',
            link:'https://www.penguin.co.in/book/the-comfort-book-the-instant-number-one-sunday-times-bestseller-special-hardcover-edition/'
        },
    ];

    return (
        <div className="recommendations-container">
            <h1 className="recommendation-title">Recommendations</h1>
            <section>
                <h2 className="recommendation-title">Relaxing Songs</h2>
                <ul>
                    {songs.map((song, index) => (
                        <div className="recommendation-card" key={index}>
                            <li>
                                <strong>{song.title}</strong> by {song.artist}
                                <br />
                                <audio controls>
                                    <source src={song.audio} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </li>
                        </div>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="recommendation-title">Books</h2>
                <ul>
                    {books.map((book, index) => (
                        <div className="recommendation-card" key={index}>
                            <li>
                                <a href={book.link || '#'} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="book-image"
                                    />
                                </a>
                                <strong>{book.title}</strong> by {book.author}
                            </li>
                        </div>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Recommendations;