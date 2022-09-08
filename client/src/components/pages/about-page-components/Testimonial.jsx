import React from 'react'
import styled from 'styled-components';

const OuterDiv= styled.div`
    display: flex;
    align-items: center;
    border: 0.2em solid springgreen;
    border-radius: 2em;
    margin: 0 1em;
    padding: 2.4em 1.8em;
`
const ImageDiv = styled.div`
`
const Image = styled.img`
    width: 8em;
    height: 8em; 
    object-fit: cover;
    border: 0.2em solid springgreen;
    border-radius: 100%;
`
const InnerDiv = styled.div`
    width: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Name = styled.h3`
    color: white;
    margin-bottom: 0.2em;
`

const Text = styled.p`
    display: flex;
    font-size: 1em;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.3em 0;
`

const LinkTo = styled.a`
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: bold;
    color: springgreen;
    margin: 1em 0;
`
const Testimonial = ({data}) => {
    return (
        <>
            <OuterDiv>

                <ImageDiv>
                    <Image src={data.image} />
                </ImageDiv>
                

                <InnerDiv>
                    <Name>
                        {data.name}
                    </Name>
                    <Text>
                        {data.text}
                    </Text>

                    <LinkTo href={data.gitLink} target={"_blank"} >GitHub</LinkTo>
                    
                </InnerDiv>

            </OuterDiv>
        </>
    )
}

export default Testimonial
