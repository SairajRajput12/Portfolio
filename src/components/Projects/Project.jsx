import { useRef, useState } from 'react';
import Modal from '../UI/Modal';
import './Project.css'; 
import ProjectD from './ProjectData';
import Card from './Card';

export default function Project(){
    const [showModal,setShowModal] = useState(false); 
    const [activeIndex,setActiveIndex] = useState(null); 
    const data = (activeIndex === null ? [] : ProjectD[activeIndex]); 
    console.log(data); 
    function setInd(Name){
        setActiveIndex(Name); 
    }

    function displayModal(){
        setShowModal(showModal => !showModal);
    }

    return (
        <div className='project'>
            <div className='project-content'>
                <h1 className='fira-code'><b>Project Dashboard</b></h1>
            </div>
            <div className='project-cards'>
                {
                    ProjectD.map(({Name,Description,img},index) => {
                        console.log(index)
                        return(
                            <Card key={index} ind={index} clickB={setInd} displayModal={displayModal} Name={Name} />
                        );
                    })
                }
            </div>
            {showModal && <Modal open={showModal} data={data} onClose={displayModal} />}
        </div>
    )
}