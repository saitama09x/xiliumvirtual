import React from 'react'
import styles from '@css/vma.module.css'
import { XImage, XCard, HomeSlider } from "@partials/Elements";


const section1Banner = <div>

<h1 className={styles.bannerTitle}>Remote Patient Monitoring</h1>
<p className={styles.bannerText}>A trained RPM workforce that supports both acute and chronic care patients which improves medical outcomes and standards of living.</p>

</div>

const section3Content = {

	icon1 : {
		img : '/images/patient/rpm-icon1.png',
		content : <div className="has-text-centered">
			<label>Consent and Enrollment</label>
		</div>
	},
	icon2 : {
		img : '/images/patient/rpm-icon1.png',
		content : <div className="has-text-centered">
			<label>Setup and Device Support</label>
		</div>
	},
	icon3 : {
		img : '/images/patient/rpm-icon1.png',
		content : <div className="has-text-centered">
			<label>Physician Support</label>
		</div>
	},
	icon4 : {
		img : '/images/patient/rpm-icon1.png',
		content : <div className="has-text-centered">
			<label>Monitoring</label>
		</div>
	},
	icon5 : {
		img : '/images/patient/rpm-icon1.png',
		content : <div className="has-text-centered">
			<label>Code for Billing</label>
		</div>
	}

}

const section4Content = {

	con1 : {
		img : '/images/patient/Cloud-Service-Providers-and-Device-Manufacturers.png',
		content : <div>
			<h2>RPM Device Manufacturers and System Provider</h2>
			<p>Full RPM staff supporting your software and devices in setup, troubleshooting, standard patient monitoring. Allows you to provide a turnkey support system for your client clinics and healthcare providers</p>
			<div className='btn light-green btn-block mr-5'>
				<a className='white-text'>Learn More</a>
			</div>
		</div>
	},
	con2 : {
		img : '/images/patient/Home-Health-Agencies-image.png',
		content : <div>
			<h2>Home Health Agencies</h2>
			<p>A trained RPM workforce that supports home health care patients that improves medical outcomes and standard of living</p>
			<div className='btn light-green btn-block mr-5'>
				<a className='white-text'>Learn More</a>
			</div>
		</div>
	},
	con3 : {
		img : '/images/patient/Specialists-image.png',
		content : <div>
			<h2>Medical Specialties</h2>
			<p>Support for medical specialists (cardiac, orthopedic, endocrinology…) to monitor chronic and acute care, utilizing RPM service models that help improve patient engagement</p>
			<div className='btn light-green btn-block mr-5'>
				<a className='white-text'>Learn More</a>
			</div>
		</div>
	}

}

const section5Content = <div>
	<h1>How We Can Help</h1>
	<p>We create teams to deliver focused service while following detailed processes, satisfy US audits, and scale staff, while maintaining quality and security. Clear attention to formal HIPAA and security processes keeps patient and client data secure. Differentiation comes from IT and management teams operating under established US standards.</p>
</div>

const section6Content = <div>
	<h2>Read our blog posts on RPM and Tech</h2>
	<div className='btn light-green btn-block mr-5'>
		<a className='white-text'>Read Blog</a>
	</div>
</div>

export default {
	section1 : section1Banner,
	section3 : section3Content,
	section4 : section4Content,
	section5 : section5Content,
	section6 : section6Content
}


