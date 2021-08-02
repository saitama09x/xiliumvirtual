import React from 'react'
import Head from 'next/head'
import { HeaderMenu } from "@partials/Headers";
import { XImage, XCard } from "@partials/Elements";
import { SectionWrapper, SectionOneCol, SectionTwoCols, SectionTwoColsNoGap, SectionFourCols, SectionFiveCols } from "@partials/Layouts";
import { CopyRight, Footer } from "@partials/Footer";
import { contactus, Talk2us, Office, RecentPost, Menus } from "@contents/footer";
import content from '@contents/patientmonitoring';
import style from '@css/patient.module.css'

export class PatientMonitoring extends React.Component  {

	render(){
		return (
			<>
			<HeaderMenu />
			<SectionWrapper 
	          sectionId={'section1'} 
	          isMaxDesktop={true}
	          sectionClass={style.bannerBG}
	          isFluid={true}
	         >
				
				<SectionOneCol colClass={'is-half-desktop'} colContent={content.section1} />

			</SectionWrapper>
			<SectionWrapper 
	          sectionId={'section2'} 
	          isMaxDesktop={true}
	          sectionClass={style.customDivider}
	          isFluid={true}
	         >

	         </SectionWrapper>
	         <SectionWrapper 
	          sectionId={'section3'} 
	          isMaxDesktop={true}
	          sectionClass={style.section3BG}
	          isFluid={true}
	         >
				
				<SectionFiveCols 
					col1Content={<XCard cardClass={style.section3Card} img={content.section3.icon1.img} content={content.section3.icon1.content} img_w={250} img_h={250} />} 
					col2Content={<XCard cardClass={style.section3Card} cardClass={style.section3Card} img={content.section3.icon2.img} content={content.section3.icon2.content} img_w={250} img_h={250} />}
					col3Content={<XCard cardClass={style.section3Card} img={content.section3.icon3.img} content={content.section3.icon3.content} img_w={250} img_h={250} />}
					col4Content={<XCard cardClass={style.section3Card} img={content.section3.icon4.img} content={content.section3.icon4.content} img_w={250} img_h={250} />}
					col5Content={<XCard cardClass={style.section3Card} img={content.section3.icon5.img} content={content.section3.icon5.content} img_w={250} img_h={250} />}
				/>

			</SectionWrapper>
			<SectionWrapper 
	          sectionId={'section4'} 
	          isMaxDesktop={true}
	          sectionClass={style.section4BG}
	          isFluid={false}
	         >
	         	<SectionOneCol colClass={'is-half-desktop'} colContent={<div><h1 className="has-text-centered">Who We Partner With</h1></div>} />
	         	<SectionTwoCols
	         		col1Content={<XImage src={content.section4.con1.img} height={372} width={750} /> }
	         		col2Content={content.section4.con1.content}
	         	/>
	         	<SectionTwoCols
	         		col1Content={<XImage src={content.section4.con2.img} height={372} width={750} /> }
	         		col2Content={content.section4.con2.content}
	         	/>
	         	<SectionTwoCols
	         		col1Content={<XImage src={content.section4.con3.img} height={372} width={750} /> }
	         		col2Content={content.section4.con3.content}
	         	/>
	         </SectionWrapper>
	         <SectionWrapper 
	          sectionId={'section5'} 
	          isMaxDesktop={true}
	          isFluid={false}
	         >

	         	<SectionTwoCols
	         		col2Content={<XImage src={"/images/patient/How-can-we-help-rpm-02.png"} height={641} width={1023} /> }
	         		col1Content={content.section5}
	         	/>
	         	
	         </SectionWrapper>

	         <SectionWrapper 
	          sectionId={'section6'} 
	          isMaxDesktop={true}
	          sectionClass={style.section6BG}
	          isFluid={false}
	         >

	         	<SectionTwoCols
	         		rowClass={style.section6RowBG}
	         		col1Content={<XImage src={"/images/patient/How-VMAs-Can-Provide-Essential-Telemedicine-Support.png"} height={641} width={1023} /> }
	         		col2Content={content.section6}
	         		colClass1={'px-0 py-0'}
	         		colClass2={'py-0'}
	         	/>
	         	
	         </SectionWrapper>

	          <SectionWrapper 
	              sectionId={'footer-contact'}
	              sectionClass={'p-0'}
	              isMaxDesktop={true}
	              isFluid={true}
	             >

	            <SectionTwoCols 
	             	
             		colClass1={'is-one-third-desktop p-0'} 
             		colClass2={'is-half-desktop'} 
             		col2Content={contactus}
             		col1Content={<XImage src={'/images/VMA-footer-background.png'} alt={''} height={623} width={1000}/>}
             		
             		/>

             	</SectionWrapper>

	         <Footer />
             <CopyRight />

			</>
		)
	}


}