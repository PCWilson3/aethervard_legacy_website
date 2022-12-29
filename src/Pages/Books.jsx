import './Books.css';

export default function Books() {
    return (
        <>
            <h1>Books</h1>
                <BookComponent
                    image={require("../Images/book_1_front.png")}
                    bookTitle={"Excalibur's Pendragon: Book One of the Aethervard Legacy"} 
                    rating={5} 
                    
                />
        </>
    )
}

function BookComponent({image, bookTitle, rating}) {
    
    return (
        <>
            <div className="bookContainer">
                <div className="leftCol">
                    <img src={image} width="200"/>
                </div>
                <div className="centerCol">
                    <ul>
                        <li><h2>{bookTitle}</h2></li>
                        {rating? (
                            <li><h3>Rating: {rating}/5</h3></li>
                        ) : (
                            <li><h3>No Rating Yet</h3></li>
                        )}

                        <li><div class="bookSynopsis">
                            <p>
                                What empowers a legend? What turned a lowly boy into a warrior king? Who says that a new legend can't be produced in the modern day?
                                
                                How could a high school boy like Ryan Walker come to know or care about such things when his soul is broken? Even with the support of his father and friends, he lacks the fortitude to face his inner conflict, a struggle that has worn down his spirit for nearly a year. In Ryan’s eyes, the way forward is impossible.

                                But this pain doesn’t spare the troubled boy from the magic trials that await him. Somehow, he is burdened with powers too great for any human to handle, abilities that make him the target of ferocious demons that seek to taste his blood. Try as he might to escape this, Ryan is pulled toward an ancient legacy built upon the sentient sword Excalibur and its servants known as the Pendragons. The more he learns of this legacy, the more he is surrounded by mystic powers, a secret organization, characters from Arthurian lore, and enemies from the enchanted realm of Annwn.

                                These extraordinary forces push Ryan to his breaking point, but there is one more challenge that is harder than the rest. Some people are not who they seem, and their secrets could prove harmful when brought to light. This revelation could blow Ryan off course at a time when one deviation can cost him everything.

                                Regardless of the outcome, whatever path is placed before Ryan by the godlike sentinels of Annwn, what good can he do when he is so eager to reject his calling? How can he become a Chosen One when he feels robbed of the right to choose otherwise? Furthermore, in the event that he is offered that choice, what could possibly dissuade him from taking the way out?
                                
                                Discover the answers to these questions and more in the first installment of The Aethervard Legacy!
                            </p>
                            
                        </div>
                            
                        </li>
                        <li><BookInfo/></li>
                        
                    </ul>
                    
                </div>
                <div className="rightCol">

                </div>
            </div>


            
        </>
        
    )

}

function BookInfo() {

    class Attribute {
        constructor(name, value) {
            this.name = name
            this.value = value
        }
    }

    const attributes = []

    attributes.push(new Attribute("Print Length", "276 pages"))
    attributes.push(new Attribute("Language", "English"))
    attributes.push(new Attribute("Publication date", "October 24, 2022"))
    attributes.push(new Attribute("Dimensions", "6 x 0.7 x 9 inches"))
    attributes.push(new Attribute("ISBN-13", "979-8986945613"))

    return (
        <div className="bookInfo">
            <ul>

                {
                    attributes.map((attribute) => (
                        <li>
                            <div>
                                <p>{attribute.name}</p>
                                <p>{attribute.value}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}