import React from 'react'

const Service = ({service}) => {
    return (
        <div className="service">
          <h3>{service.name}</h3>
          <p>{service.description}</p>  
          <h4>{service.price}</h4>
        </div>
    )
}

export default Service
