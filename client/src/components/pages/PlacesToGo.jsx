const PlacesToGo = () => {
    return (
    <div className="ptg">
        <div className="ptgTitle">
            <h1>While You're Here...</h1>
        </div>
        <div className="ptgSubtitle">
            <h3>Check out these suggested local venues!</h3>
        </div>

        <div className="ptgWrapper">
            <div className="ptgWrapperRow">
                <div className="ptgFeatureImage">
                    <img alt="Interior of Pizza Metro" src="/contentpages/pizzametro.jpg" 
                    width={600} height={400} />
                </div>
                <div className="ptgFeatureDetails">
                    <div className="ptgFeatureTitle">
                        <p>Pizza Metro</p>
                    </div>
                    <p><h5>Address:</h5> 132 Nearfar Avenue, Lower Midley, RP40 Z42</p>
                    <p><h5>Contact:</h5> 01255-592384</p>
                    <p><span className="focus">Current Deals:</span> Enjoy a Buy-One-Get-One-Free offer on all vegan pizzas by presenting a QA Cinemas ticket dated between Aug 2021 and Nov 2022.</p>
                    <p>Pizza Metro is a local pizzeria. Founded in 2020, their formulaic 3D-printed 
                    dough technology will leave you feeling adequately satisfied every time. Plenty 
                    of vegan options ensures nobody goes hungry down here in the Metro.</p>
                </div>
            </div>
        </div>

        <div className="ptgWrapper">
            <div className="ptgWrapperRow">
                <div className="ptgFeatureImage">
                    <img alt="Interior of Dominus Chicken" src="/contentpages/dominuschicken.jpg" 
                    width={600} height={400} />
                </div>
                <div className="ptgFeatureDetails">
                    <div className="ptgFeatureTitle">
                        <p>Dominus Chicken</p>
                    </div>
                    <p><h5>Address:</h5> 12a Last Road, The City, RC21 X30</p>
                    <p><h5>Contact:</h5> 15825-582582</p>
                    <p><span className="focus">Current Deals:</span> 50% off on all non-chicken meals when ordered by a ticket-holder for "FAST AND FURIOUS 11: THE LAST RIDE". Ends 24/09/2022.</p>
                    <p>If chicken's your thing, the Dominus has you covered. Featuring free-range chicken
                    freshly slaughtered in-store, each bite contains succulent, fresh-killed flavour that
                    you just can't challenge. That's the Dominus Promise (trademark pending).</p>
                </div>
            </div>
        </div>

        <div className="ptgWrapper">
            <div className="ptgWrapperRow">
                <div className="ptgFeatureImage">
                    <img alt="Logo of McKing's" src="/contentpages/mckings.jpg" 
                    width={600} height={400} />
                </div>
                <div className="ptgFeatureDetails">
                    <div className="ptgFeatureTitle">
                        <p>McKing's</p>
                    </div>
                    <p><h5>Address:</h5> 34 Quisitions Lane, Upper Midley, RP35 G59</p>
                    <p><h5>Contact:</h5> 85772-583762</p>
                    <p><span className="focus">Current Deals:</span> None right now. Check back often!</p>
                    <p>Fast-food lovers were ecstatic when historic fast-food chain McDonalds announced 
                    its hostile acquisition of Burger King in 2021. Now, the two chains have joined 
                    forces to bring you excellent flavour from all kinds of raw materials. Just like 
                    their new motto says, we're lovin' the King!</p>
                </div>
            </div>
        </div>
    </div>
    )
};

export default PlacesToGo;