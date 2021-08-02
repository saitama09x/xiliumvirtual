import React from 'react'

export const SectionOneCol = (props) => {

	const { colContent, colClass, style,  sectionClass, rowClass } = props

	return (
	
		<div className={ 'columns is-multiline is-centered is-vcentered is-mobile is-desktop ' + rowClass}>
			<div className={ 'column ' + colClass } style={(style) ? style : {}}>
				{colContent}
			</div>
		</div>
	)

}

export const SectionOneCol2 = (props) => {

	const { sectionId, rowClass, colClass, style, colContent} = props

	return (

			<div className={ 'columns is-multiline is-centered is-vcentered is-mobile is-desktop ' + rowClass}>
				<div className={ 'column ' + colClass } style={(style) ? style : {}}>
					{colContent}
				</div>
			</div>
	)

}

export const SectionTwoColsNoGap = (props) => {

	const { rowClass, colClass1, colClass2, col1Content, col2Content, style1, style2 } = props

	return (
			<div className={ 'columns is-gapless is-multiline is-centered is-vcentered is-mobile is-desktop ' + rowClass }>
				<div className={ 'column is-full-mobile ' + colClass1 } style={(style1) ? style1 : {}}>
					{col1Content}
				</div>
				<div className={ 'column is-full-mobile ' + colClass2 } style={(style2) ? style2 : {}}>
					{col2Content}
				</div>
			</div>
	)

}

export const SectionTwoCols = (props) => {

	const { rowClass, colClass1, colClass2, col1Content, col2Content, style1, style2 } = props

	return (
		<div className={ 'columns is-multiline is-centered is-vcentered is-mobile is-desktop ' + rowClass} >
			<div className={ 'column is-full-mobile ' + colClass1 } style={(style1) ? style1 : {}}>
				{col1Content}
			</div>
			<div className={ 'column is-full-mobile ' + colClass2 } style={(style2) ? style2 : {}}>
				{col2Content}
			</div>
		</div>
	)

}

export const SectionThreeCols = (props) => {

	const { rowClass, colClass1, colClass2, colClass3, col1Content, col2Content, col3Content, style1, style2} = props

	return (

			<div className={ 'columns is-variable is-multiline is-centered is-mobile is-desktop ' + rowClass } >
				<div className={ 'column ' + colClass1 } >
					{col1Content}
				</div>
				<div className={ 'column ' + colClass2 } >
					{col2Content}
				</div>
				<div className={ 'column ' + colClass3 } >
					{col3Content}
				</div>
			</div>
	)
}


export const SectionWrapper = (props) => {

	const { sectionId, sectionStyle, sectionClass, containerStyle, isFluid, isMaxDesktop, containerClass } = props

	if(isFluid){
		return (
			<section className={ 'section ' + sectionClass } id={sectionId} style={(sectionStyle) ? sectionStyle : {}}>
				<div className={ 'container is-fluid ' + containerClass } style={(containerStyle) ? containerStyle : {}}>
					{props.children}
				</div>
			</section>
		)
	}
	else if(isMaxDesktop){
		return (
			<section className={ 'section ' + sectionClass } id={sectionId} style={(sectionStyle) ? sectionStyle : {}}>
				<div className={ 'container is-max-desktop ' + containerClass } style={(containerStyle) ? containerStyle : {}}>
					{props.children}
				</div>
			</section>
		)
	}

	return (
			<section className={ 'section ' + sectionClass } id={sectionId} style={(sectionStyle) ? sectionStyle : {}}>
				<div className={ 'container ' + containerClass } style={(containerStyle) ? containerStyle : {}}>
					{props.children}
				</div>
			</section>
		)
	
}

export const SectionFourCols = (props) => {

	const { rowClass, col1Content, 
		col2Content, col3Content, col4Content, colClass1, colClass2, colClass3, colClass4, style1, style2, containerStyle } = props


	return (

		<div className={ 'columns is-variable is-multiline is-mobile is-desktop ' + rowClass }>
			<div className={ 'column is-quarter-desktop is-full-mobile ' + colClass1 } >
				{col1Content}
			</div>
			
			<div className={ 'column is-one-quarter-desktop is-full-mobile ' + colClass2 } >
				{col2Content}
			</div>
			<div className={ 'column is-quarter-desktop is-full-mobile ' + colClass3 } >
				{col3Content}
			</div>
			
			<div className={ 'column is-one-quarter-desktop is-full-mobile ' + colClass4 } >
				{col4Content}
			</div>
		</div>
	)


}


export const SectionFiveCols = (props) => {

	const { rowClass, col1Content, 
		col2Content, col3Content, col4Content, col5Content, colClass1, colClass2, colClass3, colClass4, colClass5, style1, style2, containerStyle } = props


	return (

		<div className={ 'columns is-8 is-variable is-multiline is-mobile is-desktop ' + rowClass }>
			
			<div className={ 'column is-one-fifth-desktop is-full-mobile ' + colClass1 } >
				{col1Content}
			</div>
			
			<div className={ 'column is-one-fifth-desktop is-full-mobile ' + colClass2 } >
				{col2Content}
			</div>
			<div className={ 'column is-one-fifth-desktop is-full-mobile ' + colClass3 } >
				{col3Content}
			</div>
			
			<div className={ 'column is-one-fifth-desktop is-full-mobile ' + colClass4 } >
				{col4Content}
			</div>

			<div className={ 'column is-one-fifth-desktop is-full-mobile ' + colClass5 } >
				{col5Content}
			</div>
		</div>
	)


}
