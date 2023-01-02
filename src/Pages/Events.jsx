export default function Events() {
    return (
        <div>
            <h1>Events</h1>
            <h2>2023-2024 Parker Wilson Events and Schedule</h2>
            <div className="body">
                <Event
                    image={require("../Images/book_signing_event.png")}
                    title={"Barnes and Noble Book Signing Event"}
                    description={"Meet the author and get a signed copy of Excalibur's Pendragon!"}
                    date={"Pending: End of January."}
                    location={"Barnes and Noble Bookstore in Orem University Crossings Plaza. 330 East 1300 South, Orem, UT 84058."}
                />
                <Event
                    image={require("../Images/book_1_front.png")}
                    title={"Virtual Reading Event"}
                    description={"Tune in to Parker C. Wilson's virtual reading of Excalibur's Pendragon Chapters 1-2."}
                    date={"Thursday January 19 @ 8pm."}
                    location={"Pending: Zoom Link."}
                />
            </div>
        </div>
    )
}

function Event({title, image, description, date, location}){
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} width="300"></img>
            <p>{description}</p>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
        </div>
    )
}