import express from "express"
import React from "react"
const app = express();
import Main from "../shared/components/main"


//set up jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get("/*", function(req, res){
	let content = React.renderToString(<Main/>);
	res.render('index', {content: content});
})

app.listen(3000);