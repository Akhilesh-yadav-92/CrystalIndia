import { Dimensions } from "react-native";

const {height,width}=Dimensions.get('window')

const isSmall=width<=375

const guideLineBaseWidth=()=>{
    if(isSmall)
    {
        return 330
    }
    return 350
}

const horizontalScale=(size)=>(width/guideLineBaseWidth())*size;


const guideLineBaseHeight=()=>{

    if(isSmall)
    {
        return 550
    }
    else if(width>410){
        return 620
    }
    return 680
}



const verticalScale=(size)=>(height/guideLineBaseHeight())*size


const guideLineBaseFonts=()=>{
if(width>410)
{
return 430
}
return 400
}

const scaleFontSize=(size)=>Math.round(width/guideLineBaseFonts())*size


export {horizontalScale,verticalScale,scaleFontSize}