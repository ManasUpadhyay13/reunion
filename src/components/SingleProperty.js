import React from 'react'
import styled from 'styled-components'
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

function SingleProperty({ property }) {

  const { coverPhoto, price, rooms, title, baths, area } = property;

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR'
    });
    return curr;
  };


  return (
    <SinglePropertyContainer>

      <img src={coverPhoto.url} alt="propertyImage" />

      <div className="propertyDetails">
        <p>
          <b style={{ "color": "darkblue" }}>
            {toIndianCurrency(price)} </b>
          <small>/ monthly </small>
        </p>

        <b>{title}</b>
        
        <div className="utilityDetails">

          <small className="bedrooom">
            <HotelOutlinedIcon style={{ "color": "blue", "marginRight": "3px" }} />
            {rooms} Beds
          </small>

          <small className="batrooms">
            <BathtubOutlinedIcon style={{ "color": "blue", "marginRight": "3px" }} />
            {baths} Bathrooms
          </small>

          <small className="area">
            <AppsOutlinedIcon style={{ "color": "blue", "marginRight": "3px" }} />
            {parseInt(area)} sq.ft area
          </small>

        </div>

      </div>

    </SinglePropertyContainer>
  )
}

export default SingleProperty



const SinglePropertyContainer = styled.div`
  width: 25%; 
  min-height: 55vh;
  border: 1px solid grey;
  margin : 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  cursor :pointer;
  :hover{
    box-shadow: 1px 1px 1px black;
  }

  img{
    width: 100%;
    height: 275px;
    object-fit: cover;
  }

  .propertyDetails{
    width: 100%;
    height: 40%;
    padding: 10px;
  }

  .utilityDetails{
    margin-top: 5px;
    border-top: 1px solid #000;
    width: 100%;
    display: flex;
    padding-top: 10px;
    align-items: center;
    justify-content: space-evenly;
  }
`   