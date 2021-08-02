import React from 'react'
import Head from 'next/head'
import { XImage, XCard, HomeSlider, Accordion } from "@partials/Elements";
import { HeaderMenu } from "@partials/Headers";
import { SectionWrapper, SectionOneCol, SectionTwoCols, SectionThreeCols, SectionFourCols } from "@partials/Layouts";
import content, { section1Banner, service } from '@contents/vma';
import { CopyRight, Footer } from "@partials/Footer";
import { contactus, Talk2us, Office, RecentPost, Menus } from "@contents/footer";
import styles from '@css/vma.module.css'

export class VMA extends React.Component  {

	render(){

        const toggleItems = [
            { title : 'What is a Virtual Medical Assistant?', content : 'A VMA is a medical assistant who works remotely performing medical practice duties like prescription refills, insurance verification, prior authorization, EMR data entry, patient scheduling, scribing and admin tasks.'},
            { title : 'What tasks do VMAs handle?', content : 'They handle reception, prescription refills, insurance verification, prior authorization, EMR data entry, patient setup and intake, scheduling and reminders, scribing and admin tasks, billing and coding. Less common tasks are peer-to-peer review documentation, remote patient monitoring, COVID-19 patient instruction, referral records requests.'},
            { title : 'Are you HIPAA-compliant?', content : 'VMAs are required to complete an extensive HIPAA training program and show proficiency through testing. Internal processes and protocols such as the use of 2-factor authentication, password management, and restricted use of physical and computer storage provides a secure data and user environment. These practices are mapped to the HIPAA standard to ensure compliance. click here.'},
            { title : 'Do we have a HIPAA Business Agreement?', content : 'VMAs always sign a Business Agreement with the client prior to beginning work. We have a standard Business Agreement that you can use with our staff or we can use your own Agreement after a quick review by our managers.'},
            { title : 'Are you a registered company both in the US and in the Philippines?', content : 'Xilium is registered LLC in the US, in the state of North Carolina and is a registered corporation in Iloilo City, Philippines.'},
            { title : 'Are your assistants home or office-based?', content : 'Our assistants are office-based with full IT support and managers for backup and training. During the COVID-19 pandemic, while HIPAA rules are loosened to allow work from home for the safety of all people, many are working from home but we will continue to support the adapting HIPAA standards.'},
        ];

		return (
			<>
			<HeaderMenu />

			<SectionWrapper 
              sectionId={'section1'} 
              isMaxDesktop={true}
              sectionClass={styles.section1Banner}
              isFluid={false}
             >
				
				<SectionTwoCols 
					colClass1={'is-half-desktop'} 
					col1Content={content.section1}
					col2Content={<XImage src={'/images/vma/US-state-RN-badge.png'} alt={''} height={223} width={532}/>}
				/>

				<SectionOneCol colContent={<XImage src={'/images/vma/Xilium-Medical-Services-Icons-06-1.png'} alt={''} height={851} width={3951}/>} />

			</SectionWrapper>

			<SectionWrapper 
              sectionId={'section2'} 
              isMaxDesktop={true}
              isFluid={true}
             >

             	<SectionOneCol colContent={<h2><span style={{ color : '#333333', fontWeight: '700'}}>Our </span>Virtual Medical Assistant and Telehealth Services</h2>} />

             	<SectionThreeCols 
             		col1Content={<XCard cardClass={styles.cardHeight} img={content.section2.admin.img} content={content.section2.admin.content} img_w={500} img_h={281} />}
             		col2Content={<XCard cardClass={styles.cardHeight} img={content.section2.telsupport.img} content={content.section2.telsupport.content} img_w={500} img_h={281} />}
             		col3Content={<XCard cardClass={styles.cardHeight} img={content.section2.scribe.img} content={content.section2.scribe.content} img_w={500} img_h={281} />}
             	/>
             	
             	<SectionThreeCols 

             		col1Content={<XCard cardClass={styles.cardHeight} img={content.section2.triage.img} content={content.section2.triage.content} img_w={500} img_h={281} />}
             		col2Content={<XCard cardClass={styles.cardHeight} cardClass={styles.cardHeight} img={content.section2.prior.img} content={content.section2.prior.content} img_w={500} img_h={281} />}
             		col3Content={<XCard cardClass={styles.cardHeight} img={content.section2.teldesign.img} content={content.section2.teldesign.content} img_w={500} img_h={281} />}
             	/>
             </SectionWrapper>

             <SectionWrapper 
              sectionId={'section3'} 
              containerClass={styles.section3}
              isMaxDesktop={true}
              isFluid={true}
             >

             	<SectionOneCol colContent={content.section3} />

             </SectionWrapper>

             <SectionWrapper 
              sectionId={'section4'} 
              sectionClass={styles.section4}
              isMaxDesktop={true}
              isFluid={true}
             >

             	<SectionTwoCols 
             		col1Content={<XImage src={'/images/vma/Security-Program.png'} alt={''} height={365} width={775}/>} 
             		col2Content={content.section4}
             	/>

             </SectionWrapper>

             <SectionWrapper 
              sectionId={'section5'} 
              sectionClass={styles.section5}
              isMaxDesktop={true}
              isFluid={true}
             >

             	<SectionTwoCols 
             		col1Content={content.section5} 
             	/>

             </SectionWrapper>
              <SectionWrapper 
              sectionId={'section6'} 
              sectionClass={''}
              isMaxDesktop={true}
              isFluid={true}
             >

                <SectionTwoCols 
                    col1Content={<XImage src={'/images/vma/maxresdefault.jpg'} alt={''} height={720} width={1280}/>}
                    col2Content={<Accordion items={toggleItems} />}
                />

             </SectionWrapper>

             <SectionWrapper 
              sectionId={'section7'}
              sectionClass={styles.section4}
              isMaxDesktop={true}
              isFluid={true}
             >
                <SectionThreeCols 

                    col1Content={<XCard cardClass={styles.cardHeight} img={content.section7.miles.img} content={content.section7.miles.content} img_w={500} img_h={281} />}
                    col2Content={<XCard cardClass={styles.cardHeight} cardClass={styles.cardHeight} img={content.section7.alaniz.img} content={content.section7.alaniz.content} img_w={500} img_h={281} />}
                    col3Content={<XCard cardClass={styles.cardHeight} img={content.section7.mensah.img} content={content.section7.mensah.content} img_w={500} img_h={281} />}
                />

             </SectionWrapper>

             <SectionWrapper 
              sectionId={'section7'}
              sectionClass={''}
              isMaxDesktop={true}
              isFluid={true}
             >  
                <SectionOneCol colContent={<div className="has-text-centered">Blog Posts</div>} />

                <SectionThreeCols 

                    col1Content={<XCard cardClass={styles.cardHeight} img={content.section8.blog1.img} content={content.section8.blog1.content} img_w={500} img_h={281} />}
                    col2Content={<XCard cardClass={styles.cardHeight} cardClass={styles.cardHeight} img={content.section8.blog2.img} content={content.section8.blog2.content} img_w={500} img_h={281} />}
                    col3Content={<XCard cardClass={styles.cardHeight} img={content.section8.blog3.img} content={content.section8.blog3.content} img_w={500} img_h={281} />}
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