const PaymentSuccess = ({subState}) => {

    if (!subState) return null;
    return (

        <div>
            <h2>Thank you! Your details have been passed onto our Pay Department.</h2>
            <p><img src="https://th.bing.com/th/id/R.70f8eb18f8dc210b049cf422f91d405c?rik=iAtanTgFJZhiHQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjTx%2fLpK%2fjTxLpK9pc.png&ehk=16TFJFnB9Wk43pG%2fs4y2rVdzdopiu9v9NmpgN5cj%2f%2b0%3d&risl=&pid=ImgRaw&r=0" 
                alt="tick" width="100" height="100"/> We look forward to seeing you soon.</p>
        </div>

    );

};

export default PaymentSuccess;