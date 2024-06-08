import './About.css'; 
import img from '../Images/BruceWayne.jpg'; 
import Skill from './SkillIcon';
import data from './data';
import './Skill.css'
import img1 from './github_PNG40.png'; 
import img2 from './Leetcode.png'; 
import img3 from './Linkedine.png'; 

export default function AboutMe(){
    console.log(data);
    const handleImageClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div className='about-content'>
                <div id='photo'>
                    {/* <img src={img} alt='Bruce wayne' /> */}
                </div> 
                <div id='intro'>
                    <span className='share-tech-regular'>Sairaj Rajput</span>
                    <p className='fira-code' style={{flexWrap: 'wrap'}}>
                    <br /> 
                    I am an IT Engineer currently studying at VIIT College in Pune. I am a passionate and dedicated web developer, committed to leveraging my skills and knowledge to create impactful digital solutions. I am continuously evolving in the ever-changing tech landscape.
                    </p>
                    {/* <p style={{marginTop:'12px'}}>You can connect with me</p> */}
                    <div className='social-media'>
                        <img src={img1} onClick={() => handleImageClick('https://github.com/SairajRajput12')} alt='first' />
                        <img src={img2} onClick={() => handleImageClick('https://leetcode.com/Coder_Kira_13/')}  alt='second' />
                        <img src={img3} onClick={() => handleImageClick('https://www.linkedin.com/in/sairajrajputit/')}  alt='third' />
                    </div>
                </div>
            </div>
            <div className='skill-title'>
                <span className='share-tech-regular-skill'>Technical Skills</span>
            </div>
            <br></br>
            <div className='skill-icons' >
                {data.map(({id,name,image_path}) => {
                    {/* console.log(name)  */}
                    console.log(image_path)
                    return(
                        <Skill key={id} name={name} image_path={image_path} />
                    );
                })}
            </div>
        </div>
    )
}
