import React, { useState, useEffect, useRef  } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const XImage = (props) => {

	const { src, alt, height, width, isShadow, wrapperStyle, wrapperClass } = props
	return (
		<div className={ 'image-wrapper ' + wrapperClass } style={(wrapperStyle) ? wrapperStyle : {} }>
			<div className={ (isShadow) ? "image shadow1" : "image" } >
				 <Image
			      src={src}
			      alt={(alt) ? alt : ''}
			      layout='responsive'
			      height={height}
			      width={width}
			    />
			</div>
		</div>
	)
}


export const HomeSlider = () => {

	const settings = {
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  arrows: true,
	  dots: false,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        arrows: true,
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      },
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        arrows: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      },
	    },
	  ],
	};

	return (
		<div id="home-slick">
		<Slider {...settings}>

		      <div className='logo-block'>
		        <div className='logo bg-white'>
		          <img src="/images/logos/Harvard-university-logo.png" />
		        </div>
		        <div className='logo bg-gray'>
		          <img src="/images/logos/University-of-delhi-logo-2.png" />
		        </div>
		      </div>
		      <div className='logo-block'>
		        <div className='logo bg-gray'>
		          <img src="/images/logos/Columbia-University-logo.png" />
		        </div>
		        <div className='logo bg-white'>
		          
		          <img src="/images/logos/New-york-University-logo-2.png" />
		        </div>
		      </div>
		      <div className='logo-block'>
		        <div className='logo bg-white'>
		          <img src="/images/logos/Stanford-university-logo.png" />
		        </div>
		        <div className='logo bg-gray'>
		          <img src="/images/logos/University-of-Mumbai-logo-2.png" />
		        </div>
		      </div>
		      <div className='logo-block'>
		        <div className='logo bg-gray'>
		          <img src="/images/logos/john-Hopkins-University.png" />
		        </div>
		        <div className='logo bg-white'>
		          <img src="/images/logos/University-of-illinois.png" />
		        </div>
		      </div>
		      <div className='logo-block'>
		        <div className='logo bg-white'>
		          <img src="/images/logos/University-of-sao-paolo-logo-2.png" />
		        </div>
		        <div className='logo bg-gray'>
		          <img src="/images/logos/University-of-texas.png" />
		        </div>
		      </div>
		       <div className='logo-block'>
		        <div className='logo bg-gray'>
		          <img src="/images/logos/Brown-University-logo.png" />
		        </div>
		        <div className='logo bg-white'>
		          <img src="/images/logos/University-of-California-logo-2.png" />
		        </div>
		      </div>
		</Slider>
		</div>
	)


}


export const XCard = (props) => {
	const { img, content, img_w, img_h, cardClass } = props


	return (
		<div className={"card " + cardClass}>
			<div className="card-image">
    			<figure className="image">
    				<XImage src={img} width={img_w} height={img_h} />
    			</figure>
    		</div>
    		<div className="card-content">
    			<div className="content">
    				{content}
    			</div>
    		</div>
		</div>
	)

}

export const Accordion = (props) => {

	const { items, wrapClass, itemClass } = props
	const [ active, setActive ] = useState(0)
	const [ height, setHeight ] = useState(0);
	const [ init, setInit ] = useState(false)
	const activeToggle = useRef(null)

	const doAnimate = (parent, index) => {
		
		var node = parent.parentNode
		if(node.childNodes.length){
			var content = node.childNodes[2]
			var p = content.firstChild
			setHeight(p.offsetHeight)
		}

		setActive(index)
	}

	useEffect(() => {
    	if(init == false){
    		setActive(0)
    		doAnimate(activeToggle.current, 0)
    		setInit(true)
    	}
  	});

	

	return (
		<div className={'accordion-wrap ' + wrapClass}>
			<div className={'accordion-content'}>
				{
					(items.length) ? items.map((item, index) => {
						
						const { title, content } = item
						var _height = 0;
						if(active == index){
							_height = height
						}

						return (
							<div className={'accordion-item ' + itemClass} key={'item-' + index}>
								<a className={(active == index) ? 'toggle-btn hide' : 'toggle-btn open'} onClick={(e) => doAnimate(e.target.parentNode, index)}><span></span></a>
								<h5 className='toggle-title'>{title}</h5>
								<div ref={ (active == index) ? activeToggle : null } className={ (active == index) ? 'toggle-content open' : 'toggle-content hide' } style={{ height : _height + "px"}}><p>{content}</p></div>
							</div>
						)

					}) : <div></div>

				}
				
			</div>
		</div>
	)

}