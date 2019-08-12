import React, {useEffect, useState } from 'react'
import { Tracker }from 'meteor/tracker' 
import { dumbArticles } from '../api/articles'
import Article from './Article'
import Search from './Search'

let initialQuery = false
const regex=/^[0-9]+$/;

function Articles () {
    let initialData
    const [res, setRes] = useState([])
    let [queryInput, setTest] = useState(0)
    useEffect(() => {
        Tracker.autorun(() => {
            console.log(initialQuery)
            if(!initialQuery) {
                initialData = dumbArticles.find().fetch()
                setRes(initialData)
            }
            if(initialQuery) {
                initialData = dumbArticles.find({ $or: [ { "name": { $regex: '^' + queryInput, $options: 'i' } }, {price: queryInput} ]}).fetch()
                setRes(initialData)
            }
        })
      }, [queryInput])
    const query = e => {
        e.preventDefault()
        initialQuery = true
        if (e.target.value.match(regex))
        {
            queryInput = Number(e.target.value)
            console.log(queryInput)
            setTest(queryInput)
        } else {
            queryInput = e.target.value
            setTest(queryInput)
        }
    }
    return (
        <div className="articles">
            <Search function={query} />
            <ul>
                {res.map(article => {
                    return (
                        <Article key={article.name} article={article} />
                    ) 
                })} 
            </ul>
        </div>
    )
}

export default React.memo(Articles)