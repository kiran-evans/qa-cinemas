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
            <div className="post" key={displayName + dateAdded}>
                <h2>{header}</h2>
                <h3>By: {displayName} --- {dateAdded}</h3>
                <h4>Rated: {rating}/5</h4>
                <p>{text}</p>
                <br />
            </div>
            )}
        </div>
    );

};

export default DiscussionPrinter;