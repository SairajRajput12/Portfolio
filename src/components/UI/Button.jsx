import './Modal.css'

export default function Button({className='',children,onClick}){
    return(
        <button className={className} onClick={() => onClick()}>{children}</button>
    )
}