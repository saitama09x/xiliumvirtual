import React from 'react'
import styles from '@css/vma.module.css'
import { XImage, XCard, HomeSlider } from "@partials/Elements";

const section1Content = {

	con1 : {
		img : '/images/company/Vanessa-Belleza-profile.png',
		content : <div className='has-text-centered'>
			<label>Vanessa Belleza</label>
			<p>CEO and President for Philippines</p>
		</div>
	},
	con2 : {
		img : '/images/company/Joven-Soubiron-profile.png',
		content : <div className='has-text-centered'>
			<label>Joven Suobiron</label>
			<p>Administrative Manager</p>
		</div>
	},
	con3 : {
		img : '/images/company/Juvy-clemena-profile.png',
		content : <div className='has-text-centered'>
			<label>Juvy Clemeña</label>
			<p>Marketing and Events</p>
		</div>
	},
	con4 : {
		img : '/images/company/April-Gonzaga-profile.png',
		content : <div className='has-text-centered'>
			<label>April Joy Gonzaga</label>
			<p>Operations Manager</p>
		</div>
	},
	con5 : {
		img : '/images/company/Janmar-panaguiton-profile.png',
		content : <div className='has-text-centered'>
			<label>Jan Mar Panaguiton</label>
			<p>Nursing Director</p>
		</div>
	}

}


const section2Content = <div>
	<p className="has-text-justified">Xilium has come a long way under the leadership of Vanessa and its founders. Since its inception in 2011, the company has matured into an organization with the resources needed to solve today’s problems in business and healthcare practice administration. The establishment has worked with over 200 clients in the past seven years. The natural availability of nurses and college educated professionals in the Philippines ensures Xilium’s US-guided leadership will continue to provide solutions for the US healthcare system in the years to come.
</p>

</div>

const section3Content = <div>
	<h1>LOCATION</h1>
	<p>Xilium is headquartered in Cary NC with administrative offices in Burnsville, MN. Operations are based in Iloilo, Philippines.</p>
</div>

export const section4Content = <div>
	
	<div><h1 className='has-text-centered has-text-weight-semibold'>What “Xillium” Means</h1></div>
	<div><p>Xillium comes from the Latin word “Auxilium” which means “to bring aid or to help”. This serves as a philosophy the company conveys and represents us as a trusted, progressive company.</p></div>

	<div style={{
		    position: "absolute",
		    left: "0px",
		    width: "100%",
		    textAlign: "center"
	}}>
		<img src="/images/company/Don-Wickelgren-with-border.png" style={{ width : "100px"}}/>
		<p>Don Wickelgren<br />
		Founder</p>
	</div>

</div>

export default {
	section1 : section1Content,
	section2 : section2Content,
	section3 : section3Content,
	section4 : section4Content
}