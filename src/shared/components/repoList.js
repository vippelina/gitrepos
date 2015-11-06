import React from "react";
import superagent from "superagent";
import Repo from "./repo";

class RepoList extends React.Component{
	constructor(){
		super();
		this.state = {
			data: []
		}

	}
	
	componentWillMount(){
		superagent.get("https://api.github.com/search/repositories")
		.query({q: "angular"})
		.send()
		.end((err, res) =>{
			console.log(res.body.items);
			this.setState({data: res.body.items});
		})
	}

	searchRepos = evt => {
		var searchText = this.refs.searchText.getDOMNode().value;
		evt.preventDefault();
		superagent.get("https://api.github.com/search/repositories")
			.query({q: searchText})
			.send()
			.end((err, res) =>{
				console.log(res.body.items);
				this.setState({data: res.body.items});
			})
			// .end(function(err, res){
			// 	console.log(res.body);
			// 	this.setState({data: res.body.items})
			// })
	}
	render(){
		var theList = this.state.data.map((repo) => {
			return(
				<Repo data={repo}/>
			)	
		}) 
		return (
			<div className="repos">
				<form className="searchRepo" onSubmit={this.searchRepos}>
					<input type="text" ref="searchText"/>
				</form>
		 		{theList}
			</div>
		)
	}
}

export default RepoList;