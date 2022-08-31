import { useState } from "react";

const PaymentPage = () => {

    const [bookingReference, setBookingReference] = useState('');
    const [holdersName, setHoldersName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expDate, setExpDate] = useState('');
    
    const searchForBooking = () => {
        // This function should check the DB for the user's booking number.
        // this will be an axios .get request to the bookings db. If the response is not null, 
        return null;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // could be updated once we've decided what we want.
    }

    return (
        <div>
            <h2>You can pay for your pre-booked tickets using the page below.</h2>

            <div>
                <input type="text" id="bookRefInput" placeholder="Enter Booking Ref." value={bookingReference} onChange={(e) => setBookingReference(e.target.value)} />
                <button type="button">Find my booking</button>
                <br /> <br />
                {/* <Displayusers booking component /> */}
                <form onSubmit={submitHandler}>
                    <input type="text" id="holderNameInput" placeholder="Cardholder Name." value={holdersName} onChange={(e) => setHoldersName(e.target.value)}/>
                    <br /> <br />
                    <input type="text" id="cardNumInput" placeholder="Card Number." value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                    <br /> <br />
                    <input type="text" id="cardExpDate" placeholder="Exp. Date" onFocus={() => setExpDate('')} value={expDate} onChange={(e) => setExpDate(e.target.value)}/>
                    <br /> <br />
                    <input type="text" id="cardSecNum" placeholder="CVV" onFocus={() => setSecurityCode('')} value={securityCode} onChange={(e) => setSecurityCode(e.target.value)}/>
                    <br /> <br />
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );

};

export default PaymentPage;