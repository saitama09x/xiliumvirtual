import React from 'react'


export const BannerTwoCols = (props) => {
	const { bannerId, col1Content, col2Content, sectionStyle, bannerClass, isFluid } = props

	if(isFluid){
		return (
		<div id={bannerId} className={bannerClass} style={(sectionStyle) ? sectionStyle : {}}>
			<div className='container is-fluid'>
				<div className='columns is-multiline'>
					<div className='column is-half-desktop'>
							{col1Content}
					</div>
					<div className='column is-half-desktop'>
							{col2Content}
					</div>
				</div>
			</div>
		</div>
	)	
	}

	return (
		<div id={bannerId} className={bannerClass} style={(sectionStyle) ? sectionStyle : {}}>
			<div className='container is-max-desktop'>
				<div className='columns is-multiline'>
					<div className='column is-half-desktop'>
							{col1Content}
					</div>
					<div className='column is-half-desktop'>
							{col2Content}
					</div>
				</div>
			</div>
		</div>
	)

}