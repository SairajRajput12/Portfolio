import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom'; 
import Button from './Button'; 
import './Modal.css'

export default function Modal({open,onClose}){
    
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
        <dialog className='mdo' ref={dialog} open={open} onClose={onClose} >
            <div className='project-content'>
                <h1 className='heading'>Project Heading</h1>
                <div> 
                    {/* here i will add sliding animation of images */}
                    <img src='...' alt='another' />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolores adipisci dicta quis, ex eum veniam totam quod qui facere est vel repudiandae delectus minima ratione nostrum, ipsum aliquid praesentium nisi enim consequuntur dolorum temporibus doloribus. Enim, aliquid tenetur dolorem vero laborum esse deleniti aut iusto alias obcaecati voluptas est?
</p>
                <Button className='button1' onClick={onClose}>Close Modal</Button>
            </div>
        </dialog>,
    document.getElementById('modal'));
}