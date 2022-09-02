const DiscussionPrinter = ({posts}) => {
    
    if (posts.length === 0) return (
        <p>There are no posts for this movie yet.</p>
    );

    const postCount = posts.length;
    let ratingTotal = 0;
    for (let post of posts) {
        ratingTotal += post.rating;
    }
    const avgRating = (ratingTotal / postCount).toFixed(1);

    return (
        <div>
            <h1>Average viewer rating: {avgRating}/5</h1>
            {posts.map(({rating, displayName, header, text, dateAdded}) => 
            <div key={displayName + dateAdded}>
                <h2>{header}</h2>
                <h5>Rated: {rating}/5</h5>
                <h4>By: {displayName} --- {dateAdded}</h4>
                <p>{text}</p>
                <br /> <hr/>
            </div>
            )}
        </div>
    );

};

export default DiscussionPrinter;