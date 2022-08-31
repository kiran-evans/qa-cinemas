const ClassificationsPage = () => {

    return (
    <div className="classifications">
        <h1>The movies we show have various classifications to indicate the intended audience.</h1>
        <h3>The full list of classifications can be found below. To find out about a classification, simply click on it.</h3>
        
        <ul>
            <li>
                <a href="https://www.bbfc.co.uk/rating/u"> Rated U</a>
                <img width="120px" height="120px" src={"/Ratings/URating.png"}>
                    </img>
                <p>A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child.</p>
            </li>
            <li>
                <a href="https://www.bbfc.co.uk/rating/pg"> Rated PG</a>
                <img width="120px" height="120px" src={"/Ratings/PGRating.png"}>
                    </img>
                <p>General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. 
                    Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.</p>
            </li>
            
            <li>
                <a href="https://www.bbfc.co.uk/rating/12"> Rated 12A</a>
                <img width="120px" height="120px" src={"/Ratings/Rating12.png"}>
                    </img>
                <p>Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. 
                    No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to 
                    view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they 
                    check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</p>
            </li>
            <li>
                <a href="https://www.bbfc.co.uk/rating/15"> Rated 15</a>
                <img width="120px" height="120px" src={"/Ratings/15Rating.png"}>
                    </img>
                <p>No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</p>
            </li>
            <li>
                <a href="https://www.bbfc.co.uk/rating/18"> Rated 18</a>
                <img width="120px" height="120px" src={"/Ratings/18Rating.png"}></img>
            </li>
            <p>No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.</p>
        </ul>
    </div>

    );

};

export default ClassificationsPage;
