import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
    width: 100%;
    display: block;

`
const CardInfo = styled.div``;
const FontChange = styled.p``;
const CardRight = styled.div``;
const StartRating = styled.p``;
const Title = styled.h1``;

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
                    star 4.34
                </StartRating>
            </CardInfo>
            <Title>
            Turku Nordic Home near city center
            </Title>
        </CardStyle>
    )
}

export default Card
