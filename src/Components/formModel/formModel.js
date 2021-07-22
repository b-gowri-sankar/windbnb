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
    position: fixed;
    top:0%;
    left:0%;
    right: 0%;
    z-index: 9999;
    background-color: white;
    box-sizing: border-box;
    animation:${model} ease-in-out 0.5s;
  @media only screen and (min-width: 750px){
      height: 80vh;
  }

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
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px;
    border-radius: 16px;
    margin-bottom: 10px;
    img{
        color: grey;
        margin-bottom: -6px;
        margin-right: 10px;
    }

    li{
        padding: 1em;
        display: block;
        width: 100%;
        color: grey;
        font-size: 14px;
        cursor: pointer;
    }


`;

const GuestCard = styled.div`
    font-size: 14px;
    padding: 10px;
    @media only screen and (min-width: 750px){
        grid-column-start: 2;
        grid-column-end: 3;
    }
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
    max-width: 95%;
    margin:auto;
    display: flex;
    justify-content: space-between;
    h1{
        font-size: 22px;
        font-weight: bold;
    }
`;

const FormDiv = styled.div`
    @media only screen and (min-width: 750px){
        display: flex;
        div{
            flex-basis: 50%;
        }
    }
`;

const HintGrid = styled.div`
    @media only screen and (min-width: 750px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const CardsDiv = styled.div`
    @media only screen and (min-width: 750px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    @media only screen and (min-width: 1080px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

`;

const FormModel = ({showForm, setShowForm, setCity, setGuest}) => {
    const [formData, setFormData] = React.useState({
        location: 'Finland',
        guest: 0,
    })

    const [dupeCards, setDupeCards] = React.useState([...CardsList])
    const [Cards, setCards] = React.useState([...CardsList]);

    const [child, setChild] = React.useState(0);
    const [adult, setAdult] = React.useState(0);

    const [Display, setDisplay] = React.useState({
        locationDisplay: 'block',
        guestDisplay: 'none',
        locationBorder: 'none',
        guestBorder: 'none'
    })


    const submitClickListener = (e) => {
        e.preventDefault();
        setCity(formData.location)
        setGuest(formData.guest)
        setShowForm(false)
        setCards(dupeCards.filter(card => card.city === formData.location && card.maxGuests >= formData.guest ))
        console.log(Cards)
    }

    const changeClickListener = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const listClickListener = (e, locate) => {
        setFormData({...formData, [e.target.id]:locate})
    }

    const changeCountListener = (type) => {
        switch (type) {
            case 'ADD':
                setFormData({ ...formData, guest: (formData.guest + 1) });
                setAdult(adult+1)
                break;
            case 'SUBSCRACT':
                if (((formData.guest - 1) < 0) || (adult -1) < 0) {
                    break;
                }
                setFormData({ ...formData, guest: (formData.guest - 1) })
                setAdult(adult-1)
                break;
            case 'SUBSCRACT-C':
                if (((formData.guest - 1) < 0) || (child - 1) < 0) {
                    break;
                }
                setFormData({ ...formData, guest: (formData.guest - 1) });
                setChild(child - 1);
                break;
            case 'ADD-C':
                setFormData({ ...formData, guest: (formData.guest + 1) });
                setChild(child+1)
                break;
            default:
                break;
        }
    }
    
    const clickContainer = (type) => {
        switch (type) {
            case 'LOCATION':
                setDisplay({ ...Display, locationDisplay: 'block', guestDisplay: 'none', locationBorder:'1px solid black', guestBorder: 'none'});
                break;
            case 'GUEST':
                setDisplay({ ...Display, locationDisplay: 'none', guestDisplay: 'block', locationBorder:'none', guestBorder: '1px solid black' });
                break;
            default:
                break;
        }
    }

    const modelComponent = (<Model>
        <SearchIcon>
            <p>Edit your Search:</p>
            <img src={Close} alt='close icon' onClick={() => {
                setShowForm(false);
            }} />
        </SearchIcon>
        <form onSubmit={e => submitClickListener(e)}>
            <FormDiv>
            <LocationSlab style={{ border: Display.locationBorder, borderRadius: '16px' }} onClick={() => clickContainer('LOCATION')}>
                <label htmlFor='location'>location</label>
                <input type='text' value={formData.location} id='location' placeholder='Add Location' onChange={e => changeClickListener(e)} />
            </LocationSlab>
                <LocationSlab style={{ border: Display.guestBorder, borderRadius: '16px' }} onClick={() => clickContainer('GUEST')}>
                <label htmlFor='guest'>guest</label>
                <input type='text' value={formData.guest} id='guest' readOnly />
                </LocationSlab>
            </FormDiv>
            <HintGrid>
            <LocationList style={{ display: Display.locationDisplay }}>
                <li onClick={e => listClickListener(e, 'Helsinki')} id='location'><img src={Location} alt='location' />Helsinki, Finland</li>
                <li onClick={e => listClickListener(e, 'Turku')} id='location'><img src={Location} alt='location' />Turku, Finland</li>
                <li onClick={e => listClickListener(e, 'Vaasa')} id='location'><img src={Location} alt='location' />Vaasa, Finland</li>
                <li onClick={e => listClickListener(e, 'Oulu')} id='location'><img src={Location} alt='location' />Oulu, Finland</li>
            </LocationList>
            <GuestCard style={{ display: Display.guestDisplay }}>
                <Category>Adults</Category>
                <p>Ages 13 or above</p>
                <AddGuests>
                    <img src={Minus} alt='minus icon' onClick={() => changeCountListener('SUBSCRACT')} />
                    <p>{adult}</p>
                    <img src={Plus} alt='addition icon' onClick={() => changeCountListener('ADD')} />
                </AddGuests>
                <Category>Children</Category>
                <p>Ages 13 or above</p>
                <AddGuests>
                    <img src={Minus} alt='minus icon' onClick={() => changeCountListener('SUBSCRACT-C')} />
                    <p>{child}</p>
                    <img src={Plus} alt='addition icon' onClick={() => changeCountListener('ADD-C')} />
                </AddGuests>
                </GuestCard>
            </HintGrid>
            <Button>
                <img src={SearchWhite}
                    alt='search icon' />
                <span>Search</span>
            </Button>
        </form>
    </Model>);
    console.log(formData);
    return (
        <>
            {showForm && modelComponent}
            <NumStays>
                <h1>Stays in {formData.location === 'Finland' ? '': formData.location + ','} Finland</h1>
                <p>{ Cards.length }+ stays</p>
            </NumStays>
            <CardsDiv>
            {Cards && Cards.map((card, index) =>
                <Card card={card} key={ index }/>
                )}
            </CardsDiv>

        </>
    )
}

export default FormModel
