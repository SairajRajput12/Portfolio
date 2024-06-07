import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'; 
import Button from './Button'; 
import './Modal.css'; 
import styled, { keyframes } from "styled-components";


const changeImage = (img1, img2, img3, img4,img5) => keyframes`
        0% {
            background-image: url(${img1});
        }
        25% {
            background-image: url(${img2});
        }
        50% {
            background-image: url(${img3});
        }
        75% {
            background-image: url(${img4});
        }
        100% {
            background-image: url(${img1});
        }
    `;

    // Define styled component
    const ProjectImages = styled.div`
        width: 595px;
        height: 275px;
        border: 2px aqua solid;
        background-size: 100% 100%;
        animation: ${(props) => changeImage(props.img1, props.img2, props.img3, props.img4)} 25s linear infinite;
    `;



export default function Modal({ open, onClose, data }) {

    const dialog = useRef(); 
    console.log(data.images); 

    let {img1,img2,img3,img4,img5} = data.images; 
    let projectTech = data.tech; 
    console.log(projectTech);

    const openRepository = () => {
        window.open(data.url, '_blank');
    };


    useEffect(() => {
        const modal = dialog.current; 
        if (open && !modal.open) {
            modal.showModal(); 
        } else if (!open && modal.open) {
            modal.close();
        }

    }, [open]);

    
    return createPortal(
        <dialog className={`mdo${!open ? '-fade-out' : ''}`} ref={dialog} open={open} onClose={onClose}>
            <div className='project-content'>
                <h1 className='heading'>{data.Name}</h1>
                <div>
                    <div className='project-image'> 
                        {/* <ProjectImages img1={img1} img2={img2} img3={img3} img4={img4} img5={img5 ? img5 : img1}></ProjectImages> */}
                        <ProjectImages img1={img1} img2={img2} img3={img3} img4={img4} />
                        <div className='tech-used'>
                            <div className='Heading' >
                                <span className='fira-code'>Tools used</span>
                            </div>
                            <div className='list' >
                                <ul className="custom-list">
                                    {
                                        projectTech.map((items,index) => {
                                            return(
                                                <li key={index}>{items}</li>
                                            ); 
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p>{data.Description}</p>
                <div className='buttons'>
                    <Button className='button1' onClick={onClose}>Close Modal</Button>
                    <Button className='button1' onClick={openRepository}>Repository</Button>
                </div>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
}

/*
import { useEffect, useRef, useState } from 'react';
import {createPortal} from 'react-dom'; 
import Button from './Button'; 
import './Modal.css'; 
import styled, { keyframes } from 'styled-components';
// import img12 from '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143651.png';

export default function Modal({open,onClose,data}){
    const dialog = useRef(); 
    const [imageUrls, setImageUrls] = useState({
        img1: '',
        img2: '',
        img3: '',
        img4: ''
    });
    
    useEffect(() => {
        const modal = dialog.current; 
        if(open){
            modal.showModal(); 
        }
        else {
            modal.close();
        }

        setImageUrls({
            img1: '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143651.png',
            img2: '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143640.png',
            img3: '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143736.png',
            img4: '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143820.png'
        });
      

    },[]);
    
    const changeImage = (img1, img2, img3, img4) => keyframes`
        0% {
        background-image: url(${img1});
        }
        25% {
        background-image: url(${img2});
        }
        50% {
        background-image: url(${img3});
        }
        75% {
        background-image: url(${img4});
        }
        100% {
        background-image: url(${img1});
        }
    `;

    // Define styled component
    const ProjectImages = styled.div`
        width: 595px;
        height: 275px;
        border: 2px aqua solid;
        background-size: 100% 100%;
        animation: ${(props) => changeImage(props.img1, props.img2, props.img3, props.img4)} 20s linear infinite;
    `;




    

    
    return createPortal(
        <dialog className={`mdo${!open ? '-fade-out' : ''}`} ref={dialog} open={open} onClose={onClose} >
            <div className='project-content'>
                <h1 className='heading'>Project Heading</h1>
                <div>
                    <div className='project-image'> 
                        {/* here i will add sliding animation of images */
                    /*}
                        {/* <div className='project-images'>
                            {/* <img src={img12} alt='another' /> 
                        </div> }*/
                        /*
                        <ProjectImages {...imageUrls}></ProjectImages>
                        <div className='tech-used'>Tech used</div>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolores adipisci dicta quis, ex eum veniam totam quod qui facere est vel repudiandae delectus minima ratione nostrum, ipsum aliquid praesentium nisi enim consequuntur dolorum temporibus doloribus. Enim, aliquid tenetur dolorem vero laborum esse deleniti aut iusto alias obcaecati voluptas est?
</p>
                <Button className='button1' onClick={onClose}>Close Modal</Button>
            </div>
        </dialog>,
    document.getElementById('modal'));
}
*/

/*
import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom'; 
import Button from './Button'; 
import './Modal.css'; 
import img12 from '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143651.png';
import styled, { keyframes } from "styled-components";


export default function Modal({open,onClose,data}){
    
    const dialog = useRef(); 
    useEffect(() => {
        const modal = dialog.current; 
        if(open){
            modal.showModal(); 
        }
        else {
            modal.close();
        }

    },[]);

    
    return createPortal(
        <dialog className={`mdo${!open ? '-fade-out' : ''}`} ref={dialog} open={open} onClose={onClose} >
            <div className='project-content'>
                <h1 className='heading'>Project Heading</h1>
                <div>
                    <div className='project-image'> 
                        <div className='project-images'>
                        </div>
                        <div className='tech-used'>Tech used</div>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolores adipisci dicta quis, ex eum veniam totam quod qui facere est vel repudiandae delectus minima ratione nostrum, ipsum aliquid praesentium nisi enim consequuntur dolorum temporibus doloribus. Enim, aliquid tenetur dolorem vero laborum esse deleniti aut iusto alias obcaecati voluptas est?
</p>
                <Button className='button1' onClick={onClose}>Close Modal</Button>
            </div>
        </dialog>,
    document.getElementById('modal'));
}
*/