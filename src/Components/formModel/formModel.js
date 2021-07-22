import React from 'react'
import styled, { keyframes } from 'styled-components'
import Close from '../../Images/close.svg'
import SearchWhite from '../../Images/searchWhite.svg'
import Location from '../../Images/location.svg'
import Plus from '../../Images/add.svg'
import Minus from '../../Images/minus.svg'
import { CardsList } from './CardsList'
import Card from '../Cards/Card'

const model = keyframes`
    0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const Model = styled.div`
    height: 90vh;
    width: 100%;
    padding: 15px;
    position: absolute;
    top:0%;
    left:0%;
    right: 0%;
    z-index: 9999;
    background-color: white;
    box-sizing: border-box;
    animation:${model} ease-in-out 0.5s;
`;



const SearchIcon = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-weight: bold;
        color: black;
        font-size: 14px;
    }
    img{
        cursor: pointer;
        margin-right: 1em;
    }
    margin-bottom: 1em;
`;

const LocationSlab = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px;
    padding: 1em;
    label{
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
    }
   input{
       padding: 10px;
       border: none;
       &:focus{
           outline: none;
       }
   }
`;

const LocationList = styled.div`
    list-style: none;
    display: block;
    width: 100%;
    img{
        color: grey;
        margin-bottom: -6px;
        margin-right: 10px;
    }

    li{
        padding: 1em;
        display: block;
        box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px;
        width: 100%;
        color: grey;
        font-size: 14px;
        cursor: pointer;
    }
    /* display: none; */
`;

const GuestCard = styled.div`
    font-size: 14px;
    padding: 10px;
    display: none;
`;

const Category = styled.p`
    font-weight: bold;
`;

const AddGuests = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: flex-start;
    *{
        margin: 0em 0.5em;
        color: grey;
    }
    p{
        align-self: center;
    }

    img{
        border: 1px solid rgb(0,9,0);
        cursor: pointer;
        width:20px;
        height: 20px
    }
`;

const Button = styled.button`
    border: none;
    background-color: #EB5757;
    color: white;
    padding: 10px;
    font-size: 15px;
    width: max-content;
    margin:auto;
    display: flex;
    justify-content: center;
    border-radius: 14px;
    cursor: pointer;
    /* margin-top: 15px; */
`;

const NumStays = styled.div`
    max-width: 90%;
    margin:auto;
    display: flex;
    justify-content: space-between;
`;

const FormModel = ({showForm, setShowForm, setCity}) => {
    const [formData, setFormData] = React.useState({
        location: 'Finland',
        guest: '0',
    })

    const [Cards, setCards] = React.useState([...CardsList])

    const submitClickListener = (e) => {
        e.preventDefault();
        setCity(formData.location)
        setShowForm(false)
    }

    const changeClickListener = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const listClickListener = (e, locate) => {
        setFormData({...formData, [e.target.id]:locate})
    }


    const modelComponent = (        <Model>
        <SearchIcon>
            <p>Edit your Search:</p>
            <img src={Close} alt='close icon' onClick={() => {
                setShowForm(false);
            }} />
        </SearchIcon>
        <form onSubmit={ e => submitClickListener(e) }>
            <LocationSlab >
                <label htmlFor='location'>location</label>
                <input type='text' value={formData.location} id='location' placeholder='Add Location' onChange={ e => changeClickListener(e) }/>
            </LocationSlab>
            <LocationSlab >
                <label htmlFor='guest'>guest</label>
                <input type='text' value={formData.guest} id='guest' disabled/>
            </LocationSlab>
            <LocationList>
                <li onClick={ e => listClickListener(e, 'Helsinki, Finland') } id='location'><img src={Location} alt='location' />Helsinki, Finland</li>
                <li onClick={ e => listClickListener(e, 'Turku, Finland') } id='location'><img src={Location} alt='location' />Turku, Finland</li>
                <li onClick={ e => listClickListener(e, 'Vaasa, Finland') } id='location'><img src={Location} alt='location' />Vaasa, Finland</li>
                <li onClick={ e => listClickListener(e, 'Oulu, Finland') } id='location'><img src={Location} alt='location' />Oulu, Finland</li>
            </LocationList>
            <GuestCard>
                <Category>Adults</Category>
                <p>Ages 13 or above</p>
                <AddGuests>
                    <img src={Minus} alt='minus icon' />
                    <p>0</p>
                    <img src={Plus} alt='addition icon' />
                </AddGuests>
                <Category>Children</Category>
                <p>Ages 13 or above</p>
                <AddGuests>
                    <img src={Minus} alt='minus icon' />
                    <p>0</p>
                    <img src={Plus} alt='addition icon' />
                </AddGuests>
            </GuestCard>
            <Button>
                <img src={SearchWhite}
                    alt='search icon' />
                <span>Search</span>
            </Button>
        </form>
    </Model>)
    return (
        <>
            {showForm && modelComponent}
            <NumStays>
                <h1>Stays in {formData.location}</h1>
                <p>{ Cards.length }+ stays</p>
            </NumStays>
            {Cards && Cards.map((card, index) =>
                <Card card={card} key={ index }/>
            )}

        </>
    )
}

export default FormModel
