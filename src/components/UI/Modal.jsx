import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom'; 


export default function Modal(){
    const dialog = useRef(); 
    useEffect(() => {
        const modal = dialog.current; 
        if(open){
            modal.showModal(); 
        }
        return () => {
            modal.close(); 
        }
    },[open]);
    return createPortal(
        <dialog ref={dialog}  onClose={onClose}  >
            <h1>This is Project Displaying</h1>
        </dialog>,
    document.getElementById('modal'));
}