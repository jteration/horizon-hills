import * as React from "react";

class Other extends React.Component {
	render() {
		return (
			<section id="other" className="section is-flex is-column">
				<h3 className="tab-heading">Other Conveniences</h3>
				<img
					loading="lazy"
					alt="King Soopers"
					className="is-centered-img"
					width="1024"
					src={"/horizon-hills/img/soopers-thin.webp"}
				/>
				<hr />
				<h4>Grocery Stores</h4>
				<p>
					<a
						href="https://haysmarket.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hays Market
					</a>{" "}
					(4.6 miles from Horizon Hills) is a family owned grocery store right
					next door in the nearby town of Berthoud, Colorado. This is a one-stop
					shop where folks can meet all of their everyday grocery needs as well
					as sample specialty items from around the world. Remember that when
					you shop at Hays Market you are keeping dollars in the local economy,
					creating local jobs, and supporting a locally owned business.{" "}
				</p>
				<p>
					<a
						href="https://www.kingsoopers.com/stores/details/620/00074?cid=loc_62000074_gmb"
						target="_blank"
						rel="noopener noreferrer"
					>
						King Soopers
					</a>{" "}
					(3.3 miles from Horizon Hills) is one of the most recognizable grocery
					store brands in Colorado and for good reason. This Loveland, Colorado
					location has everything you could want in a grocery store including a
					online ordering for the bakery and deli. Other amenities include a gas
					station, pharmacy, and bank.
				</p>
				<p>
					<a
						href="https://local.safeway.com/safeway/co/loveland/860-cleveland-ave.html?"
						target="_blank"
						rel="noopener noreferrer"
					>
						Safeway
					</a>{" "}
					(4 miles from Horizon Hills) is another one of Colorado’s most iconic
					grocery store brands and provides many of the same services and items
					as King Soopers. Online shopping and grocery delivery are services
					that may set this grocery store apart from the others.{" "}
				</p>
				<h4>Gas Stations</h4>
				<p>
					Click any of the links below for directions to gas stations near
					Horizon Hills. All of these gas stations are within 5 miles of Horizon
					Hills.
				</p>
				<p>
					{" "}
					<a
						href="https://www.google.com/maps/dir/''/Conoco,+1095+1st+St,+Berthoud,+CO+80513/@40.312324,-105.1446871,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8769550bc06692bb:0xb60c561b96114308!2m2!1d-105.0746472!2d40.3123451"
						target="_blank"
						rel="noopener noreferrer"
					>
						Conoco in Berthoud, Colorado.
					</a>
				</p>
				<p>
					{" "}
					<a
						href="https://www.google.com/maps/dir/''/gas+stations+near+campion+colorado/@40.3048435,-105.1723419,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876955eacc6b0b09:0x8fc1dee37fce1955!2m2!1d-105.102302!2d40.3048646"
						target="_blank"
						rel="noopener noreferrer"
					>
						Kwik Korner Inc. in Berthoud, Colorado.
					</a>
				</p>
				<p>
					{" "}
					<a
						href="https://www.google.com/maps/dir/''/gas+stations+near+campion+colorado/data=!4m5!4m4!1m0!1m2!1m1!1s0x876953905952e987:0x590ba61b31153bb6?sa=X&ved=2ahUKEwjxoaio_b3cAhUI16wKHe0fBnUQ9RcwAHoECAEQFQ"
						target="_blank"
						rel="noopener noreferrer"
					>
						Shell in Loveland, Colorado.
					</a>
				</p>
				<p>
					{" "}
					<a
						href="https://www.google.com/maps/dir/''/gas+stations+near+campion+colorado/@40.3780755,-105.1630391,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87695391e16f5f5b:0x69e6d1f2f1be5c03!2m2!1d-105.0929992!2d40.3780966"
						target="_blank"
						rel="noopener noreferrer"
					>
						R&S Food and Gas in Loveland, Colorado.
					</a>
				</p>
				<p>
					{" "}
					<a
						href="https://www.google.com/maps/dir/''/gas+stations+near+campion+colorado/data=!4m5!4m4!1m0!1m2!1m1!1s0x876953775827e56d:0x80b0c2e575d4bac8?sa=X&ved=2ahUKEwjxl8ro_b3cAhUEX60KHa5wBBIQ9RcwAHoECAEQFA"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mini Food Mart in Loveland, Colorado.
					</a>
				</p>
				<div className="buttons has-addons is-centered">
					<a
						onClick={() => this.props._toggleModal("Other Tab")}
						className="button is-danger is-medium tab-button"
					>
						Get in touch today!
					</a>
				</div>
			</section>
		);
	}
}

export default Other;
