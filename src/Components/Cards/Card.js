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

`
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FontChange = styled.p`
    
`;
const CardRight = styled.div`
    display:inline-flex;
    font-size: 14px;
    color: gray;
    p:first-child{
        color:rgb(79, 79, 79);
        font-weight: bold;
        border: 2px solid rgb(79, 79, 79);
        padding: 0.2em 1em;
        border-radius: 10px;
        cursor: pointer;
        margin-right: .5em;
    }

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
const Title = styled.h3`
    margin-top: -5px;
`;

const Card = () => {
    return (
        <CardStyle>
            <img src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt=' Nice apartment in center of Helsinki '/>
            <CardInfo>
                <CardRight>
                    <p>Super Host</p>
                    <FontChange> Entire apartment</FontChange>
                    <FontChange>3 beds</FontChange>
                </CardRight>
                <StartRating>
                    <img src={Star} alt='star'/> 4.34
                </StartRating>
            </CardInfo>
            <Title>
            Turku Nordic Home near city center
            </Title>
        </CardStyle>
    )
}

export default Card
