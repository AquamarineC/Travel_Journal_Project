
export default function Jokes(props){

    return(
        <>
            
            {props.setup? <p>{props.setup}</p> : <p>This line has no setup</p>}
            <p className="border">{props.punchline}</p>
            <hr />
        </> 
    )

}