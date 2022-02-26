import React, {useState} from 'react'
import { useEffect } from 'react'
import rgbToHex from '../utils'

function ColorIndividual({rgb, weight, index, hexColor}) {
    const [alert, setAlert]=useState(false)
    const bcg= rgb.join(",")
    const hex= rgbToHex(...rgb)
    const hexValue=`#${hexColor}`

    useEffect(()=>{
        const timeout= setTimeout(()=>{
            setAlert(false)
        },3000)
        return ()=>clearTimeout(timeout)
    },[alert])

    return (
        <article
            className={`color ${index>10 && "color-light"}`} style={{background:`rgb(${bcg})`}}
            onClick={()=>{setAlert(true)
            navigator.clipboard.writeText(hexValue)}}>
            <p className='percentage-value'>{weight}%</p>
            <p className='color-value'>{`#${hexColor}`}</p>
            <p className={`alert`} style={!alert?{display:"none"}:{display:"block"}}>Copied to clipboard!</p>
        </article>
    )
}

export default ColorIndividual