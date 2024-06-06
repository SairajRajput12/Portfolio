export default function Button({className='',children,onClose}){
    return(
        <button className={className} onClick={() => onClose()}>{children}</button>
    )
}