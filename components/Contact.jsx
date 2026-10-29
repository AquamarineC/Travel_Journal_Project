
export default function Contact(srthysr){


console.log(srthysr)
    return (
        <div className="contacts">
            <article className="contact-card">
                <img 
                    src={srthysr.gsrtsrhs}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{srthysr.srthsrtrtyytytyt}</h3>
                <div className="info-group">
                    <img 
                        src="./image/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{srthysr.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./image/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{srthysr.emailsdga}</p>
                </div>
            </article>   
            </div>
    )

}