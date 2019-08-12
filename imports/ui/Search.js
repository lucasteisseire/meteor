import React from 'react'

function Search(props) {
    console.log(props)
    return (
        <input onChange={props.function} placeholder="Search by price or product" />
    )
}

export default Search