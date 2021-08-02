import React, { useState } from 'react'
import Head from 'next/head'
import Link from "next/link";

export const HeaderMenu = (props) => {
	const { title } = props
	const [isShow, setShow] = useState(false)

	return (
		<>
		<Head>
			<title>{title || 'Xillium'}</title>
		</Head>
		<div id="header">
		<div className='container '>
			<div className='columns is-vcentered is-desktop is-desktop-screen'>
				<div className='column is-half'>
					<div id='logo-wrapper'>
						<div className='logo'>
							<img src="/images/320x132.png" />
							<span>(919) 438-2735</span> <span>sales@xiliumvirtual.com</span>
						</div>
					</div>
				</div>
				<div className='column is-half'>
					<div id="menu" className='menus'>
						<ul className="is-flex menu-item is-flex-wrap-wrap is-justify-content-flex-end">
							<li><Link href="/" className='item-link'>Home</Link></li>
							<li><Link href="/services" className='item-link'>Services</Link></li>
							<li><Link href="/our-company" className='item-link'>Our Company</Link></li>
							<li><Link href="/contact-us" className='item-link'>Contact Us</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div className='columns is-vcentered is-mobile is-mobile-screen'>
				<div className='column is-half'>
					<div id='logo-wrapper'>
						<div className='logo'>
							<img src="/images/logo.png" className='image is-5by3 pt-0' />
						</div>
					</div>
				</div>
				<div className='column is-half has-text-right is-relative'>
						<button className='burger-icon mr-5' onClick={(e) => setShow(!isShow)}><i className="fa fa-bars" aria-hidden="true"></i></button>
						
						{ (isShow) ? <div className='menus'>
							<ul className="menu-item">							
							<li><Link href="/" className='item-link'>Home</Link></li>
							<li><Link href="/services"className='item-link'>Services</Link></li>
							<li><Link href="/our-company"className='item-link'>Our Company</Link></li>
							<li><Link href="/contact-us"className='item-link'>Contact Us</Link></li>
							</ul>
					</div> : <span></span> }
						
				</div>
			</div>			
		</div>
	</div>
		</>
	)


}