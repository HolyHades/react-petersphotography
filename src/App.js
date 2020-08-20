import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import TextareaAutosize from "react-textarea-autosize";
import titleimg from "./photos/titleimg.png";
import img1 from "./photos/pic1.jpg";
import img2 from "./photos/pic2.jpg";
import img3 from "./photos/pic3.jpg";
import img4 from "./photos/pic4.jpg";
import img5 from "./photos/pic5.jpg";
import img6 from "./photos/pic6.jpg";
import img7 from "./photos/pic7.jpg";
import img8 from "./photos/pic8.jpg";
import img9 from "./photos/pic9.jpg";
import img10 from "./photos/pic10.jpg";
import img11 from "./photos/pic11.jpg";
import img12 from "./photos/pic12.jpg";
import aboutimg1 from "./photos/aboutimg1.jpg";
import aboutimg2 from "./photos/aboutimg2.png";

export default function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<div className="title">
						<img
							src={titleimg}
							alt="title"
							className="titleimg"
						></img>
					</div>
				</header>
			</div>
			<Switch>
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
				>
					<Route path="/" exact component={Redirect}></Route>
					<Route path="/de" exact component={HomeDE} />
					<Route path="/de/galerie" component={Galerie} />
					<Route path="/de/angebot" component={Angebot} />
					<Route path="/de/kontakt" component={Kontakt} />
					<Route path="/de/about" component={AboutDE} />
					<Route path="/en" exact component={HomeEN} />
					<Route path="/en/gallery" component={Gallery} />
					<Route path="/en/prices" component={Prices} />
					<Route path="/en/contact" component={Contact} />
					<Route path="/en/about" component={AboutEN} />
				</AnimatedSwitch>
			</Switch>
			<Switch>
				<Route path="/de/image1" component={Image1DE} />
				<Route path="/de/image2" component={Image2DE} />
				<Route path="/de/image3" component={Image3DE} />
				<Route path="/de/image4" component={Image4DE} />
				<Route path="/de/image5" component={Image5DE} />
				<Route path="/de/image6" component={Image6DE} />
				<Route path="/de/image7" component={Image7DE} />
				<Route path="/de/image8" component={Image8DE} />
				<Route path="/de/image9" component={Image9DE} />
				<Route path="/de/image10" component={Image10DE} />
				<Route path="/de/image11" component={Image11DE} />
				<Route path="/de/image12" component={Image12DE} />
				<Route path="/en/image1" component={Image1EN} />
				<Route path="/en/image2" component={Image2EN} />
				<Route path="/en/image3" component={Image3EN} />
				<Route path="/en/image4" component={Image4EN} />
				<Route path="/en/image5" component={Image5EN} />
				<Route path="/en/image6" component={Image6EN} />
				<Route path="/en/image7" component={Image7EN} />
				<Route path="/en/image8" component={Image8EN} />
				<Route path="/en/image9" component={Image9EN} />
				<Route path="/en/image10" component={Image10EN} />
				<Route path="/en/image11" component={Image11EN} />
				<Route path="/en/image12" component={Image12EN} />
			</Switch>
		</Router>
	);
}

function Redirect() {
	return <meta httpEquiv="refresh" content="0, /de"></meta>;
}

function HomeDE() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/de">Home</Link>
						</li>
						<li>
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li>
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li>
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li>
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en">Englisch</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/de">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en">Englisch</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodyhome">
					<h2>Willkommen bei PetersPhotography</h2>
					<h3>Willkommen auf unserer Internetseite!</h3>
					<p>
						Wir, Hendrik Peters und Felix Fröhlich, sind zwei
						aufstrebende Fotografen, die verschiedene Dienste zu
						attraktiven Preisen anbieten. Hauptsächlich
						konzentrieren wir uns auf Portraitfotografie.
					</p>
					<p>
						Mehr zu unserem Angebot finden sie{" "}
						<Link to="/de/angebot">hier.</Link>
					</p>
					<h3>Modern, zuverlässig, schnell</h3>
					<p>
						Wir arbeiten mit modernster Technik und nutzen diese, um
						die Qualität der Shootings zu verbessern. Während dem
						Shooting besteht die Möglichkeit, sich bereits
						geschossene Bilder anzuschauen, sodass Sie entscheiden
						können, wie es weitergeht.
					</p>
					<p>
						Die Wünsche unseren Kunden sind für uns Priorität.
						Deswegen bieten wir Ihnen die Möglichkeit, sich vor den
						Shootings mit uns in Verbindung zu setzen, um Details
						und Fragen im Voraus zu klären. Somit spart man auch
						Zeit während des Shootings und kann sich dort auf das
						Wesentliche konzentrieren: die Fotos.
					</p>
					<p>
						Sie bekommen normalerweise bereits ein paar Stunden nach
						dem Shooting Zugriff auf die fertigen Fotos, und können
						sich dann die besten Bilder aussuchen und markieren.
						Weiterhin können Sie uns Bescheid geben, ob ausgewählte
						Bilder auch in Schwarzweiß verfügbar sein sollen, oder
						ob wir auf bestimmen Bildern etwas retuschieren sollen.
						Falls es mal länger dauern sollte, setzen wir uns
						umgehend mit Ihnen in Verbindung.
					</p>
					<p>
						Falls Sie Fragen an uns haben, kontaktieren sie und
						einfach per E-Mail:{" "}
						<a href="mailto:hendrikfelixphotography@gmail.com">
							hendrikfelixphotography@gmail.com
						</a>
					</p>
				</div>
			</main>
		</div>
	);
}

