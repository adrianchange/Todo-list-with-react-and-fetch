import React from "react";

//include images into your bundle
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<TodoList />
		</div>
	);
};

export default Home;
