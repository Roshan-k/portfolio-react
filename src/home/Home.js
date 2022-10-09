import React from 'react';
import './home.css';
import Banner from './sections/Banner';
import Project from './sections/Project';






 function Home() {
const projects = [
{heading:'LabelCaster', subheading:'Musci Distribution APP', description:'Labelcaster is at this point a companion app to the desktop version found at app.labelcaster.com so it is password protected. If you apply for an account and are approved you can use the app for seeing royalties, signing contracts and getting cash transferred.', image:require('../images/eagl.png'), butttonView:"View Project", butttonViewLink:'./Details', butttonWebsite:"View Case Study", butttonWebsiteLink:'#', hasCase:"Yes" },


{heading:'Lavuro', subheading:'Find your local reliable worker.', description:'To-do list never getting shorter? Take the burden off and find the help you need on Lavuro. Simply let people know what you need done by posting a “lavuro”, then choose the offer that suits you best. Sort out the details while we hold the payment securely for you, then once it’s done you can release it to the Tasker.', image:require('../images/lavuro.png'), butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"", butttonWebsiteLink:''},

{heading:'Sellmote', subheading:'E-commerce', description:'Why do you want to hop from one store to another in search of the fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy.', image:require('../images/sellmote.png') ,butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"", butttonWebsiteLink:''},

{heading:'Teamlance', subheading:'IT consultation and Services', description:'Teamlance is a dedicated software development company that has a deep talent pool in software development and design. We make building products easy for you.', image:require('../images/teamlance.png'),butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"View Website", butttonWebsiteLink:'https://dev.teamlance.io/'},

{heading:'Eagl', subheading:'Renting golf carts just got a whole lot easier.', description:'The .EAGL app allows golfers to rent a golf cart for their next round in a matter of seconds with a few taps on their phone, letting them focus on what matters the most; their game. Register your account and use the EAGL app to make your next golf cart rental!', image:require('../images/eagl.png'),butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"", butttonWebsiteLink:''},

{heading:'Immigration Library', subheading:'Study or Job Abroad', description:'The Immigration Library is a subscription-based community that provides well-research content for study & work in USA, Canada, UK, Australia, New Zealand and more.', image:require('../images/til.png'),butttonView:"View Project", butttonViewLink:'#', butttonWebsite:"View Website", butttonWebsiteLink:''}


]


  return (
    <>
    <Banner />
    
    
    
  
    <section className="project-single">
        <div className="container">
            



    {
      
      projects.map((item,i)=> <Project data={item} key={i} />)
      
    }

        </div>
        
    </section>

    
    
    </>
  )
}
export default Home;