function Galerie() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/de">Home</Link>
						</li>
						<li>
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li>
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li>
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li>
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/gallery">Englisch</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/de">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/gallery">Englisch</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodygallery">
					<h2>Bildergalerie</h2>
					<div className="gallery">
						<a href="/de/image1">
							<img src={img1} alt="img1"></img>
						</a>
						<a href="/de/image2">
							<img src={img2} alt="img1"></img>
						</a>
						<a href="/de/image3">
							<img src={img3} alt="img1"></img>
						</a>
						<a href="/de/image4">
							<img src={img4} alt="img1"></img>
						</a>
						<a href="/de/image5">
							<img src={img5} alt="img1"></img>
						</a>
						<a href="/de/image6">
							<img src={img6} alt="img1"></img>
						</a>
						<a href="/de/image7">
							<img src={img7} alt="img1"></img>
						</a>
						<a href="/de/image8">
							<img src={img8} alt="img1"></img>
						</a>
						<a href="/de/image9">
							<img src={img9} alt="img1"></img>
						</a>
						<a href="/de/image10">
							<img src={img10} alt="img1"></img>
						</a>
						<a href="/de/image11">
							<img src={img11} alt="img1"></img>
						</a>
						<a href="/de/image12">
							<img src={img12} alt="img1"></img>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}

function Angebot() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/de">Home</Link>
						</li>
						<li>
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li>
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li>
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li>
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/prices">Englisch</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/de">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/prices">Englisch</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodyprices">
					<h2>Unser Angebot</h2>
					<p>Kommt in Kürze. Kontaktieren sie uns per E-Mail:</p>
					<a href="mailto:hendrikfelixphotography@gmail.com">
						hendrikfelixphotography@gmail.com
					</a>
				</div>
			</main>
		</div>
	);
}

function Kontakt() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/de">Home</Link>
						</li>
						<li>
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li>
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li>
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li>
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/contact">Englisch</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/de">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/contact">Englisch</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodycontact">
					<h2>Kontakt</h2>
					<p>
						Schreiben sie uns eine E-Mail an{" "}
						<a href="mailto:hendrikfelixphotography@gmail.com">
							hendrikfelixphotography@gmail.com
						</a>{" "}
						oder schicken sie uns eine Nachricht mit dem unten
						stehenden Formular.
					</p>
					<form name="contact" method="post" className="form">
						<input type="hidden" name="form-name" value="contact" />
						<div className="inputwrapper">
							<input
								type="text"
								name="name"
								id="nameinput"
								required
							></input>
							<label for="name" id="namelabel">
								Name
							</label>
						</div>
						<div className="inputwrapper">
							<input
								type="text"
								name="email"
								id="emailinput"
								required
							></input>
							<label for="email" id="emaillabel">
								E-Mail
							</label>
						</div>
						<div className="inputwrapper">
							<TextareaAutosize
								name="message"
								id="messagetextarea"
								required
							></TextareaAutosize>
							<label for="Message" id="messagelabel">
								Nachricht
							</label>
						</div>
						<button type="submit" className="submitde">
							Abschicken
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}

