import { useState } from "react";

const DiscussionForm = ({submitHandler, postDiscussion, submittedState}) => {

    const [displayName, setDisplayName] = useState('');
    const [subject, setSubject] = useState('');
    const [mainText, setMainText] = useState('');
    const [rating, setRating] = useState('5');

    return (
        <div id="discussionCreator">
            <form onSubmit={submitHandler}>
                <label htmlFor="ratingDropDown">Your rating: </label>
                <select id="ratingDropdown" defaultValue="5" onChange={(e) => setRating(e.target.value)}>
                    <option value="5">5*</option>
                    <option value="4">4*</option>
                    <option value="3">3*</option>                         
                    <option value="2">2*</option>
                    <option value="1">1*</option>                         
                </select>
                
                <label htmlFor="discussName">Display Name:</label>
                <input type="text" required id="discussName" placeholder="e.g. IceMan23" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                
                <label htmlFor="discussSubject">Heading:</label>
                <input type="text" required id="discussSubject" placeholder="e.g. Best Movie Ever!" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                
                <label htmlFor="discussText">What did you think?</label>
                <textarea className="textArea" type="text" required id="discussText" placeholder="Type here..." value={mainText} onChange={(e) => setMainText(e.target.value)}/>
                
                
                
                {(!submittedState) ? <button type="submit" onClick={() => postDiscussion(displayName, subject, mainText, rating)}>Send!</button>
                    : <p>Your post has been submitted</p>}
            </form>
        </div>
    );

};

export default DiscussionForm;