import React from 'react'
import styled from 'styled-components'
import Star from '../../Images/star.svg'

const CardStyle = styled.div`
    max-width: 90%;
    margin: auto;
    width: 100%;
    display: block;
    margin-bottom: 2em;
    img{
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 16px;
    }

    @media only screen and (min-width: 750px){
        margin-bottom: 10px;
    }

`
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FontChange = styled.p`
    
`;
const CardRight = styled.div`
    display:flex;
    font-size: 12px;
    color: gray;

    *{
        padding: .5em;
    }
`;
const StartRating = styled.p`
    display: inline-flex;
    img{
        width: 20px;
        height: 20px;
        object-fit: contain;
    }
`;
const P = styled.p`
    color:rgb(79, 79, 79);
        font-weight: bold;
        border: 2px solid rgb(79, 79, 79);
        padding: 0.2em 1em;
        border-radius: 10px;
        cursor: pointer;
        margin-right: .5em;
`;

const Title = styled.h3`
    margin-top: -5px;
`;


const Card = ({ card }) => {
    return (
        <CardStyle>
            <img src={ card.photo } alt={card.title}/>
            <CardInfo>
                <CardRight>
                    {card.superHost ? <P>Super Host</P>:'' }
                    <FontChange> Entire apartment</FontChange>
                    <FontChange>3 beds</FontChange>
                </CardRight>
                <StartRating>
                    <img src={Star} alt='star'/> {card.rating}
                </StartRating>
            </CardInfo>
            <Title>
            {card.title}
            </Title>
        </CardStyle>
    )
}

export default Card
