import React, { Component } from 'react';
import { Text } from 'react';

class HyperText extends React.Component {

	render() {
		var contents;
		
		if (typeof(this.props.children)=== "string") {
			let tokens = this.props.children.split(/\s/);
			
			contents = tokens.map((token, i) => {
				let hasSpace = i !==(tokens.length -1);
				let maybeSpace = hasSpace ? ' ' : '';
				
				if (token.match(/^https?\:\//)) {
					return (
						<a href={token} target="_blank">
							{token}{maybeSpace}
						</a>
					)
				} else {
					return token + maybeSpace;
				}	
			});
		} else {
		  return <Text {...this.props}/>
	}
	
	return (
		<div {...this.props}>
			{contents}
		</div>
	)
}
	

}

export default HyperText