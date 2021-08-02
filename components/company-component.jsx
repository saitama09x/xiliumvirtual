import React from 'react'
import Head from 'next/head'
import { HeaderMenu } from "@partials/Headers";
import { XImage, XCard } from "@partials/Elements";
import { SectionWrapper, SectionOneCol, SectionTwoCols, SectionThreeCols, SectionTwoColsNoGap, SectionFourCols, SectionFiveCols } from "@partials/Layouts";
import { CopyRight, Footer } from "@partials/Footer";
import { contactus, Talk2us, Office, RecentPost, Menus } from "@contents/footer";
import content from '@contents/company';
import style from '@css/company.module.css'

export class Company extends React.Component  {

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

		         <SectionOneCol
					colContent={<div><h1 className="has-text-centered">Leadership</h1></div>} 
				 />

	         	<SectionThreeCols
	         		rowClass={style.section1Gap}
					col1Content={<XCard cardClass={style.cardNoShadow} img={content.section1.con1.img} content={content.section1.con1.content} img_w={400} img_h={400} />} 
					col2Content={<XCard cardClass={style.cardNoShadow} img={content.section1.con2.img} content={content.section1.con2.content} img_w={400} img_h={400} />}						
					col3Content={<XCard cardClass={style.cardNoShadow} img={content.section1.con3.img} content={content.section1.con3.content} img_w={400} img_h={400} />}
					colClass1={'is-one-fifth-desktop'}
					colClass2={'is-one-fifth-desktop'}
					colClass3={'is-one-fifth-desktop'}
				/>

				<SectionTwoCols
					col1Content={<XCard cardClass={style.cardNoShadow} img={content.section1.con4.img} content={content.section1.con4.content} img_w={400} img_h={400} />} 
					col2Content={<XCard cardClass={style.cardNoShadow} img={content.section1.con5.img} content={content.section1.con5.content} img_w={400} img_h={400} />}						
					colClass1={'is-one-fifth-desktop'}
					colClass2={'is-one-fifth-desktop'}
				/>
		        </SectionWrapper>
		        <SectionWrapper 
		          sectionId={'section2'} 
		          isMaxDesktop={true}	
		          isFluid={false}
		         >
		          <SectionOneCol
					colContent={<div><h1 className="has-text-centered">Our Story</h1></div>} 
				 />
				 
				 <SectionOneCol
					colContent={content.section2} 
				 />
				 
				 <SectionOneCol
					colContent={<XImage src={'/images/company/maxresdefault.jpg'} height={720} width={1280} />}
					colClass={'is-three-fifths-desktop'}
				 />

				 <SectionOneCol
					colContent={<div className='has-text-centered'>Know more about our assistants, watch here</div>}
				 />
		        </SectionWrapper>

		        <SectionWrapper 
		          sectionId={'section3'} 
		          isMaxDesktop={true}
		          sectionClass={style.section3BG}
		          isFluid={true}
		         >

		         	<SectionTwoCols
						col1Content={<XImage src={'/images/company/2maps-VER2-08-1080x553.png'} height={553} width={1080} />} 
						col2Content={content.section3}						
					/>

		        </SectionWrapper>


		        <SectionWrapper 
					sectionId={'section4'} 
		          	isMaxDesktop={true}
		          	isFluid={false}
					sectionStyle={{
						backgroundColor : '#f4f4f4',
						paddingBottom: "150px"
					}}
				>

					<SectionOneCol
						sectionId="section-six"
						rowClass={style.xilium_don}
						colContent={content.section4}
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