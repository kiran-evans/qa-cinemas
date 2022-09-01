import axios from "axios";
import { Component, useEffect, useState } from "react";
import DiscussionPrinter from "../misc/DiscussionPrinter";

const DiscussionBoard = () => {

    const [availableMovies, setAvailableMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');

    const [relevantPosts, setRelevantPosts] = useState([]);

    const [displayName, setDisplayName] = useState('');
    const [subject, setSubject] = useState('');
    const [mainText, setMainText] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (!selectedMovie) {
            alert("Please choose the movie you wish to discuss from the dropdown menu")
        }

        const date = new Date();
        const dateString = date.toDateString();

        const bodyToPost = {
            movie: selectedMovie,
            displayName: displayName,
            header: subject,
            text: mainText,
            dateAdded: dateString
        }
        
        axios
            .post("http://localhost:5000/api/discussions/postNewDiscussion/", bodyToPost)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    
        };
    
    const setActiveMovie = (e) => {
        setSelectedMovie(e.target.value);
        };

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
    }, [selectedMovie]);

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
                <select id="discussionDropDown" onChange={(e) => setActiveMovie(e)}>
                    <option value=''>-Select a Movie to Discuss-</option>
                    {availableMovies.map(({title}) => <option value={title}>{title}</option>)}
                </select>
                <hr />
                <div id="discussionCreator">
                    <form onSubmit={submitHandler}>
                        <label htmlFor="discussName">Display Name: <br/></label>
                        <input type="text" required id="discussName" placeholder="E.g. IceMan23" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="discussSubject">Heading: <br/></label>
                        <input type="text" required id="discussSubject" placeholder="E.g. Best Movie Ever!" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="discussText">What did you think? <br /></label>
                        <input type="text" required id="discussText" placeholder="Type here..." value={mainText} onChange={(e) => setMainText(e.target.value)}/>
                        <button type="submit">Send!</button>
                    </form>
                </div>
            </div>
            <div id="existingPosts">
                {(relevantPosts) ? <DiscussionPrinter posts={relevantPosts} /> : null} 
            </div>
        </div>

    );

};

export default DiscussionBoard;