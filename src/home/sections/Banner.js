import React from 'react';
import bgGradient from  '../../images/bg-gradient.svg';

 function Banner() {
  return (
    <section className="banner">
        <div className="bg-svg">
            
            <img src={bgGradient} alt="BG"/>
        </div>
        <div className="container">
<div className="main-banner">
            <div className="banner-heading">
                <h1>Hi, I'm a <span className="ui-tilt"><span className="tilt-dot"></span>UX/UI</span> designer</h1>
                <p>I’m a UI/UX Designer with over six years of experience in user research, wireframing, design systems, design flows, prototyping and visual designs for digital products.
                </p>
            </div>
            <div className="banner-img">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="295" height="422" viewBox="0 0 295 422" fill="none">
                    <rect className="dash-animation" x="1" y="1" width="292.301" height="420" rx="146.15" stroke="#02B154" strokeWidth="2" strokeMiterlimit="3.8637" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="154 154"></rect>
                    <rect x="9.30273" y="9.30273" width="275.695" height="403.395" rx="137.848" fill="#DDDDDD"></rect>
                    <rect x="9.30273" y="9.30273" width="275.695" height="403.395" rx="137.848" fill="url(#pattern0)"></rect>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_85_2" transform="translate(0 -0.0409828) scale(0.000931966 0.000655301)"></use>
                    </pattern>
                    </defs>
                    </svg>
            
            </div>
            </div>
        </div>
    </section>
  )
}
export default Banner;