import React, { useState, useEffect } from 'react'
// NO GO HERE
const options = {
    method: 'GET',
    mode: 'no-cors'
};
const request = () => {
    fetch('https://www.ecdc.europa.eu/en/taxonomy/term/1310/feed')
        .then(res => res.json())
        .then(res => console.log(res))
}

function NewsFeed() {

    useEffect(() => {
        request()
    })

    return (
        <div>
            newsfeed
        </div>
    )

    // ...
}

// function newsFeed(){

//     useEffect(() => {

//     }, [])

//     return (
//         <div>
//             newsfeed
//         </div>
//     )
// }

export default NewsFeed
