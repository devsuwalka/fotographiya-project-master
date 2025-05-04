import React from 'react'

const HaldiCard = (props) => {
    return (
        <div>
            <div className=" h-img ">
                <img src={props.image} />
            </div>
        </div>
    )
}

export default HaldiCard
