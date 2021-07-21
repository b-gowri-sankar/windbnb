import React from 'react'
import styled, { keyframes } from 'styled-components'
import Close from '../../Images/close.svg'
import SearchWhite from '../../Images/searchWhite.svg'
import Location from '../../Images/location.svg'
import Plus from '../../Images/add.svg'
import Minus from '../../Images/minus.svg'

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
    /* margin-top: 15px; */
`;

const FormModel = () => {
    return (
        <Model>
            <SearchIcon>
                <p>Edit your Search:</p>
                <img src={Close} alt='close icon' />
            </SearchIcon>
            <form>
                <LocationSlab>
                    <label for='location'>location</label>
                    <input type='text' value='' id='location' placeholder='Add Location'/>
                </LocationSlab>
                <LocationSlab>
                    <label for='guest'>guest</label>
                    <input type='text' value='0' id='guest' disabled/>
                </LocationSlab>
                <LocationList>
                    <li><img src={Location} alt='location' />Helsinki, Finland</li>
                    <li><img src={Location} alt='location' />Turku, Finland</li>
                    <li><img src={Location} alt='location' />Vaasa, Finland</li>
                    <li><img src={Location} alt='location' />Oulu, Finland</li>
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
        </Model>
    )
}

export default FormModel
