
export default function Entry(){
    return(
        <div className="flex mt-8  justify-center">
            <img className="entryLeft " src="https://scrimba.com/links/travel-journal-japan-image-url" alt="jap pic" />
            <div className="entryRight m-8">
                <img src="../img/marker.png" alt="marker" />
                <span className="m-4 text-lg">Japan <a className="m-3 text-sm font-light " href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9" target="_blank">View on Google Maps</a> </span>
                <h3 className="text-5xl font-bold">Mount Fuji</h3>
                <p className="mt-6 mb-6 font-bold">12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        
        
        </div>
    )

}

