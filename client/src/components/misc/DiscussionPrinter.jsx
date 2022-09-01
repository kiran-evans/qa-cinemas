const DiscussionPrinter = ({posts}) => {
    
    if (posts.length === 0) return null;

    return (
        <div>
            {posts.map(({displayName, header, text, dateAdded}) => 
            <div key={displayName + dateAdded}>
                <h2>{header}</h2>
                <h4>By: {displayName} --- {dateAdded}</h4>
                <p>{text}</p>
                <br />
            </div>
            )}
        </div>
    );

};

export default DiscussionPrinter;