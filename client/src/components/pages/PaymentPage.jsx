import { useState } from "react";
import PaymentSuccess from "../misc/PaymentSuccess";

const PaymentPage = () => {

    const [bookingReference, setBookingReference] = useState('');
    const [holdersName, setHoldersName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expDate, setExpDate] = useState('');
    const [submitState, setSubmitState] = useState(false);
    
    const searchForBooking = () => {
        // This function should check the DB for the user's booking number.
        // this will be an axios .get request to the bookings db. If the response is not null, 
        return null;
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        await new Promise(r => setTimeout(r, 1000))
        setSubmitState(true);
    }

    return (
        <div>
            <h2>You can pay for your pre-booked tickets using the page below.</h2>

            <div>
                <input type="text" id="bookRefInput" placeholder="Enter Booking Ref." value={bookingReference} onChange={(e) => setBookingReference(e.target.value)} />
                <button type="button" onClick={() => searchForBooking()}>Find my booking</button>
                <br /> <br />
                {/* <Displayusers booking component /> */}
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
                </form>
            </div>
            <PaymentSuccess subState={submitState} />
        </div>
    );

};

export default PaymentPage;
