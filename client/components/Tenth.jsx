import React, { useEffect, useState }  from 'react'

function Tenth (props) {
    const [balls, setBalls] = useState([0,0,0])

    const {id, frameTotals} = props

    const handleChange = (evt) => {
        setBalls(curState => {
            const newState = [...curState]
            const index = evt.target.name
            newState[index] = Number(evt.target.value)
            return newState
        })
    }

    useEffect(() => {
        props.updateFramesArray(id, balls)
    },[balls])
  
    return (
        <div className='frame-container'>
            <div className='frame'>
                    <input className='ball' type='number' placeholder='0' name='0' onChange={handleChange}/>
                    <input className='ball' type='number' placeholder='0' name='1' onChange={handleChange}/>
                    <input className='ball' type='number' placeholder='0' name='2' onChange={handleChange}/>
            </div>
            <div className='total' ><h3>{frameTotals[id]}</h3></div>
         </div>
    )
}

export default Tenth

