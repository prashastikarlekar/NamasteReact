/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
	<h1 id='title' key='h1'>
		Food Villa
	</h1>
);

const HeaderComponent = () => (
	<div>
		<Title />
		<h2 id='heading' key='heading2'>
			Namaste
		</h2>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
