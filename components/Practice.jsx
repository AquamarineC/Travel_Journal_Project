
export default function Practice(){
        const jsx = ["pokemon","veefriends", "personalbar", "monster"]


    return(
        jsx.map((x) => {
            
            return    <h1>{x}</h1>
            
        })
    )
}