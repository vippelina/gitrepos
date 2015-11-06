import React from "react";
import superagent from "superagent"
import RepoList from "./repoList"

class Main extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.data = [];
	// }
	searchRepos = evt => {
		evt.preventDefault();
		var searchText = this.refs.searchText.getDOMNode().value;
	    superagent.get("https://api.github.com/search/repositories")
	      .query({ q: searchText })
	      .send()
	      .end((err, res) => {
	         console.log(res.body.items);
	         this.setState({repos: res.body.items});
	      })
	}
	render(){
		return(
			<RepoList/>
		)
	}
}

export default Main;