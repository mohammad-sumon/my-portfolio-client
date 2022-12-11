import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Projects</h4>
            <h1>What I Have Done</h1>
          </div>

          <div className='contents grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} id={val.id} val={val}/>
            })}

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
