import './Home.css'
import HomeAnimation from './HomeAnimation'


export default function Home(){
    return (
        <div id="homeContent"> 
            <HomeAnimation style={{width:'100%',height:'100%'}} />
            {/* <div className='roboto-serif-con'>
                <div className='wrapper'>
                    <div className='static-txt'><span>I am</span></div> 
                    <ul className='dynamic-txt'>
                        <li><span>Web developer</span></li>
                        <li><span>Problem solver</span></li>
                        <li><span>Engineer</span></li>
                        <li><span>Tech Enthusiast</span></li>
                    </ul>                
                </div>
            </div> */}
        </div>
    )
}