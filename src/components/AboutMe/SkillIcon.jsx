export default function Skill({data}){
    
    return(
        <div>
            {data.map(({id,name,image_path}) => {
                return(
                    <img src={image_path} key={name} id={id}  alt={name} />
                )
            })}
        </div>
    )
}