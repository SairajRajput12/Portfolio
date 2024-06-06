import './Project.css'; 

export default function Project(){
    function displayModal(){
        console.log('modal displayed');
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
        </>
    )
}