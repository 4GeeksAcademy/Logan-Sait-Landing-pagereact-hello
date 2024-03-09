import React from "react";
import Footer from "./footer";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";

const Home = () => {
    return (
        <><div className="container">
			<Navbar/>
     
			 <Jumbotron/>
   
			
			<Card />
			<Card />
			<Card />
			<Card />
		</div><div>
				<Footer />
			</div></>
    );
};

export default Home;

