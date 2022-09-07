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
            {posts.map(post => 
            <div className="post" key={post._id}>
                <h2>{post.header}</h2>
                <h3>By: {post.displayName} --- {post.dateAdded}</h3>
                <h4>Rated: {post.rating}/5</h4>
                <p>{post.text}</p>
                <br />
            </div>
            )}
        </div>
    );

};

export default DiscussionPrinter;