import React from 'react'
import { XImage } from "@partials/Elements";

export const bannerText = <div>
		
	<h1 className='bannerTitle'><strong style={{ color: "#FFF" }}>Virtual RNs and Medical Assistants</strong></h1>
	<div className='bannerText'>HIPAA trained Virtual Medical Staff support patients, and physicians, using EMRs and other systems. They help your operations by bringing medical, wellness, communication skills and technical expertise to your  practice and clinic.</div>
	<div className='is-flex'>
		<div className='btn light-green btn-block mr-5'>
			<a className='white-text'>Learn More</a>
		</div>
		<div className='btn light-gray btn-block'>
			<a className='black-text'>How to Sign Up</a>
		</div>
	</div>
	<div className='hippa-btn'>
		
	</div>
</div>


export const section2Left = <div>
	<h1><b>Virtual RNs</b></h1>
	<p><span>VRNs are US state licensed RNs integrated with your staff. Based in the US or in the Philippines.</span></p>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Learn More</a>
	</div>
</div>


export const section3Right = <div>
	<h1><b>RPM Support Services</b></h1>
	<p><span>RPM programs and workforce solutions to support your clinics and patients</span></p>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Learn More</a>
	</div>
</div>

const style4Font1 = {
	fontSize : '35px',
	lineHeight : '1.5em',
	paddingBottom: '15px',
	textAlign : 'center'
}

const style4Font2 = {
	fontSize : '35px',
	color : 'white',
	fontWeight: 'bold'
}

export const section4Center = <div>
	<p style={style4Font1}><span style={style4Font2}>32%   of Existing Clients Increased Services in 2020</span><br /></p>
	<p><span className="font400 white-text"> We consider this the ultimate vote of confidence in our service, and governance. Our clients express their trust by using, evaluating then investing more in what we offer.</span></p>

</div>


export const section5Left = <div>
	<h1><b>Virtual Medical Assistant</b></h1>
	<p><span>US and Philippine RNs and healthcare professionals handle reception, EMR, triage, prior authorization, scribe and other practice needs.</span></p>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Learn More</a>
	</div>
</div>

export const section6Right = <div>
	<h1><b>Wellness</b></h1>
	<p><span>A remote service for home based seniors. We also integrate wellness concepts into our standard clinical practice patient care and other chronic care programs.</span></p>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Learn More</a>
	</div>
</div>


export const section7card1 = <div className="card">
  <div className="card-image">
    <figure className="image">
      <XImage src={'/images/Xilium-Telehealth-services1.png'} width={750} height={392} />
    </figure>
  </div>
  <div className="card-content">
    <div className="content">
      <h1>Telehealth Support</h1>
      <p>Telemedicine, health IT patient and staff remote support

</p>
      <br />
      <a className='btn light-blue btn-block'>Learn More</a>
      <br />
    </div>
  </div>
</div>

export const section7card2 = <div className="card">
  <div className="card-image">
    <figure className="image">
      <XImage src={'/images/Xilium-EMR-projects-services-1.png'} width={250} height={130} />
    </figure>
  </div>
  <div className="card-content">

    <div className="content">
      <h1>EMR and Special Projects</h1>
      <p>HIPAA trained staff for EMR migration, document refactoring, digital input, fax and scanned docs


</p>
      <br />
      <a className='btn light-blue btn-block'>Learn More</a>
      <br />
    </div>
  </div>
</div>

export const readsignup = <div>
	<div className='is-flex is-justify-content-center is-align-items-center'>
		<div className='read-image mr-2'>
			<img src="/images/Sign-up-icon-2.png" width="50" height="54" />
		</div>
		<div className="read-more">
			 <a href="https://xiliumvirtual.com/how-to-sign-up/">Read here</a> how the signup process works
		</div>
	</div>
</div>


export const section8Right = <div>
	<p><span>Need help in assessing network and system security in your practice?</span></p>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Learn More</a>
	</div>
</div>


export const section9Center = <div>
	<h1 style={{ color : 'white'}}> ACP, FMX, ACS – Which Conferences are You Attending?</h1>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Learn More</a>
	</div>
</div>

const titleStyle = {
	fontWeight : 'bold',
	textAlign : 'left',
	color : 'white'
}

export const section10Left = <div>
	<h1 style={titleStyle}>What’s New</h1>
	<span className={"white-text"}><b>Our </b><b>10</b><b>th </b><b>Year</b></span>
	<p><span className="font400 white-text">We’ve been working with many health service providers for 10 years with a goal to continuously adapt and develop our depth in supporting the US healthcare system. We are not just a company, but we are also a team of professionals whose continuous efforts allowed the organization to grow and prosper over the years. </span></p>
</div>