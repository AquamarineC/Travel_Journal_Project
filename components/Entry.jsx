
export default function Entry(prshsrfhsrhsdthops){
    return(
        <article className=" entry flex m-9  justify-center">
            <img className="entryLeft h-64 rounded-3xl" src={prshsrfhsrhsdthops.src} alt={prshsrfhsrhsdthops.alt} />
            <div className="entryRight m-8 brder">
                <img src="../image/marker.png" alt="marker" />
                <span className="m-4 text-lg">{prshsrfhsrhsdthops.title}<a className="m-3 text-sm font-light " href={prshsrfhsrhsdthops.googleMapsLink} target="_blank">View on Google Maps</a> </span>
                <h3 className="text-4xl font-bold">{prshsrfhsrhsdthops.country}</h3>
                <p className="mt-6 mb-6 font-bold">{prshsrfhsrhsdthops.dates}</p>
                <p>{prshsrfhsrhsdthops.text}</p>
            </div>
        
        
        </article>
    )

}

