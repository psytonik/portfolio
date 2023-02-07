import React from 'react';
import NavBar from "@components/NavBar/Navbar";
import Footer from "@components/Footer/Footer";
import ChatWidget from "@components/ChatWidget/ChatWidget";

const Layout = ({children}:any) => {
	return (
		<>
			<NavBar/>
				<main>{children}</main>
				<ChatWidget/>
			<Footer/>
		</>
	);
};

export default Layout;
