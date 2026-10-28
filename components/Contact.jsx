
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
                        src="./images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{srthysr.phoneNumbersdthshsrfhshst}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{srthysr.emailsdga}</p>
                </div>
            </article>   
            </div>
    )

}