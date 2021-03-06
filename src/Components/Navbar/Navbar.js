import React from 'react'
import styled from 'styled-components'
import Triangle from '../../Images/triangleLogo.png'
import Search from '../../Images/search.svg'
import FormModel from '../formModel/formModel'

const Container = styled.div`
    max-width: 90%;
    margin: auto;
    display: block;
    @media only screen and ( min-width: 750px){
        display: flex;
        justify-content: space-between;
        flex: 1 1;
    }

`
const Logo = styled.div`
    display: inline-flex;
    padding: 0px;
    margin: 0px;
    padding-top: 10px;
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
    @media only screen and ( min-width: 750px){
        height: 100%;
        margin: 0px;
        margin-top: 20px;
    }
`;

const Navbar = () => {
    const [showForm, setShowForm] = React.useState(false);
    const [City, setCity] = React.useState('Finland');
    const [Guest, setGuest] = React.useState('')
    
    return (
        <>
            <Container>
                <Logo>
                    <img src={Triangle} alt=" Website Logo" />
                    <h3>windbnb</h3>
                </Logo>
                <SearchForm onClick={() => setShowForm(true)}>
                    <div>{City === 'Finland' ? '': City + ','} Finland</div>
                    <div className='add-guests'> {Guest.length === 0 ? 'Add Guests' : Guest + ' Guests'}</div>
                    <img src={Search} alt='search icon' />
                </SearchForm>
            </Container>
            <FormModel showForm={showForm} setShowForm={setShowForm} setCity={setCity} setGuest={ setGuest }/>
        </>
    )
}

export default Navbar
