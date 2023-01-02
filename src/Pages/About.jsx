import './About.css'

export default function About() {
    return (
        <>
            <h1>About the Author</h1>
            <img src={require("../Images/author_image.JPG")} width="300"></img>
            <div className='body'>
                <p>Parker C. Wilson is a creative dreamer with a love for meaningful stories. While pursuing his career as an author, he develops software to help people find inner strength and financial wellness. His writing is fueled by his love for God, his family, and the people who have supported him in countless ways.
                </p>
                <p>For as long as he can remember, Parker has felt an amazing power from the art of storytelling. The magic of books has given him adventures that taught him to face his fears and to live life to the fullest. This has led him to embark on a new adventure: releasing his new series known as The Aethervard Legacy, a story filled with action, fantasy, and an invitation to discover the powers of enduring faith and redemptive love.
                </p>
            </div>
        </>
    )
}