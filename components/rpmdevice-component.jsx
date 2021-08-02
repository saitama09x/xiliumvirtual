import React from 'react'
import Head from 'next/head'
import { HeaderMenu } from "@partials/Headers";
import { XImage, XCard } from "@partials/Elements";
import { SectionWrapper, SectionOneCol, SectionTwoCols, SectionThreeCols, SectionTwoColsNoGap, SectionFourCols, SectionFiveCols } from "@partials/Layouts";
import { CopyRight, Footer } from "@partials/Footer";
import { contactus, Talk2us, Office, RecentPost, Menus } from "@contents/footer";
import content from '@contents/rpmdevice';
import style from '@css/rpmdevice.module.css'

export class RPMDevice extends React.Component  {


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
		          isFluid={false}
		         >
					
					<SectionOneCol
						colContent={content.section3} 
					/>

				</SectionWrapper>
				<SectionWrapper 
		          sectionId={'section3'} 
		          isMaxDesktop={true}
		          isFluid={false}
		         >
					
					<SectionOneCol
						colContent={<div><h1 className="has-text-centered"> How it Works</h1></div>} 
					/>

				</SectionWrapper>
				<SectionWrapper 
		          sectionId={'section4'} 
		          isMaxDesktop={true}
		          sectionClass={style.section4BG}
		          isFluid={false}
		         >
					
					<SectionOneCol
						colContent={<div><h1 className="has-text-left">Device Setup</h1></div>} 
					/>

					<SectionFourCols
						rowClass={'is-2'}
						col1Content={<XCard  img={content.section4.con1.img} content={content.section4.con1.content} img_w={750} img_h={397} />} 
						col2Content={<XCard  img={content.section4.con2.img} content={content.section4.con2.content} img_w={750} img_h={397} />}
						col3Content={<XCard  img={content.section4.con3.img} content={content.section4.con3.content} img_w={750} img_h={397} />}
						col4Content={<XCard  img={content.section4.con4.img} content={content.section4.con4.content} img_w={750} img_h={397} />}
					/>

				</SectionWrapper>
				<SectionWrapper 
		          sectionId={'section5'} 
		          isMaxDesktop={true}
		          isFluid={false}
		         >
					
					<SectionOneCol
						colContent={<div><h1 className="has-text-left">Care Management</h1></div>} 
					/>

					<SectionThreeCols
						rowClass={'is-2'}
						col1Content={<XCard  img={content.section4.con1.img} content={content.section4.con1.content} img_w={750} img_h={397} />} 
						col2Content={<XCard  img={content.section4.con2.img} content={content.section4.con2.content} img_w={750} img_h={397} />}
						col3Content={<XCard  img={content.section4.con3.img} content={content.section4.con3.content} img_w={750} img_h={397} />}
					/>

					<SectionThreeCols
						rowClass={'is-2'}
						col1Content={<XCard  img={content.section4.con1.img} content={content.section4.con1.content} img_w={750} img_h={397} />} 
						col2Content={<XCard  img={content.section4.con2.img} content={content.section4.con2.content} img_w={750} img_h={397} />}
						col3Content={<XCard  img={content.section4.con3.img} content={content.section4.con3.content} img_w={750} img_h={397} />}
					/>

				</SectionWrapper>

				<SectionWrapper 
		          sectionId={'section6'} 
		          isMaxDesktop={true}
		          sectionClass={style.section3BG}
		          isFluid={false}
		         >

		         <SectionTwoCols
					col1Content={<XCard img={content.section6.con1.img} content={content.section6.con1.content} img_w={750} img_h={397} />} 
					col2Content={<XCard img={content.section6.con2.img} content={content.section6.con2.content} img_w={750} img_h={397} />}						
				/>

				<SectionOneCol
					colContent={<div className="has-text-white"><p className="mb-5">RPM can be added to your device service whether it only requires a short acute phase, a longer recovery, or ongoing chronic care.</p>
						<p>You can also customize the intensity and frequency of patient engagement. Measure and monitor patients, engage for improved care compliance, report and feedback. Maximize patient outcome.</p></div>} 
				/>

		        </SectionWrapper>
		        <SectionWrapper 
		          sectionId={'section7'} 
		          isMaxDesktop={true}
		          isFluid={false}
		         >

		         	<SectionOneCol
						colContent={<div><h1 className="has-text-centered">Benefits</h1></div>} 
					/>

		         	<SectionThreeCols
		         		rowClass={style.section7Gap}
						col1Content={<XCard cardClass={style.cardNoShadow} img={content.section7.con1.img} content={content.section7.con1.content} img_w={354} img_h={395} />} 
						col2Content={<XCard cardClass={style.cardNoShadow} img={content.section7.con2.img} content={content.section7.con2.content} img_w={354} img_h={395} />}						
						col3Content={<XCard cardClass={style.cardNoShadow} img={content.section7.con3.img} content={content.section7.con3.content} img_w={354} img_h={395} />}
						colClass1={'is-one-quarter-desktop'}
						colClass2={'is-one-quarter-desktop'}
						colClass3={'is-one-quarter-desktop'}
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
