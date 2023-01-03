import './Home.css'
import reviews from "../local-json/book_1_reviews.json"

export default function Home() {
    return (
        <div>
            <h1>The Legend Awakens!<br/></h1>
            <img src={require("../Images/book_1_front.png")} width="300"></img>
            <h2>Discover what has fans raving about this new fantasy hit!</h2>
            <div className="Reviews">
                <div className="reviews-container">
                {
                    reviews && reviews.map(({name, rating, title, review}) => (
                        <Review
                            name={name}
                            rating={rating}
                            title={title}
                            review={review}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

function Review ({name, rating, title, review}) {
    return (
        <div className="review">
            <p><strong>{name}</strong></p>
            <p><strong>Rating: {rating}/5</strong></p>
            <p><strong>{title}</strong></p>
            <p>{review}</p>
        </div>
    )
}