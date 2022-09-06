import axios from "axios";
import { useEffect, useState } from "react";
import DiscussionForm from "../misc/DiscussionForm";
import DiscussionPrinter from "../misc/DiscussionPrinter";

var Filter = require('bad-words'),
filter = new Filter();

const DiscussionBoard = () => {

    const [availableMovies, setAvailableMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');

    const [relevantPosts, setRelevantPosts] = useState([]);

    const [submittedState, setSubmittedState] = useState(false);

    // prevents the page from refrshing when the DiscussionFrom component is submitted.
    const submitHandler = (event) => {
        event.preventDefault();
    }

    // this block is called from the DiscussionForm component, and is passed all of the relevant states to post a new discussion to the DB.
    const postDiscussion = (displayName, subject, mainText, rating) => {
        if (!selectedMovie) {
            return null;
        }

        const date = new Date();
        const dateString = date.toDateString();

        const bodyToPost = {
            movie: selectedMovie,
            rating: rating,
            displayName: displayName,
            header: subject,
            text: mainText,
            dateAdded: dateString
        }

        // filters all of the fields for profanities. Will not allow a profane post.
          for (let x of Object.keys(bodyToPost)) {
            bodyToPost[x] = filter.clean(bodyToPost[x]);
        };
        
        //makes the post request to the DB.
        axios
            .post("http://localhost:5000/api/discussions/postNewDiscussion/", bodyToPost)
            .then(res => {
                setSubmittedState(true);
            })
            .catch(err => console.log(err));
    
        };

    // if the selected dropdown movie has posts, this block will get them from the DB and then the Discussion printer willrender them to the page.
    useEffect(() => {
        if (!selectedMovie) return;
        axios
            .get("http://localhost:5000/api/discussions/getAllRelated/" + selectedMovie)
            .then(res => {
                setRelevantPosts(res.data);
            })
            .catch(err => console.log(err));
    }, [selectedMovie, submittedState]);

    // allows the user to comment on multiple movies, but not accidentally on the same movie twice.
    useEffect(() => {
        setSubmittedState(false);
    }, [selectedMovie])

    // calls the movie API to populate the dropdown with the correct movies.
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/movies")
            .then(res => {
                setAvailableMovies(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (

        <div className="discussionBoard">
            <div className="discussionIntro">
                <h2>If there's one thing we love, it's watching movies...</h2>
                <h3>But the next best thing is talking about movies!</h3>
            </div>
            
            <div className="discussionArea">
                <div className="discussionForm">
                    <label htmlFor="discussionDropDown">What movie do you want to discuss? </label>
                    <select id="discussionDropDown" onChange={(e) => setSelectedMovie(e.target.value)}>
                        <option value=''>-Select a Movie to Discuss-</option>
                        {availableMovies.map(movie => <option key={movie._id} value={movie}>{movie.title}</option>)}
                    </select>
                    <DiscussionForm submitHandler={submitHandler} postDiscussion={postDiscussion} submittedState={submittedState}/>
                </div>
            
                <div className="existingPosts">
                    {(relevantPosts) && <DiscussionPrinter posts={relevantPosts} />} 
                </div>
            </div>
        </div>

    );

};

export default DiscussionBoard;