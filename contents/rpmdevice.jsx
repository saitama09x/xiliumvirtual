import React from 'react'
import styles from '@css/vma.module.css'
import { XImage, XCard, HomeSlider } from "@partials/Elements";

const section1Banner = <div>

<h1 className={styles.bannerTitle}>For device manufacturers and systems providers:</h1>
<p className={styles.bannerText}>Add an RPM service to Your Products</p>

</div>

const section3Content = <div className="has-text-centered has-text-white">
	<h1>Full RPM staffing for your clients, patients, and you</h1>
	<p>A trained RPM workforce supports your devices and systems in setup, troubleshooting, patient monitoring which provides support for your clients and helps them to improve patient outcomes.</p>
</div>

const section4Content = {
	con1 : {
		img : '/images/patient/Patient-Sign-up-1.png',
		content : <div>
			<label>Patient Enrollment</label>
			<p>Obtain clinics requested enrollment and patient consent</p>
		</div>
	},
	con2 : {
		img : '/images/patient/Equipment-Delivery-1.png',
		content : <div>
			<label>Patient Enrollment</label>
			<p>Obtain clinics requested enrollment and patient consent</p>
		</div>
	},
	con3 : {
		img : '/images/patient/Accounts-setup.png',
		content : <div>
			<label>Patient Enrollment</label>
			<p>Obtain clinics requested enrollment and patient consent</p>
		</div>
	},
	con4 : {
		img : '/images/patient/Equipment-Delivery-1.png',
		content : <div>
			<label>Patient Enrollment</label>
			<p>Obtain clinics requested enrollment and patient consent</p>
		</div>
	}
}

const section6Content = {

	con1 : {
		img : '/images/patient/Orthopedics.png',
		content : <div className='has-text-centered'><label>Orthopedics</label></div>
	},
	con2 : {
		img : '/images/patient/cardiology.png',
		content : <div className='has-text-centered'><label>Orthopedics</label></div>
	}

}

const section7Content = {

	con1 : {
		img : '/images/patient/Skilled-Staff.png',
		content : <div className='has-text-centered'><label>Experienced Staff</label></div>
	},
	con2 : {
		img : '/images/patient/Staff-Scalability.png',
		content : <div className='has-text-centered'><label>Staff Scalability</label></div>
	},
	con3 : {
		img : '/images/patient/Outsourced-Cost-Model.png',
		content : <div className='has-text-centered'><label>Outsourced Cost Model</label></div>
	}

}

export default {
	section1 : section1Banner,
	section3 : section3Content,
	section4 : section4Content,
	section6 : section6Content,
	section7 : section7Content
}
