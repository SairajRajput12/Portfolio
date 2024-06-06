import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom'; 
import Button from './Button'

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

    },[open]);

    
    return createPortal(
        <dialog ref={dialog} onClose={onClose} >
            <h1>This is Project Displaying</h1>
            <button onClick={()=>onClose()}>Close Modal</button>
        </dialog>,
    document.getElementById('modal'));
}