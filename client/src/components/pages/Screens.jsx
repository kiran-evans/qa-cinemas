const ScreensPage = () => {
    return(
        <div className="screensPage">
            <div className="screensTitle">
                <h1>Screens</h1>
            </div>
            <div className="screenSubtitle">
                <h4>Our cinemas feature best-in-class comfort with award-winning seating arrangement.</h4>
            </div>
            <div className="screensContainer">
                <h3>The Standard Screen</h3>
                <div className="screensImageWrapper">
                    <div className="screensImageRow">
                        <div className="screensImage1">
                            <img alt="View of Standard Screen" src="/contentpages/screen1.jpg"
                            width={700} height={550} />
                        </div>
                        <div className="screensImage2">
                            <img alt="Seating plan for Standard screen" src="/contentpages/screen1seating.jpg"
                            width={700} height={550} />
                        </div>
                    </div>
                </div>
                <div className="screensDetails">
                    <h4>Details</h4>
                </div>
            
                <div className="screensDetailsWrapper">
                    <div classname="screensDetailsRow">
                        <div className="screensDetails1">
                            <p>Featuring next-generation "straight-to-your-eyes-projection" technology, the Standard Screen
                            has been rated as QA Magazine's 'Cinema of the Year' for 15 years running. Take a seat
                            and prepare for a thoroughly exalting cinema experience.</p>         
                            <p>The Standard Screen is a well-maintained, safe and secure environment for customers
                            to enjoy the latest blockbusters. QA Cinemas asks all customers to respect their fellow
                            viewers and switch off mobile devices before entering the screening room.</p>               
                        </div>
                        <div className="screensDetails2">
                            <p><h5>Seats:</h5> 111</p>
                            <p><h5>Access:</h5>Stairs, accessibility seats in row A</p>
                            <p><h5>VIP:</h5> Rows E, F</p>
                            <p><h5>Safety:</h5>Fire Escapes at back and front of theatre</p>
                        </div>
                    </div>
                </div>
            </div>            
            
            <div className="screensContainer">
                <h3>The Deluxe Screen</h3>
                <div className="screensImageWrapper">
                    <div className="screensImageRow">
                        <div className="screensImage1">
                            <img alt="View of Deluxe Screen" src="/contentpages/screen2.jpg"
                            width={700} height={550} />
                        </div>
                        <div className="screensImage2">
                            <img alt="Seating plan for Deluxe screen" src="/contentpages/screen2seating.jpg"
                            width={700} height={550} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="screensDetailsWrapper">
                <div classname="screensDetailsRow">
                    <div className="screensDetails1">
                        <p>Fancy a trip back to the old school? The QA Cinemas Deluxe screen spares no expense in delivering
                        a retro cinema-going experience, harking back to the days of watching movies projected onto a
                        tiny silver screen too far away to focus on. Prices starting at £500.</p>
                        <p>Originally designed as a presidential suite for a redesign of the White House,
                        the Deluxe Screen is the crown jewel of London's bustling cinema market. Previous
                        notable guests include Bill Clinton, Barack Obama, Rihanna and Queen Elizabeth.</p>
                    </div>
                    <div className="screensDetails2">
                        <p><h4>Seats:</h4> 12</p>
                        <p><h4>Access:</h4>Escalators</p>
                        <p><h4>VIP:</h4> Every seat</p>
                        <p><h4>Safety:</h4>Luxury fire crew and private security detail on site at each screening</p>
                    </div>
                </div>
            </div> 
        </div>
    )

}

export default ScreensPage;