function AboutDE() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/de">Home</Link>
						</li>
						<li>
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li>
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li>
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li>
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/about">Englisch</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/de">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/galerie">Galerie</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/angebot">Angebot</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/kontakt">Kontakt</Link>
						</li>
						<li className="linkitem">
							<Link to="/de/about">Über Uns</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=de">
								Shop
							</a>
						</li>
						<li>
							<Link to="/en/about">Englisch</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<h2 className="abouttext">Über Uns</h2>
				<div className="mainbodyabout">
					<img src={aboutimg1} alt="aboutimg1"></img>
					<img src={aboutimg2} alt="aboutimg2"></img>
					<p>
						Mein Name ist Hendrik Edmund Peters, ich bin 18 Jahre
						alt und werde ab dem 1.9.2020 als BFDler im Flensburger
						Segel-Club aktiv sein.
						<br />
						Fotografieren ist eine meiner größten Leidenschaften,
						die ich seit August 2019 aktiv betreibe.
						<br />
						Schnell habe ich die Portraitfotografie für mich
						entdeckt und habe gemerkt, dass ich ein Talent dafür
						habe, die Emotionen von Menschen in Bildern
						festzuhalten. Seitdem fotografiere ich leidenschaftlich
						gerne andere Personen und probiere mich immer weiter
						aus.
						<br />
						Meine Kamera, die ich mir im August 2019 zugelegt habe,
						ist die Sony Alpha 6000.
						<br />
						Wenn es an die Shootings geht, bin ich immer sehr
						höflich und respektvoll und meist auch recht gesprächig.
						Ich versuche meine Shootingpartner so oft es geht in
						natürlichen Situationen zu fotografieren, aber es können
						auch gerne Fotos nach Wunsch sein.
						<br />
						Ich nehme meist mein Tablet zum Fotografieren mit, damit
						man sich schon direkt Ergebnisse anschauen kann, was man
						vielleicht noch machen möchte. Da beziehe ich die
						Fotografierten auch immer sehr gerne mit ein.
						<br />
						Abseits vom Fotografieren habe ich gerade mein Abitur
						gemacht, und bin seit ich sechs Jahre alt bin auf dem
						Wasser als Segler aktiv. Dazu spiele ich seit der
						Grundschule Geige. Diese Hobbies gehören neben dem
						Fotografierenzu meinen größten Leidenschaften.
					</p>
					<p>
						Ich bin Felix Fröhlich, 18 Jahre alt, und kümmere mich
						hier um die Website. Zudem fotografiere ich auch, damit
						beschäftige ich mich seit Sommer 2019.
						<br />
						Ich fotografiere sowohl Portraits, als auch Natur, Tiere
						und anderes. Die Kamera, mit der ich begonnen habe, und
						auch immer noch nutze, ist eine Canon EOS 550D.
						<br />
						Bei Shootings versuche ich, meine Kunden gut
						einzubinden, sodass am Ende das entsteht, was sie sich
						vorgestellt haben.
					</p>
				</div>
			</main>
		</div>
	);
}

function HomeEN() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/en">Home</Link>
						</li>
						<li>
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/en/prices">Prices</Link>
						</li>
						<li>
							<Link to="/en/contact">Contact</Link>
						</li>
						<li>
							<Link to="/en/about">About Us</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de">German</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/en">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/prices">Prices</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/contact">Contact</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/about">About Us</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de">German</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodyhome">
					<h2>Welcome to PetersPhotography</h2>
					<h3>Welcome to our Website!</h3>
					<p>
						We, Hendrik Peters and Felix Froehlich are two young and
						ambitious photographers that offer various kinds of
						shootings to attractive prices. We focus mainly on
						portrait photography.
					</p>
					<p>
						You can find more information about what we offer{" "}
						<Link to="/en/prices">here.</Link>
					</p>
					<h3>Modern, reliable, fast</h3>
					<p>
						We work with modern technology and are trying to use it
						to improve the quality of our shootings. During the
						shooting you have the opportunity to look at the already
						taken pictures so you can decide how we continue the
						shooting.
					</p>
					<p>
						Our customers are our number one priority. That is why
						we give you the opportunity to get in contact with us
						before the shooting starts. There we can discuss your
						questions and details, how you want the shooting to look
						like. Because of this we save time during the shooting
						so we can focus on the essential: the photos.
					</p>
					<p>
						Normally it takes a few hours until you get access to
						the edited pictures. There you can decide which pictures
						are your personal favourites and which ones you may want
						to be black and white or if you want that we retouch
						some details. If it should take longer than a few hours,
						we will contact you immediately.
					</p>
					<p>
						If you have questions, feel free to contact us via
						E-Mail:{" "}
						<a href="mailto:hendrikfelixphotography@gmail.com">
							hendrikfelixphotography@gmail.com
						</a>
					</p>
				</div>
			</main>
		</div>
	);
}

