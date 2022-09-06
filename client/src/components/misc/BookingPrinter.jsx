const BookingPrinter = ({booking, resetOption, submitState}) => {

    const {name, title, time, seats, date} = booking;

    return (
        <div>
            <h2>{title}</h2>
            <h3>{name}</h3>
            <h4>{date} @ {time}</h4>
            <h4>Seats: {seats}</h4>
            {(!submitState) && <button type="button" onClick={() => resetOption()}>That's not my booking.</button>}
        </div>
    )

};

export default BookingPrinter;