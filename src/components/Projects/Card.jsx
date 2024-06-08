export default function Card({ displayModal, Name, clickB,ind }) {
    const handleClick = () => {
        clickB(ind);
        displayModal();
    };

    return (
        <div className='project-details' onClick={handleClick}>
            <h1 className='fira-code'><b>{Name}</b></h1>
        </div>
    );
}
