import React from 'react';
import NavBar from "@components/NavBar/Navbar";
import Footer from "@components/Footer/Footer";
const Layout = ({children}:any) => {
	return (
		<>
			<NavBar/>
				<main>{children}</main>
			<Footer/>
		</>
	);
};

export default Layout;
