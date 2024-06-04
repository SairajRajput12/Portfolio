import './Home.css'
import HomeAnimation from './HomeAnimation'


export default function Home(){
    return (
        <div id="homeContent"> 
            <HomeAnimation />
            <div className='roboto-serif-con'>
                <div className='wrapper'>
                    <div className='static-txt' style={{fontSize:'80px'}}>Hello I am </div> 
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