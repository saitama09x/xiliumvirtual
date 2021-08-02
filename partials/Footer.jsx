import React from 'react'
import { SectionWrapper, SectionOneCol, SectionTwoCols, SectionFourCols } from "@partials/Layouts";
import { contactus, Talk2us, Office, RecentPost, Menus } from "@contents/footer";

export const CopyRight = () => {

	return (
		<div className='copyright'>
			<div className='container'>
				<p>Copyright © 2021 Xillium LLC. All Rights Reserved</p>
			</div>
		</div>
	)


}

export const Footer = () => {


	return (
		<SectionWrapper sectionId="footer" sectionStyle={ { backgroundColor : '#222' }}>
               
	       <SectionFourCols
	          col1Content={Talk2us}
	          col2Content={Office}
	          col3Content={RecentPost}
	          col4Content={Menus}
	        />

	  	</SectionWrapper>

	)


}