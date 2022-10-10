import ReactGA from "react-ga4";

const contactClick = () => ReactGA.event("click", {method:"Click"})

const gaEvents = {
	eventContactClick: contactClick
}

export { gaEvents }
