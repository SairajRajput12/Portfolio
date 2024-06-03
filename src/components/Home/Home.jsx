import Lottie from 'lottie-react'
import './Home.css'
import x from './trail_3.json'; 


export default function Home(){
    return (
        <div id="homeContent"> 
            <div className='animation'>
                <Lottie animationData={x} style={{ height: "auto", width: "800px" }}/>
            </div>
            <div className='roboto-serif-con'>
                <div className='wrapper'>
                    <div className='static-txt' style={{fontSize:'70px'}}>Hello I am </div> 
                    <ul className='dynamic-txt'>
                        <li><span>Web developer</span></li>
                        <li><span>Problem solver</span></li>
                        <li><span>Engineer</span></li>
                        <li><span>Tech Enthusiast</span></li>
                    </ul>                
                </div>
            </div>
        </div>
    )
}