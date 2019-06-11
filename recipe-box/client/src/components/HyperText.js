import React from 'react';
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
						<a href={token} key={i} target="_blank">
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
		<span {...this.props}>
			{contents}
		</span>
	)
}
	

}

export default HyperText