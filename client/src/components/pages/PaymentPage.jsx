import axios from 'axios';
import { useState, useEffect } from "react";
import BookingPrinter from '../misc/BookingPrinter';
import PaymentSuccess from "../misc/PaymentSuccess";

const PaymentPage = () => {

    const [availableMovies, setAvailableMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');

    const [bookingName, setBookingName] = useState('');

    const [userBooking, setUserBooking] = useState('');
    
    const [holdersName, setHoldersName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expDate, setExpDate] = useState('');
    
    const [submitState, setSubmitState] = useState(false);


    
    const searchForBooking = () => {
        console.log(Object.keys(selectedMovie));
        console.log(bookingName);
        axios
            .get(`http://localhost:5000/api/booking/${selectedMovie}/${bookingName}`)
            .then(res => {
                console.log(res);
                setUserBooking(res.data[0]);
            })
            .catch(err => console.log(err));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        
        const newBody = {
            paid: true
        }
        userBooking.paid = true;
        axios
            .put(`http://localhost:5000/api/booking/${userBooking._id}/`, newBody)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        
        await new Promise(r => setTimeout(r, 1000))
        setSubmitState(true);
    };

    // passed to printer to allow a user to choose another booking
    const resetter = () => {
        setUserBooking('');
    }

    const refresher = () => {
        window.location.reload();
    }

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/movies")
            .then(res => {
                setAvailableMovies(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>You can pay for your pre-booked tickets using the page below.</h2>

            <div>
                {(!userBooking) && <select id="discussionDropDown" onChange={(e) => setSelectedMovie(e.target.value)}>
                    <option value=''>-What Movie are you seeing?-</option>
                    {availableMovies.map(movie => <option key={movie._id} value={movie.title}>{movie.title}</option>)}
                </select>}

                {(selectedMovie && !userBooking) && 
                    <div>
                        <input type="text" placeholder='Name on Booking...' onChange={(e) => setBookingName(e.target.value)}/>
                        <button type="button" onClick={() => searchForBooking()}>Find my booking</button>
                    </div>}
                
                {(userBooking) && <BookingPrinter booking={userBooking} resetOption={resetter} submitState={submitState}/>}

                <br /> <br />
                {/* <Displayusers booking component /> */}
                {(userBooking.paid === false) &&
                <form onSubmit={(event) => submitHandler(event)}>
                    <input type="text" id="holderNameInput" required placeholder="Cardholder Name." value={holdersName} onChange={(e) => setHoldersName(e.target.value)}/>
                    <br /> <br />
                    <input type="text" id="cardNumInput" required placeholder="Card Number." value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                    <br /> <br />
                    <input type="text" id="cardExpDate" required placeholder="Exp. Date" onFocus={() => setExpDate('')} value={expDate} onChange={(e) => setExpDate(e.target.value)}/>
                    <br /> <br />
                    <input type="text" id="cardSecNum" required placeholder="CVV" onFocus={() => setSecurityCode('')} value={securityCode} onChange={(e) => setSecurityCode(e.target.value)}/>
                    <br /> <br />
                    
                    <button type="submit">Submit</button>
                </form>}
                {(userBooking.paid) && <h2>This booking has been paid for!</h2>}
            </div>
            <PaymentSuccess subState={submitState} refresher={refresher}/>
        </div>
    );

};

export default PaymentPage;