function Gallery() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/en">Home</Link>
						</li>
						<li>
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/en/prices">Prices</Link>
						</li>
						<li>
							<Link to="/en/contact">Contact</Link>
						</li>
						<li>
							<Link to="/en/about">About Us</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/galerie">German</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/en">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/prices">Prices</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/contact">Contact</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/about">About Us</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/galerie">German</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodygallery">
					<h2>Picture Gallery</h2>
					<div className="gallery">
						<a href="/en/image1">
							<img src={img1} alt="img1"></img>
						</a>
						<a href="/en/image2">
							<img src={img2} alt="img1"></img>
						</a>
						<a href="/en/image3">
							<img src={img3} alt="img1"></img>
						</a>
						<a href="/en/image4">
							<img src={img4} alt="img1"></img>
						</a>
						<a href="/en/image5">
							<img src={img5} alt="img1"></img>
						</a>
						<a href="/en/image6">
							<img src={img6} alt="img1"></img>
						</a>
						<a href="/en/image7">
							<img src={img7} alt="img1"></img>
						</a>
						<a href="/en/image8">
							<img src={img8} alt="img1"></img>
						</a>
						<a href="/en/image9">
							<img src={img9} alt="img1"></img>
						</a>
						<a href="/en/image10">
							<img src={img10} alt="img1"></img>
						</a>
						<a href="/en/image11">
							<img src={img11} alt="img1"></img>
						</a>
						<a href="/en/image12">
							<img src={img12} alt="img1"></img>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}

function Prices() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/en">Home</Link>
						</li>
						<li>
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/en/prices">Prices</Link>
						</li>
						<li>
							<Link to="/en/contact">Contact</Link>
						</li>
						<li>
							<Link to="/en/about">About Us</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/angebot">German</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/en">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/prices">Prices</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/contact">Contact</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/about">About Us</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/angebot">German</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodyprices">
					<h2>Out Prices</h2>
					<p>Coming soon. Please contact us via E-Mail:</p>
					<a href="mailto:hendrikfelixphotography@gmail.com">
						hendrikfelixphotography@gmail.com
					</a>
				</div>
			</main>
		</div>
	);
}

function Contact() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/en">Home</Link>
						</li>
						<li>
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/en/prices">Prices</Link>
						</li>
						<li>
							<Link to="/en/contact">Contact</Link>
						</li>
						<li>
							<Link to="/en/about">About Us</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/kontakt">German</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/en">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/prices">Prices</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/contact">Contact</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/about">About Us</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/kontakt">German</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<div className="mainbodycontact">
					<h2>Contact</h2>
					<p>
						Send us an E-Mail to{" "}
						<a href="mailto:hendrikfelixphotography@gmail.com">
							hendrikfelixphotography@gmail.com
						</a>{" "}
						or send us a message via the form below.
					</p>
					<form name="contact" method="post" className="form">
						<input type="hidden" name="form-name" value="contact" />
						<div className="inputwrapper">
							<input
								type="text"
								name="name"
								id="nameinput"
								required
							></input>
							<label for="name" id="namelabel">
								Name
							</label>
						</div>
						<div className="inputwrapper">
							<input
								type="text"
								name="email"
								id="emailinput"
								required
							></input>
							<label for="email" id="emaillabel">
								E-Mail
							</label>
						</div>
						<div className="inputwrapper">
							<TextareaAutosize
								name="message"
								id="messagetextarea"
								required
							></TextareaAutosize>
							<label for="Message" id="messagelabel">
								Message
							</label>
						</div>
						<button type="submit" className="submiten">
							Submit
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}

