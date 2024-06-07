import { useState } from 'react';
import Modal from '../UI/Modal';
import './Project.css'; 
import ProjectD from './ProjectData';

export default function Project(){
    const [showModal,setShowModal] = useState(false); 
    

    function displayModal(){
        console.log('modal displayed');
        console.log(showModal)
        setShowModal(showModal => !showModal);
    }

    return (
        <>
            <div className='project-content'>
                <h1 className='fira-code'>Project Dashboard</h1>
            </div>
            <div className='project-cards'>
                <div className='project-details' onClick={displayModal} >
                    <h1 className='fira-code'>First Project</h1>
                </div>
                <div className='project-details' onClick={displayModal} >
                    <h1 className='fira-code'>Second Project</h1>
                </div>
                <div className='project-details' onClick={displayModal} >
                    <h1 className='fira-code'>Third Project</h1>
                </div>
            </div>
            <Modal open={showModal} data={ProjectD} onClose={displayModal} />
        </>
    )
}