import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';

const OuterDiv= styled.div`
    display: flex;
    align-items: center;
    border: 2px solid green;
    border-radius: 20px;
    margin: 10px;
    padding: 25px;
    width: 280px;
    height: 280px;
`
const ImageDiv = styled.div`
`
const Image = styled.img`
    height: 125px;
    width: 125px;
    border-radius: 75%;
`
const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
`
const Name = styled.h3`
    color: white;
`

const Text = styled.p`
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
`

const LinkTo = styled.a`
    text-decoration: none;
    color: red;
`
const Testimonial = ({data}) => {
    return (
        <>
            <OuterDiv>

                <ImageDiv>
                    <Image src={data.image}>
                </Image>
                </ImageDiv>
                

                <InnerDiv>
                    <Name>
                        {data.name}
                    </Name>
                    <Text>
                        {data.text}
                    </Text>

                    <Button><LinkTo href={data.gitLink} target={"_blank"} >GitHub</LinkTo></Button>
                    
                </InnerDiv>

            </OuterDiv>
        </>
    )
}

export default Testimonial
