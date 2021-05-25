import React, {useEffect, useState} from 'react'

function Frame ({id, frameTotals, updateFramesArray}) {
    const [balls, setBalls] = useState([0,0])

    const isStrike = balls[0] === 10 && !isSpare
    const isSpare = balls[0] + balls[1] >= 10

    const handleChange = (evt) => {
        setBalls(curState => {
            const newState = [...curState]
            const index = evt.target.name
            newState[index] = Number(evt.target.value)
            if(Number(evt.target.value) > 10 ){
                console.log('too high')
            }
            return newState
        })
    }

    useEffect(() => {
        updateFramesArray(id, balls)
    }, [balls]) 

    const renderStrikeSpareText = () => {
        if(isStrike){
            return 'strike'
        } else if(isSpare){
            return 'spare'
        } else return ''
    }

    const renderBonusBallOnTenth = () => {
        if(id == 9){
            return  <input className='ball' type='number' placeholder='0' name='2' onChange={handleChange}/>
        }
    }

    return (
        <div className='frame-container'>
            <div className='strike-spare-text'>
                <h3 >{renderStrikeSpareText()}</h3>
            </div>
        <div className='frame'>
                <input className={`ball ${renderStrikeSpareText()}`} placeholder='0' type='number' name="0" onChange={handleChange}/>
                <input className={`ball ${renderStrikeSpareText()}`} placeholder='0' type='number' name="1" onChange={handleChange}/>
                {renderBonusBallOnTenth()}
        </div>
        <div className='frame-total'><h3>{frameTotals[id]}</h3></div>
        </div>
    )
}


export default Frame