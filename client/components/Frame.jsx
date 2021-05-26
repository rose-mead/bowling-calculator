import React, {useEffect, useState} from 'react'

function Frame ({id, frameTotals, updateFramesArray}) {
    const [balls, setBalls] = useState([0,0,0])

    const isStrike = balls[0] === 10 && !isSpare
    const isSpare = balls[0] + balls[1] >= 10
    const isNinth = id == 9

    const handleChange = (evt) => {
        setBalls(curState => {
            const newState = [...curState]
            const index = evt.target.name
            const value = Number(evt.target.value)

            // stop inputs going above 10 or below 0 
            newState[index] = value
            const frameTotal = newState[0] + newState[1]
            if(value < 0){
                newState[index] = 0
                return newState
            }
            if (frameTotal > 10 & !isNinth || frameTotal < 0 & !isNinth) {
                newState[index] = 0
                return newState
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
        if(isNinth){
            return  <input className='ball' type='number'  name='2' value={balls[2]} onChange={handleChange}/>
        }
    }

    return (
        <div className='frame-container'>
            <div className='strike-spare-text'>
                <h3 >{renderStrikeSpareText()}</h3>
            </div>
        <div className='frame'>
                <input className={`ball ${renderStrikeSpareText()}`} value={balls[0]}  type='number' name="0" onChange={handleChange}/>
                <input className={`ball ${renderStrikeSpareText()}`} value={balls[1]}  type='number' name="1" onChange={handleChange}/>
                {renderBonusBallOnTenth()}
        </div>
        <div className='frame-total'><h3>{frameTotals[id]}</h3></div>
        </div>
    )
}


export default Frame