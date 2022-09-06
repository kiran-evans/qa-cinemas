import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Testimonial from './Testimonial'
import { NavLink} from 'react-router-dom';

 
const MainContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextForm = styled.form`
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const TextArea = styled.textarea`
    width: 60%;
    padding: 10px;
    height: 150px;
`
// --------------------------------

const ButtonDiv = styled.div`
    margin: 10px 0px;
`
// --------------------------------

const TestimonialsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

// --------------------------------

const Title = styled.h1`
`

const LinkTo = styled.a`
    text-decoration: none;
    color: white;
`

const About = () => {
    const data = [{
        id: "1",
        image: "https://th.bing.com/th/id/OIP.--GRSptuFXxmSDA34kfWOwHaI8?w=157&h=190&c=7&r=0&o=5&pid=1.7",
        name: "Faizaan",
        text: "Role:Developer",
        gitLink: "https://github.com/DevFaizaan"
    }, {
        id: "2",
        image: "https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?w=186&h=190&c=7&r=0&o=5&pid=1.7",
        name: "Fred Clay",
        text: "Role:Developer",
        gitLink: "https://github.com/FredClay"
    }, {
        id: "3",
        image: "https://th.bing.com/th/id/OIP.qCbCJYGidsUAMVFxO5T_ugHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7",
        name: "Daniel",
        text: "Role:Developer",
        gitLink: "https://github.com/dlcorne"
    }, {
        id: "4",
        image: "https://cdn4.iconfinder.com/data/icons/avatars-of-people/5000/avatar_7-512.png",
        name: "Mohamed",
        text: "Role:Developer",
        gitLink: "https://github.com/Issa71"
    }, {
        id: "5",
        image: "https://th.bing.com/th/id/OIP.30KHuMw-tDXt8ZzY5BpUhwHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7",
        name: "Kiran",
        text: "Role:Developer",
        gitLink: "https://github.com/kiran-evans"
    }];

    return (
        <>
            <MainContainerDiv>
            <Title>Meet the team</Title>
                <TestimonialsDiv >

                    {
                        data.map(item => (
                            <Testimonial data={item} key={item.id} />
                        ))
                    }

                </TestimonialsDiv>

                <Title>Scrum Process</Title>

                <TextForm >
                    <TextArea placeholder='At the start of the project, we formed our scrum team and created our product backlog. We then defined the length of our sprint to be a weeklong. We used a Jira board, a visual tool which allowed us to track our project’s progress. We had daily stand-ups in the mornings to share what we worked on, to state any obstacles we had as well as stating the next task we would work on. We had a sprint retrospective at the end of each week to highlight what we did well and to point out what we could improve on for the upcoming sprint.'/>
                    <ButtonDiv>
                        <Button  sx={{ color: "white", backgroundColor: "green", margin: "0px 10px" }}>
                            <LinkTo href="https://www.scrum.org/" target={"_blank"}  >Scrum</LinkTo> </Button>

                        <Button component={NavLink} to='/contact' sx={{ color: "white", backgroundColor: "blue", margin: "0px 10px" }}> Contact US </Button>
                    </ButtonDiv>

                </TextForm>



            </MainContainerDiv>
        </>
    )
}

export default About
