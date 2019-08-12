import React from 'react'

function Article (props) {
    return (
        <li>
            <img src={props.article.imageURL}/>
            <h2>{props.article.name}</h2>
            <p>{props.article.price} euros</p>
            <p className="description">{props.article.information}</p>
        </li>
    )
}

export default Article