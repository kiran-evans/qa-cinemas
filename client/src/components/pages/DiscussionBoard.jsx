import axios from "axios";
import { useEffect, useState } from "react";
import DiscussionForm from "../misc/DiscussionForm";
import DiscussionPrinter from "../misc/DiscussionPrinter";

const Filter = require('bad-words');

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
            console.log("Please choose the movie you wish to discuss from the dropdown menu");
            return null;
        }

        const date = new Date();
        const dateString = date.toDateString();

        const bodyToPost = {
            movie: selectedMovie,
            rating: parseInt(rating),
            displayName: displayName,
            header: subject,
            text: mainText,
            dateAdded: dateString
        }

        // filters all of the fields for profanities. Will not allow a profane post.
        let cleanStatus = true;
        const filter = new Filter();
        for (let field of Object.values(bodyToPost)) {
            if (filter.isProfane(field)) {
                cleanStatus = false;
                console.log("profanity detected");
                break;
            }
        }
        if (!cleanStatus) {
            return null;
        }
        
        //makes the post request to the DB.
        axios
            .post("http://localhost:5000/api/discussions/postNewDiscussion/", bodyToPost)
            .then(res => {
                console.log(res);
                setSubmittedState(true);
            })
            .catch(err => console.log(err));
    
        };

    // if the selected dropdown movie has posts, this block will get them from the DB and then the Discussion printer willrender them to the page.
    useEffect(() => {
        console.log(selectedMovie);
        if (!selectedMovie) return;
        axios
            .get("http://localhost:5000/api/discussions/getAllRelated/" + selectedMovie)
            .then(res => {
                console.log("data", res.data);
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

        <div id="discussionBoard">
            <div id="discussionIntro">
                <h2>If there's one thing we love, it's watching movies...</h2>
                <h3>But the next best thing is talking about movies!</h3>
                <hr />
            </div>
            
            <div id="discussionArea">
                <label htmlFor="discussionDropDown">What movie do you want to discuss? </label>
                <select id="discussionDropDown" onChange={(e) => setSelectedMovie(e.target.value)}>
                    <option value=''>-Select a Movie to Discuss-</option>
                    {availableMovies.map(({title}) => <option key={title} value={title}>{title}</option>)}
                </select>
                <hr />
                <DiscussionForm submitHandler={submitHandler} postDiscussion={postDiscussion} submittedState={submittedState}/>
            </div>
            
            <div id="existingPosts">
                {(relevantPosts) ? <DiscussionPrinter posts={relevantPosts} /> : null} 
            </div>
        </div>

    );

};

export default DiscussionBoard;