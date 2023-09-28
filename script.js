
const block=document.querySelector(`.block`);
console.dir(block);

function getRandomInt(min=0, max=255) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * (max - min) + min );
}
const changeColor=()=>{
    let firstCall=getRandomInt();
    let secondCall=getRandomInt();
    let thirdCall=getRandomInt();
    return `rgb(${firstCall},${secondCall},${thirdCall})`;
}


setInterval( ()=> block.style.backgroundColor=`${changeColor()}`, 500 )

const moveBlock=document.querySelector(`#moveBlock`);
moveBlock.style.left=0;
moveBlock.style.top=0;
console.dir(moveBlock)

const bodyHeight = document.body.clientHeight;
const bodyWidth= document.body.clientWidth;
console.log(bodyWidth)
console.log(bodyHeight);


function getRandomPosition(min=0, max=800) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * (max - min) + min );
}

function getRandomPositionHeight(min=0, max=bodyHeight) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * (max - min) + min );
}


const blockMoving=setInterval(()=>{
    let randomStepLeft=getRandomPosition();
    let newRightPosition=moveBlock.offsetLeft+moveBlock.clientWidth+randomStepLeft;
    let newLeftPosition;
    let maxLeftPosition=bodyWidth-moveBlock.clientWidth;

    if ( newRightPosition> maxLeftPosition) {
        newLeftPosition=parseInt(moveBlock.style.left)-moveBlock.clientWidth+`px`;
        moveBlock.style.left=newLeftPosition;
    }
    else {
        newLeftPosition=parseInt(moveBlock.style.left)+randomStepLeft+`px`;
        moveBlock.style.left=newLeftPosition;
    }

},1000 )


const blockMoveDown=setInterval(
    ()=> {
        let newTopPosition = 0
        let randomStepHeight = getRandomPositionHeight()
        let newBottomPosition = moveBlock.offsetTop + moveBlock.clientHeight + randomStepHeight;
        let maxHeightPosition = bodyHeight - moveBlock.clientHeight;
        console.log( maxHeightPosition )

        if ( newBottomPosition > maxHeightPosition ) {
            moveBlock.style.top = parseInt( moveBlock.style.top ) - moveBlock.clientHeight + `px`;
        } else
        {
            newTopPosition = parseInt( moveBlock.style.top ) + randomStepHeight + `px`;
            moveBlock.style.top = newTopPosition;
        }
    }
 , 1000
)


