import React from 'react';
import { Parallax } from 'react-parallax';
import imgUrl from "../images/bg-parallax-el.png";

function Detail() {

    const details = [
        {heading:'LabelCaster', subheading:'Android/iOS App', image:require('../images/eagl.png'), butttonView:"View on Google Play", butttonViewLink:'#',
    
    showCase:[
{showHeading:"1. Sign up", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"2. Login", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"3. Dashboard", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"4. Distribution", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"5. Contracts", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"6. Messages", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"7. Profile", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},


{showHeading:"1. Sign up", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"2. Login", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"3. Dashboard", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"4. Contracts", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"},
{showHeading:"", showImg1:"img1", showImg2:"img2", showImg3:"", showImg1:""},
{showHeading:"5. Profile", showImg1:"img1", showImg2:"img2", showImg3:"img3", showImg1:"img4"}
    ]
    
    
    
    },
        
        
        {heading:'Lavuro', subheading:'Find your local reliable worker.', image:require('../images/lavuro.png'), butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"", butttonWebsiteLink:''},
        
        {heading:'Sellmote', subheading:'E-commerce', image:require('../images/sellmote.png') ,butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"", butttonWebsiteLink:''},
        
        {heading:'Teamlance', subheading:'IT consultation and Services', image:require('../images/teamlance.png'),butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"View Website", butttonWebsiteLink:'https://dev.teamlance.io/'},
        
        {heading:'Eagl', subheading:'Renting golf carts just got a whole lot easier.', image:require('../images/eagl.png'),butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"", butttonWebsiteLink:''},
        
        {heading:'Immigration Library', subheading:'Study or Job Abroad',  image:require('../images/til.png'),butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"View Website", butttonWebsiteLink:''}
        
        
        ]



  return (
    <Parallax blur={0} bgImage={imgUrl} bgImageAlt="Image" strength={200}>
       
    </Parallax>
  )
}

export default Detail