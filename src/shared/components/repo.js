import React from "react";

class Repo extends React.Component{
	render(){
		return(
			<div className="repo">
				<h2>{this.props.data.name}</h2>
			</div>
		)
	}
}

export default Repo;