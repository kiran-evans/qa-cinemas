import React from 'react';
import styled from 'styled-components';
import AccessibleIcon from '@mui/icons-material/Accessible';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const PictureDiv = styled.div`
  display: flex;
  flex-direction: column;
`
 
const ImageCinema = styled.img`
  width: 100%;
  height: 300px;
`

// ------------------------------------------

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
`
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: white;
`

// ---------------------------------------------

const MapDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

`

const MapIframe = styled.iframe`
  width: 100wh;
  height: 300px;
  border: 2px solid blue;
`

// ------------------------------------

const DirectionsDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
width: 50%;
height: 500px;
`


// ------------------------------------

const TwoPictureDiv = styled.div`
  width: 100%;
`

// -----------------------

const AddressPhone = styled.h2`

`

// ---------------------------

const FootLinksDiv = styled.div`
  display: flex;
`

const LinkDiv = styled.div`
  margin: 10px 10px;
`
const LinkHeadingDiv = styled.div`
  display: flex;
  align-items: center;
`
const LinkTitle = styled.h3`

`

const LinkDescription = styled.p`
  
`

const Travelpage = () => {
  return (
    <>
      <MainContainer>
        {/* For Title  */}
        <TitleDiv>
          <Title>Welcome To QA Cinema</Title>
        </TitleDiv>

        <PictureDiv>
          <h3>QA Cinema</h3>
          <ImageCinema src='/travel/qabuilding.png' alt='' />
        </PictureDiv>

        <AddressPhone>Address: 3rd Floor. International House, 1 St Katharine's Way, London E1W 1UN</AddressPhone>
        
        {/* For Map  */} 
        <MapDiv>
          <h3>Location</h3>
          <MapIframe src="https://maps.google.com/maps?q=E1W%201UN&t=&z=17&ie=UTF8&iwloc=&output=embed">

          </MapIframe>
        </MapDiv>

        {/* For Direction  */}
        <DirectionsDiv>
          <h3>Directions from Tower Bridge</h3>
          <TwoPictureDiv>
            <Image src="/travel/steps.png" alt="steps"></Image>
            <Image src="/travel/directions.png" alt="directions" />
          </TwoPictureDiv>
          
        </DirectionsDiv>

        {/* Foot Links  */}
        <FootLinksDiv>
            <LinkDiv>
              <LinkHeadingDiv>
                  <AccessibleIcon sx={{ width: "30px", height: "30px", marginRight: "10px", color: "green" }}/>
                  <LinkTitle>Accessility</LinkTitle>
              </LinkHeadingDiv>
              <LinkDescription>
                There's disability access, as the building has lifts going to all floors
              </LinkDescription>
            </LinkDiv>

            <LinkDiv>
              <LinkHeadingDiv>
                  <DirectionsCarIcon  sx={{ width: "30px", height: "30px", marginRight: "10px", color: "green" }}/>
                  <LinkTitle>Parking</LinkTitle>
              </LinkHeadingDiv>
              <LinkDescription>
                No onsite parking, However customers can use Minories Car Park on shorter street EW1 8LP
              </LinkDescription>
            </LinkDiv>

            <LinkDiv>
              <LinkHeadingDiv>
                  <DirectionsSubwayIcon sx={{ width: "30px", height: "30px", marginRight: "10px", color: "green" }}/>
                  <LinkTitle>Train</LinkTitle>
              </LinkHeadingDiv>
              <LinkDescription>
                London Bridge (15m walk)
                Aldgate (12m walk)
                Tower Hill (7m walk)
              </LinkDescription>
            </LinkDiv>


        </FootLinksDiv>


      </MainContainer>
    </>
  );
};

export default Travelpage;