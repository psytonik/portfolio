import ReactGA from "react-ga4";

const contactClick = () => ReactGA.event("eventContactClick", {method:"eventContactClick"})

const gaEvents = {
	eventContactClick: contactClick
}

export { gaEvents }
