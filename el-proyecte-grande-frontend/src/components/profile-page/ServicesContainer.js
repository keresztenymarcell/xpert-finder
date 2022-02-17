import React from 'react'
import Service from './Service'

const ServicesContainer = ({services}) => {
    return (
    <>  
    <h1>Services</h1>
    <div className="services">
        {services.map((service) => {
            return <Service key={service.id} service={service}/>
        })}               
    </div>
    </>
    )
}

export default ServicesContainer
