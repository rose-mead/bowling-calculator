import React, {useEffect, useState} from 'react'
import Frame from './Frame'
import { scoreFrame, scoreGame } from './score'

function Board () {
    // array of all frames
    const [frames, setFrames] = useState([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]])

    // totals for individual frames
    const [frameTotals, setFrameTotals] = useState([0,0,0,0,0,0,0,0,0,0])

    let total = scoreGame(frames)

    // update frames array
    const updateFramesArray = (id, balls) => {
        setFrames(curFrames => {
            const updatedFrames = [...curFrames]
            updatedFrames[id] = balls
            return updatedFrames
        })
    }

    // score frames and update totals
    const scoreFrames = () => {
        const totals = frames.map((frame, i) => {
            const isTenth = i == 9
            return scoreFrame(frame, frames[i+1], frames[i+2], isTenth)
        }, 0)
        setFrameTotals(totals)
    }

    useEffect(() => {
        scoreFrames(frames)
    }, [frames])


    const renderFrames = () => {
        return Array(10).fill().map((e, i) => <Frame key={i} id={i} updateFramesArray={updateFramesArray} frameTotals={frameTotals} frames={frames}/>)
    }

    return (
        <>
        <h1>Bowling calculator</h1>
        <div className='board'>
            {renderFrames()}
        </div>
        <div className='total'>
            <h2>Total bowling score: {total}</h2>
        </div>
        </>
    )
}

export default Board