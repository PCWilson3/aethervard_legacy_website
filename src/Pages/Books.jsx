import './Books.css';
import myBooks from "../local-json/books.json"
import React, { useState } from "react"


export default function Books() {
    return (
        <>
            <h1>Books</h1>
            {
                myBooks && myBooks.map(({title, rating, synopsis, attributes}) => (
                    <BookComponent
                        image={require("../Images/book_1_front.png")}
                        bookTitle={title} 
                        rating={rating}
                        synopsis={synopsis}
                        attributes={attributes}
                    />
                ))
            }
        </>
    )
}

function BookComponent({image, bookTitle, rating, synopsis, attributes}) {
    
    const ReadMore = ({children}) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true)
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore)
        }

        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...Read more" : "...Show less"}
                </span>
            </p>
        )
    }


    return (
        <>
            <div className="bookContainer">
                <div className="leftCol">
                    <img src={image} width="200"/>
                </div>
                <div className="centerCol">
                    <ul>
                        <li>
                            <h2>{bookTitle}</h2>
                        </li>

                        { rating? (
                            <li>
                                <h3>Rating: {rating}/5</h3>
                            </li>
                        ) : (
                            <li>
                                <h3>No Rating Yet</h3>
                            </li>
                        )}

                        <li><a target="_blank" href="https://www.amazon.com/Excaliburs-Pendragon-Book-Aethervard-Legacy/dp/B0BKCQ3QTP/ref=sr_1_1?crid=3GJHKHCMARA9C&keywords=excalibur%27s+pendragon&qid=1672339987&sprefix=%2Caps%2C126&sr=8-1"><h4>Order Here</h4></a></li>

                        <li><div className="bookSynopsis">
                            <ReadMore>{synopsis}</ReadMore>
                        </div>
                            
                        </li>
                        <li><BookInfo attributes={attributes}/></li>
                    </ul>
                </div>
                <div className="rightCol">
                </div>
            </div>
        </>
    )

}

function BookInfo({attributes}) {
    return (
        <div className="bookInfo">
            <h3>Book Details</h3>
            <ul>
                {
                    attributes.map((attribute) => (
                        <li className="attribute">
                            <div>
                                <p>{attribute.name}</p>
                                <p style={{fontWeight:'bold'}}>{attribute.value}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}