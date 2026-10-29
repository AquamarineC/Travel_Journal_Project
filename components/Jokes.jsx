
import jokesData from "../jokesData"

export default function Jokes(){  

    return(
        jokesData.map((jokedata)=>{
            return(
            <>
                <h1>{jokedata.setup}</h1>
                <p>{jokedata.punchline}</p>
            </>
            )
        })
    )

}