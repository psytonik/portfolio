import ReactGA from "react-ga4";

const contactClick = () => ReactGA.event("eventContactClick", {method:"eventContactClick"})
const msgSentClick = () => ReactGA.event("eventMsgSentClick",{method: "eventMsgSentClick"})

const gaEvents = {
	eventContactClick: contactClick,
	eventMailSent: msgSentClick
}

export { gaEvents }