function AboutEN() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<header>
				<nav>
					<ul className="navbar">
						<li>
							<Link to="/en">Home</Link>
						</li>
						<li>
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/en/prices">Prices</Link>
						</li>
						<li>
							<Link to="/en/contact">Contact</Link>
						</li>
						<li>
							<Link to="/en/about">About Us</Link>
						</li>
						<li>
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/about">German</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className={!open ? "navoff" : "navon"}>
						<li className="titleitem">
							<h2>Navigation</h2>
						</li>
						<li className="linkitem">
							<Link to="/en">Home</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/gallery">Gallery</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/prices">Prices</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/contact">Contact</Link>
						</li>
						<li className="linkitem">
							<Link to="/en/about">About Us</Link>
						</li>
						<li className="linkitem">
							<a href="https://www.pictrs.com/petersphotography?l=en">
								Shop
							</a>
						</li>
						<li>
							<Link to="/de/about">German</Link>
						</li>
					</ul>
					<div
						className={!open ? "burgeroff" : "burgeron"}
						onClick={() => setOpen(!open)}
					>
						<div className={!open ? "bar1off" : "bar1on"}></div>
						<div className={!open ? "bar2off" : "bar2on"}></div>
						<div className={!open ? "bar3off" : "bar3on"}></div>
					</div>
				</nav>
			</header>
			<main>
				<h2 className="abouttext">About Us</h2>
				<div className="mainbodyabout">
					<img src={aboutimg1} alt="aboutimg1"></img>
					<img src={aboutimg2} alt="aboutimg2"></img>
					<p>
						My Name is Hendrik Edmund Peters, I am 18 years old and
						at the 01.09.2020 I will begin a voluntary service in
						the Flensburger Sailing-Club.
						<br />
						Photography is one of my biggest passions, I take
						pictures with my Sony Alpha 6000 since August 2019.
						<br />
						Since then I found out that I have a talent in portrait
						photography and keeping the emotions of people in
						pictures of them. I love to take pictures of people and
						I´m regularly finding new creative ways to do this.
						<br />
						Talking about shootings I´m always kind and respectful,
						I also love to talk to the people while I take pictures
						of them. I´m trying to take natural photos but I´m also
						open for the wishes of my clients.
						<br />
						I usually take my tablet with me to the shootings so my
						clients can directly look at some pictures during the
						shooting and therefore can decide how we continue the
						shooting.
						<br />
						Besides photography I recently finished school, I am
						sailing since I was 6 years old and play the violin
						since primary school. These hobbies belong besides
						photography to my biggest passions.
					</p>
					<p>
						My Name is Felix Fröhlich, I'm 18 years old, and I
						manage the website. Photography is one of my greatest
						passions since I picked it up in Summer 2019.
						<br />
						I take portraits, as well as shots of nature, animals
						and anything else that comes my way. The camera I use is
						a Canon EOS 550D, which I also first started with.
						<br />
						When taking photos, I try to engage with customers as
						much as possible, so that I can realize their vision.
					</p>
				</div>
			</main>
		</div>
	);
}

function Image1DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img1} alt="" />
			</div>
			<Link to="/de/image12">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image2">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image2DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img2} alt="" />
			</div>
			<Link to="/de/image1">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image3">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image3DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img3} alt="" />
			</div>
			<Link to="/de/image2">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image4">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image4DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img4} alt="" />
			</div>
			<Link to="/de/image3">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image5">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image5DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img5} alt="" />
			</div>
			<Link to="/de/image4">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image6">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image6DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img6} alt="" />
			</div>
			<Link to="/de/image5">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image7">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image7DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img7} alt="" />
			</div>
			<Link to="/de/image6">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image8">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image8DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img8} alt="" />
			</div>
			<Link to="/de/image7">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image9">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image9DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img9} alt="" />
			</div>
			<Link to="/de/image8">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image10">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image10DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img10} alt="" />
			</div>
			<Link to="/de/image9">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image11">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image11DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img11} alt="" />
			</div>
			<Link to="/de/image10">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image12">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image12DE() {
	return (
		<main className="imagecontainer">
			<Link to="/de/galerie">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img12} alt="" />
			</div>
			<Link to="/de/image11">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/de/image1">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image1EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img1} alt="" />
			</div>
			<Link to="/en/image12">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image2">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image2EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img2} alt="" />
			</div>
			<Link to="/en/image1">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image3">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image3EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img3} alt="" />
			</div>
			<Link to="/en/image2">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image4">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image4EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img4} alt="" />
			</div>
			<Link to="/en/image3">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image5">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image5EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img5} alt="" />
			</div>
			<Link to="/en/image4">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image6">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image6EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img6} alt="" />
			</div>
			<Link to="/en/image5">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image7">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image7EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img7} alt="" />
			</div>
			<Link to="/en/image6">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image8">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image8EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img8} alt="" />
			</div>
			<Link to="/en/image7">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image9">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image9EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img9} alt="" />
			</div>
			<Link to="/en/image8">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image10">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image10EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img10} alt="" />
			</div>
			<Link to="/en/image9">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image11">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image11EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img11} alt="" />
			</div>
			<Link to="/en/image10">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image12">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}

function Image12EN() {
	return (
		<main className="imagecontainer">
			<Link to="/en/gallery">
				<span className="close">&times;</span>
			</Link>
			<div className="image">
				<img src={img12} alt="" />
			</div>
			<Link to="/en/image11">
				<span className="prev">&#10094;</span>
			</Link>
			<Link to="/en/image1">
				<span className="next">&#10095;</span>
			</Link>
		</main>
	);
}
