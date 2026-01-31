import React from 'react'
import { Card } from './card'

const cardValues=[
    "🍇","🍓","🍉","🍒","🍎","🍊","🥕","🍍",
    "🍇","🍓","🍉","🍒","🍎","🍊","🥕","🍍",
  ]

const Grid = () => {
  return (
    <>
    
    <div className="cards-grid w-1/3 h-10 mx-auto p-4 grid grid-cols-4 gap-4">
        {cardValues.map((card, index)=>(
            <Card key={index} card={card} />
))}
    </div>
    
    </>
  )
}

export default Grid
