import React from 'react'
import styles from '@css/vma.module.css'
import { XImage, XCard, HomeSlider } from "@partials/Elements";

export const section1Banner = <div>

<h1 className={styles.bannerTitle}>Virtual Medical Assistant</h1>
<p className={styles.bannerText}>Our nurses integrate with your staff and patients. Reception, EMR, verify insurance, corporate HIPAA Security trained and supported. Skilled in cloud tools and technology.</p>

</div>


export const service = {
    admin : {
        img : '/images/vma/Medical-Coding.jpg',
        content : <div>
          <h4>Admin</h4>
          <ul>
            <li>Reception</li>
            <li>EMR Management</li>
            <li>Refills Processing</li>
          </ul>
        </div>
    },
    telsupport : {
        img : '/images/vma/Telemedicine-Tech-sUPPORT.jpg',
        content : <div>
          <h4>Telemedicine Support</h4>
          <ul>
            <li>Patient Tech Prescreening</li>
            <li>Patient orientation and setup</li>
            <li>IT Telemedicine Support</li>
          </ul>
        </div>
    },
    scribe : {
        img : '/images/vma/scrib-new.jpg',
        content : <div>
          <h4>Scribe</h4>
          <ul>
            <li>Document physician-patient encounters</li>
            <li>Type out physician notes</li>
            <li>Transcribe voicemail messages</li>
            <li>Transcribe audio recordings</li>
          </ul>
        </div>
    },
    triage : {
        img : '/images/vma/Medical-Billing.jpg',
        content : <div>
          <h4>Triage</h4>
          <ul>
            <li>Take patient information</li>
            <li>Follow physician orders & office protocols</li>
            <li>Prioritize clinic visits and referrals to facilities</li>
          </ul>
        </div>
    },
    prior : {
        img : '/images/vma/VMA-Other-task.jpg',
        content : <div>
          <h4>Prior Authorization</h4>
          <ul>
            <li>Submit prior authorizations</li>
            <li>Receive and process prior authorizations</li>
            <li>Process eligible request</li>
            <li>Communicate ineligible request</li>
          </ul>
        </div>
    },
    teldesign : {
        img : '/images/vma/Telehealth-Design.jpg',
        content : <div>
          <h4>Telehealth Design & Support</h4>
          <ul>
            <li>Tech Selection and Design</li>
            <li>Process Development</li>
            <li>Software and Tools Integration</li>
          </ul>
        </div>
    }
}


const section3Content = <div className="has-text-centered">
    <img src="/images/vma/EMR-migration-icon.png" width="100" height="99"/>
    <h2 className={styles.section3Title}><strong className='white-text'>Augment your team to <br />handle EMR Projects</strong></h2>
</div>

const section4Content = <div>
    <p>Need help in assessing network and system security in your practice?</p>
    <div className='btn light-green btn-block mr-5'>
        <a className='white-text'>Learn More</a>
    </div>
</div>

const section5Content = <div>
    <div className={styles.section5BG}>
        <p className="white-text">ACP, FMX, ACS – Which Conferences are You Attending?</p>
    </div>
    <div className='btn light-green btn-block mr-5'>
        <a className='white-text'>Learn More</a>
    </div>
</div>


export const testimonial = {
    miles : {
        img : '/images/vma/Lifetime-family-colored.png',
        content : <div>
            <p>“Kathrina has good attention to detail and asks the right questions. She is very independent and knows her way through our EMR.”</p>
            <div className='client'>Ms. Lisa Miles</div>
        </div>,

    },
    alaniz : {
        img : '/images/vma/Afterhour-colored.png',
        content : <div>
            <p>“Arachelle has been very helpful, is very friendly, and easy to work with. My clients are responding positively to her”</p>
            <div className='client'>Dr. Aaron Alaniz, MD</div>
        </div>,

    },
    mensah : {
        img : '/images/vma/Reform-psych-colored-1.jpg',
        content : <div>
            <p>“My patients have shared positive feedback about Karen. She is doing very well and I only imagine her getting even better”</p>
            <div className='client'>Ms. Jemima Mensah</div>
        </div>,

    }

}

export const blogs = {

    blog1 : {
        img : '/images/vma/Others-will-always-see-you-2.png',
        content : <div>
            <div className='post-title'>Others will always see you</div>
            <p>Always assume you can be seen and heard. This is a wise way to deal with tech. In 1992 I sent an email and accidentally hit reply all. It was...</p>
        </div>
    },
    blog2 : {
        img : '/images/vma/Unmasking-Individual-Self-Expression.png',
        content : <div>
            <div className='post-title'>Others will always see you</div>
            <p>Always assume you can be seen and heard. This is a wise way to deal with tech. In 1992 I sent an email and accidentally hit reply all. It was...</p>
        </div>
    },
    blog3 : {
        img : '/images/vma/Starting-Fresh-in-the-New-Normal.png',
        content : <div>
            <div className='post-title'>Others will always see you</div>
            <p>Always assume you can be seen and heard. This is a wise way to deal with tech. In 1992 I sent an email and accidentally hit reply all. It was...</p>
        </div>
    }

}

export default {
    section1 : section1Banner,
    section2 : service,
    section3 : section3Content,
    section4 : section4Content,
    section5 : section5Content,
    section7 : testimonial,
    section8 : blogs
}
