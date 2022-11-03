import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = ["Link to google.com", "Link to facebook.com", "Link to amazon.com"];
const itemLink = navlinkItems.map((link) => (
	<a className="nav-link" href="#" >
        {link}
	</a>
));

const content = (
	<ul className="nav">
		<li className="nav-item">{itemLink}</li>
	</ul>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
