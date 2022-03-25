// Code your solution in this file!
const headquarters = 42
function distanceFromHqInBlocks(block) {
    if (block >= headquarters) {
        return block - headquarters
    }
    else {
        return headquarters - block
    }
}
function distanceFromHqInFeet(block) {
    const numOfBlocks = distanceFromHqInBlocks(block) * 264
    return numOfBlocks
}
function distanceTravelledInFeet(startBlock,endBlock) {
    let distance = " "
    if (startBlock < endBlock) {
        distance = (endBlock - startBlock) * 264
    }
    else {
         distance = (startBlock - endBlock) * 264
    }
    return distance
}

function calculatesFarePrice (start,destination) {
    let fare
    const distance = distanceTravelledInFeet(start,destination)
    if (distance < 400) {
        fare = 0
    }
    else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * .02
    }
    else if (distance > 2000 && distance < 2500) {
        fare = 25   
    }
    else if (distanceTravelledInFeet(start,destination) > 2500){
        return `cannot travel that far`
    }
    return fare
}