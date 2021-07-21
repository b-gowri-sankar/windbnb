import React from 'react'
import styled from 'styled-components'
import Triangle from '../../Images/triangleLogo.png'
import Search from '../../Images/search.svg'

const Container = styled.div`
    max-width: 90%;
    margin: auto;
    display: block;
`
const Logo = styled.div`
    display: inline-flex;
    padding: 0px;
    margin: 0px;
    color: #EB5757;
    height: 15vh;
    img{
        height: 22px;
        margin-top: 2.7vh;
        padding: 0px 5px;
    }
    cursor: pointer;
`;

const SearchForm = styled.div`
    display: flex;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px;
    flex-basis: 1 1 1;
    width: max-content;
    margin: auto;
    border-radius: 16px;
    cursor: pointer;
    margin-bottom: 10px;
    div{
        border-right: 1px solid rgb(242, 242, 242);
        padding: 1em 1.6em;
    }

    img{
        padding: 1em 1.6em;
    }

    &:hover{
        transform: scale(1.01);
        transition: ease-in;
    }
    div :nth-child(2){
        color: grey;
    }

    div{
        font-size: 14px;
        font-weight: 300;
        align-self: center;
    }

    .add-guests{
        color: grey;
    }

`;

const Navbar = () => {
    return (
        <Container>
            <Logo>
                <img src={Triangle} alt=" Website Logo" />
                <h3>windbnb</h3>
            </Logo>
            <SearchForm>
                <div> Turku, Finland</div>
                <div className='add-guests'> Add Guests</div>
                <img src={Search} alt='search icon' />
            </SearchForm>
            <h1>Stays in Finland</h1>
        </Container>
    )
}

export default Navbar
