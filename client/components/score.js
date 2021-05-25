function scoreFrame(frame, nextFrame, nextNextFrame, isTenth) {
    const isStrike = frame[0] == 10
    const isSpare = frame[0] + frame[1] == 10 && !isStrike
    const frameTotal = frame[0] + frame[1]

    if(isTenth) {
        return scoreTenthFrame(frame)
    } else if(isStrike) {
        return scoreStrikeFrame(frame, nextFrame, nextNextFrame)
    } else if (isSpare) {
        return scoreSpareFrame(frame, nextFrame)
    } else return frameTotal

}

function getSummedFrames(frameId, frame, nextFrame, nextNextFrame, isTenth) {
    const isStrike = frame[0] == 10
    const isSpare = frame[0] + frame[1] == 10 && !isStrike
    const frameTotal = frame[0] + frame[1]

    if(isTenth) {
        return frame[0] + frame[1] + frame[2]
    } else if(isStrike) {
        return scoreStrikeFrame(frame, nextFrame, nextNextFrame)
    } else if (isSpare) {
        return scoreSpareFrame(frame, nextFrame)
    } else return frame[0] + frame[1]

}

function scoreSpareFrame(frame, nextFrame) {
    return frame[0] + frame[1] + nextFrame[0]
}

function scoreStrikeFrame(frame, nextFrame, nextNextFrame) {
    const isNinthFrame = !nextNextFrame
    const isDoubleStrike = nextFrame[0] == 10

    if(isNinthFrame){
    console.log('is ninth')

        return frame[0] + frame[1] + nextFrame[0] + nextFrame[1]
    } else if(isDoubleStrike){
        return frame[0] + frame[1] + nextFrame[0] + nextNextFrame[0]
    } else {
        return frame[0] + frame[1] + nextFrame[0] + nextFrame[1]
    }
}


function scoreTenthFrame(frame) {
    return frame.reduce((total, ball) => total + ball)
}



function scoreGame(frames) {
    return frames.reduce((total, frame, i) => {
        const isTenth = i == 9
        return total + scoreFrame(frame, frames[i+1], frames[i+2], isTenth)
    }, 0)
}

module.exports = {
    scoreFrame,
    scoreTenthFrame,
    scoreGame,
    getSummedFrames
}