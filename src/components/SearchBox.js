import React, { useState } from 'react'
import styled from 'styled-components'
import { filterData } from '../utils/filterData'
import Properties from './Properties'





function SearchBox() {

    const [filterValues, setFilterValues] = useState({
        minPrice: "",
        roomsMin: "",
        sort: "",
        categoryExternalID: "",
    })


    const handleInput = (e) => {

        const {name , value} = e.target

        setFilterValues((prev) => {
            return { ...prev , [name] : value }
        })
    }

    return (
        <>
            <Container>

                <Heading>
                    Search Properties to rent
                </Heading>
                <QueriesConttainer>
                    {
                        filterData.map((filter) => {
                            return (
                                <SingleQueryContainer>
                                    <p style={{ "fontWeight": "bold" }}>{filter.placeholder}</p>

                                    <Select
                                        id="dropdown-basic-button"
                                        key={filter.query}
                                        name={filter.query}
                                        onChange={(e) => { handleInput(e) }}
                                    >

                                        {
                                            filter.options.map((option) => {
                                                return (
                                                    <option
                                                        key={option.name}
                                                        value={option.value}
                                                    >
                                                        {option.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </Select>
                                </SingleQueryContainer>
                            )
                        })
                    }
                </QueriesConttainer>
            </Container>
            {
                <Properties
                    filterValues={ filterValues}
               />

            }
        </>
    )
}

export default SearchBox



const Container = styled.div`
 width: 100%;
 height: 30vh;
 padding: 30px;
 margin-top: 20px;
`

const Heading = styled.h2`

`

const QueriesConttainer = styled.div`
    height: 80%;
    width: 100%;
    border: 1px solid gray;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const SingleQueryContainer = styled.div`
    flex : 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    border : 1px solid lightgray;
    border-radius : 10px;
    padding: 10px;
    margin: 5px;
    background-color: white;
`

const Select = styled.select`
    cursor : pointer;
    padding : 10px;
    border-radius: 5px;
`