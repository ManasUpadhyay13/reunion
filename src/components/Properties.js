import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { baseUrl, fetchApi } from '../utils/fetchData'
import SingleProperty from './SingleProperty'

function Properties({ filterValues }) {

  const { minPrice , roomsMin , sort , categoryExternalID } = filterValues

  const [propertiesForRent, setPropertiesForRent] = useState([])

  async function getData() {

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9&priceMin=${minPrice}&roomsMin=${roomsMin}&sort=${sort}&categoryExternalID=${categoryExternalID}`)
    setPropertiesForRent(data.hits)

  }


  useEffect(() => {
    getData();
  }, [])

  
  useEffect(() => {
    getData();
  }, [ minPrice , roomsMin , sort , categoryExternalID ])


  return (
    <PropertiesContainer>
      {
        propertiesForRent.map((property) => {
          return (
            <SingleProperty property={property} key={property.id} /> 
            

          )
        })
      }
    </PropertiesContainer>
  )
}

export default Properties



const PropertiesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
`

