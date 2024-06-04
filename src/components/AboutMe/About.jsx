import './About.css'; 
import img from '../AboutMe/BruceWayne.jpg';
export default function AboutMe(){
    return (
        <>
            <div className='about-content'>
                <div id='photo'>
                    <img src={img} alt='Bruce wayne' />
                </div> 
                <div id='intro'>
                    <span className='share-tech-regular'>Sairaj Rajput</span>
                    <p>
                    <br /> 
                    I am a passionate and dedicated web developer and IT student, committed to leveraging my skills and knowledge to create impactful digital solutions. My goal 
                    is to stay at the forefront of technological advancements while continuously evolving in the ever-changing tech landscape. I thrive on challenges and eagerly 
                    embrace new opportunities to learn and grow. My academic background in IT has provided me with a solid foundation, and my hands-on experience in web development 
                    has honed my practical skills. I am enthusiastic about collaborating with others to drive innovation and deliver high-quality digital experiences.
                    </p>
                </div>
            </div>
            <div  style={{color:'white',display:'flex',justifyContent:'center',marginTop:'25px',marginLeft:'50px',marginRight:'50px',width:'auto',height:'auto',fontSize:'55px',fontWeight:'500'}}>
                <span className='share-tech-regular'>Skills</span>
            </div>
        </>
    )
}
/*
4
3 
3 
3
3 
4
2
3
2
2
*/