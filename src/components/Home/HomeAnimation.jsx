import Lottie from 'lottie-react'
import x from '../AnimationFiles/trail_3.json'; 

export default function HomeAnimation(){
    return(
        <div className='animation'>
            <Lottie animationData={x} style={{ height: "auto", width: "800px" }}/>
        </div>
    );
}