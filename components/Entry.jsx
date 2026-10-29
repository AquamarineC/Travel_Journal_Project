
export default function Entry(props){
    return(
        <article className=" entry flex mt-8  justify-center">
            <img className="entryLeft h-70 rounded-3xl" src={props.img.src} alt={props.img.alt} />
            <div className="entryRight m-8 brder">
                <img src="../image/marker.png" alt="marker" />
                <span className="m-4 text-lg">{props.title}<a className="m-3 text-sm font-light " href={props.googleMapsLink} target="_blank">View on Google Maps</a> </span>
                <h3 className="text-4xl font-bold">{props.country}</h3>
                <p className="mt-6 mb-6 font-bold">{props.dates}</p>
                <p>{props.text}</p>
            </div>
        
        
        </article>
    )

}

