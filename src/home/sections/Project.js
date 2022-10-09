import React from 'react'

function Project(props) {
  return (
    <>
    <div className="row" >
                <div className="one-half">
                    <div className="project-info">
                    <h2 className="heading">{props.data.heading} <span>{props.data.subheading}</span></h2>
                    <p>{props.data.description}</p>

                    <a className="btn-primary mr-15" href={props.data.butttonViewLink} target="_blank" rel="noreferrer"><span className="tilt-dot"></span> {props.data.butttonView} <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                        <path d="M1 5.09082H11" stroke="#02B154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6.91016 1L11.0011 5.09091L6.91016 9.18182" stroke="#02B154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></a> 
                        
                        {props.data.butttonWebsiteLink && props.data.butttonWebsiteLink.length? (
      <a className="btn-gost" href={props.data.butttonWebsiteLink} target="_blank" rel="noreferrer"><span className="tilt-dot"></span> {props.data.butttonWebsite} <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
      <path d="M1 5.09082H11" stroke="#02B154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M6.91016 1L11.0011 5.09091L6.91016 9.18182" stroke="#02B154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg></a>
    ):""}       
                        
    
                        {props.data.hasCase && props.data.hasCase.length? (

<p className="password-request">Case study is password protected. Please send an <a href="mailto:kroshan.kc@gmail.com?subject=Password Request to view case study">email</a> for password request.</p>
                        ):""} 
                       
                            
                    </div>
                </div>

                <div className="one-half">
                    <div className="project-image">
                        <img src={props.data.image} alt={props.data.heading} />
                    </div>
                </div>
 
                </div>
    
    </>
  )
}

export default Project