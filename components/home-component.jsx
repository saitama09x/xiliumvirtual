import React from 'react'
import Head from 'next/head'
import { HeaderMenu } from "@partials/Headers";
import { CopyRight, Footer } from "@partials/Footer";
import { XImage, HomeSlider } from "@partials/Elements";
import { SectionWrapper, SectionOneCol, SectionTwoCols, SectionFourCols } from "@partials/Layouts";

import { bannerText, section2Left, section4Center, section5Left, section6Right, 
	section7card1, section7card2, readsignup, section8Right, section9Center, section10Left } from '@contents/home';

import { contactus, Talk2us, Office, RecentPost, Menus } from "@contents/footer";

import style from './css/home.module.css';

export class Home extends React.Component  {


	render(){
		return (
			<>
			<HeaderMenu />
				 <SectionWrapper 
	              sectionId={'section1'} 
	              isMaxDesktop={true}
	              sectionClass={style.bannerBG}
	              isFluid={false}
	             >
					
					<SectionTwoCols colClass1={'is-half-desktop'} col1Content={bannerText} />

				</SectionWrapper>

				<SectionWrapper 
	              sectionId={'section2'} 
	              isMaxDesktop={true}
	              sectionClass={'bg-white-gray'}
	             >

	             	<SectionTwoCols 
	             		colClass1={'is-half-desktop'} 
	             		colClass2={'is-half-desktop'} 
	             		col1Content={section2Left}
	             		col2Content={<XImage src={'/images/Xilium-registered-virtual-nurse-services.png'} alt={''} height={445} width={750} isShadow={true}/>} />

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section3'} 
	              isMaxDesktop={true}
	              sectionClass={'bg-white'}
	             >

	             	<SectionTwoCols 
	             		colClass1={'is-half-desktop'} 
	             		colClass2={'is-half-desktop'} 
	             		col1Content={<XImage src={'/images/Xilium-Remote-patient-monitoring-services.png'} alt={''} height={445} width={750} isShadow={true}/>}
	             		col2Content={section2Left} />

	             </SectionWrapper>


	             <SectionWrapper 
	              sectionId={'section4'} 
	              isMaxDesktop={true}
	              sectionClass={style.section4}
	             >

	        		<SectionOneCol colContent={section4Center}/>

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section5'} 
	              isMaxDesktop={true}
	              sectionClass={'bg-white-gray'}
	             >

	             	<SectionTwoCols 
	             	
	             		colClass1={'is-half-desktop'} 
	             		colClass2={'is-half-desktop'} 
	             		col1Content={section5Left}
	             		col2Content={<XImage src={'/images/Xilium-virtual-medical-assistant-services.png'} alt={''} height={445} width={750} isShadow={true}/>}
	             		
	             		/>

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section6'} 
	              isMaxDesktop={true}
	              sectionClass={'bg-white'}
	             >

	             	<SectionTwoCols 
	             	
	             		colClass1={'is-half-desktop'} 
	             		colClass2={'is-half-desktop'} 
	             		col2Content={section6Right}
	             		col1Content={<XImage src={'/images/Xilium-Wellness-services.png'} alt={''} height={445} width={750} isShadow={true}/>}
	             		
	             		/>

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section7'} 
	              isMaxDesktop={true}
	              sectionClass={style.section7}
	             >

	             <SectionOneCol colContent={<div><h2 className="has-text-centered"><strong>Other Services</strong></h2></div>}/>

	             <SectionTwoCols 
	             	
	         		colClass1={'is-half-desktop'} 
	         		colClass2={'is-half-desktop'} 
	         		col1Content={section7card1}
	         		col2Content={section7card2}
	         		
	         		/>
	             
	             <SectionOneCol colContent={readsignup}/>

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section8'} 
	              isMaxDesktop={true}
	              sectionClass={'bg-white'}
	             >

	             <SectionTwoCols 
	             	
             		colClass1={'is-half-desktop'} 
             		colClass2={'is-half-desktop'} 
             		col2Content={section8Right}
             		col1Content={<XImage src={'/images/Security-Program1.jpg'} alt={''} height={365} width={775} isShadow={true}/>}
             		
             		/>

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section9'} 
	              isMaxDesktop={true}
	              sectionClass={style.section9}
	              containerClass={style.section9Container}
	              isFluid={true}
	             >

	             	<SectionOneCol colContent={section9Center} rowClass={style.section9Content}/>

	             </SectionWrapper>

	             <SectionWrapper 
	              sectionId={'section10'} 
	              isMaxDesktop={true}
	              sectionClass={style.section10}
	             >

	             	 <SectionTwoCols 
	             	
             		colClass1={'is-half-desktop'} 
             		colClass2={'is-half-desktop'} 
             		col1Content={section10Left}
             		col2Content={<XImage src={'/images/thumbnail-whats-new-02.jpg'} alt={''} height={1080} width={1920} isShadow={true}/>}
             		
             		/>

	             </SectionWrapper>
	              <section className='section'>
	              <div className="pt-2" id='slider-section'>
	                <div className='mt-2 py-5 has-text-center'>
	                  <h1>Our Physicians</h1>
	                  <p>We support a diverse group of physicians and clients. Here are some of the medical schools they graduated from.</p>
	                </div>
	                <HomeSlider />
	              </div>
	            </section>

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