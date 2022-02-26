import React  from 'react'
import ColorIndividual from './ColorIndividual'

function AreaColores({lista}) {
    

    return (
        <section className='areaColores'>
            {lista.map((e,index)=>{
                return <ColorIndividual key={index} {...e} index={index} hexColor={e.hex} />
            })}
        </section>
    )
}

export default AreaColores