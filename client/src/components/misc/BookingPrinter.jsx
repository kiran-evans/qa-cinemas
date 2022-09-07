const BookingPrinter = ({booking, resetOption, submitState}) => {

    const {name, title, time, seats, date} = booking;

    return (
        <div>
            <h3>Booking for {name}</h3>
            <h4>{title}</h4>
            <h4>{new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(Date.parse(date))} @ {time}</h4>
            <h4>Seats:</h4>
            {seats.map(seat => (
                <h4>{seat}</h4>
            ))}
            {(!submitState) && <button type="button" onClick={() => resetOption()}>That's not my booking.</button>}
        </div>
    )

};

export default BookingPrinter;