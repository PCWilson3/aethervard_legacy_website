import reviews from "../local-json/book_1_reviews.json"

export default function Home() {

    return (
        <div>
            <h1>The Legend Awakens!<br/></h1>
            <img src={require("../Images/book_1_front.png")} width="300"></img>
            <h2>Discover what has fans raving about this new fantasy hit!</h2>
            <div className="Reviews">
                <h2>Reviews</h2>
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
    )
    
}

function Review ({name, rating, title, review}) {
    return (
        <div>
            <p>{name}</p>
            <p>{rating}</p>
            <p>{title}</p>
            <p>{review}</p>
        </div>
    )
}