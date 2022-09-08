const Home = () => {

    return (
        <>
        <div className="homeTitle">
            <h1>Home</h1>
            <img className="logo" src="/logos/logo.png" alt="QA Cinemas logo" />
            <h4>"QA Cinemas deliver absolute top-notch entertainment. If only I could work for them..."</h4>
        </div>
        <div className="homeQuoteAuthor">
            <h5>- Jorson Harridan, UK Cinema Magazine</h5>
        </div>
        <div id="homeIntro">
            <div id="homeIntroRow">
                <div id="homeIntroImage">
                    <img alt="Our satisfied customers" src="https://media.istockphoto.com/photos/female-friends-buying-movie-tickets-picture-id824039966?k=20&m=824039966&s=612x612&w=0&h=ou5cpF-b7FTncr1UIrrox0mogfpRr5rXKckNeHC-QsA=" />
                </div>
                <div id="homeIntroText">
                    <h1>Welcome to <span className="focus">QA Cinemas</span>, the award-winning movie theatre based in London.</h1>
                    <h3>After refocusing the company away from technology consultancy and into the movie industry, QA 
                    experienced game-changing profits which it reinvested to create the <span className="focus">ultimate cinemagraphic experience.</span></h3>
                    <h3>But don't just read it - <span className="focus">see it</span>. Here's why movies are at their best with QA:</h3>
                </div>
            </div>    
        </div>
        <div id="homeWrapper">
            <div id="homeWrapperRow">
                <div id="homeFeature1">
                    <h3>All your favourite movies, all from the comfort of <span className="focus">luxury seating</span>, all shown in <span className="focus">4K HD 144hz.</span></h3>
                    <img id="cinema" alt="QA Cinema" src="https://media.istockphoto.com/photos/empty-cinema-screen-with-audience-picture-id453554783?b=1&k=20&m=453554783&s=170667a&w=0&h=-V2SSq4NvamNI9EEEHpw_MPrnizXzGGWdB_5BN8Dh5o=" />
                </div>
                <div id="homeFeature2">    
                    <h3>Decadence-level snacks and refreshments, delivered by <span className="focus">professional, lifelike synthetics.</span></h3>
                    <img id="popcorn" alt="Synthetic Staff" src="https://thumbs.dreamstime.com/b/happy-worker-holding-popcorn-drink-cinema-portrait-female-concession-counter-47348907.jpg" />
                </div>
                <div id="homeFeature3">
                    <h3>Experience the patented <span className="focus">QA 5D Soundscape</span> that puts you right in the centre of the action. </h3>
                    <img id="sound" alt="QA 5D Soundscape" src="https://i.pinimg.com/originals/1b/c2/3d/1bc23d34ecee7afe338d9f18034fe51d.jpg" />
                </div>
        
            </div>
        </div>
        <div id="homeEnder">
            <p>What are you waiting for?! Take a look at <a href="./listings"><span className="focus">What's On Now</span></a> and we'll see you soon! </p>
        </div>
        </>
    )
}

export default Home;