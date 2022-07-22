import * as React from "react";

class Restrictions extends React.Component {
	render() {
		return (
			<section id="restrictions" className="section is-flex is-column">
				<h2 className="tab-heading">
					Horizon Hills Community Rules and Restrictions
				</h2>
				<img
					alt="Locked door"
					className="is-centered-img"
					width="1024"
					src={"/horizon-hills/img/restrictions-thin.jpg"}
				/>
				<hr />
				<ul>
					<li>
						At least one resident for each home within Horizon Hills shall be
						age 55 or better.
					</li>
					<li>
						No resident or guest may create loud or disturbing noises between
						the hours of 9:00 p.m. and 7:00 a.m.
					</li>
					<li>
						The maximum number of domestic household pets is two (2); any
						combination is acceptable (i.e.,:2 dogs or 2 cats or 1 of each). No
						animals may cause a disturbance.
					</li>
					<li>
						The exterior of each home in the community shall be maintained in a
						neat, clean condition and remain in good physical repair.
					</li>
					<li>
						Horizon Hills facilities are provided for the exclusive use of the
						residents and their guests.
					</li>
					<li>
						Home-based businesses are permitted, but must seek management's
						written approval, and are subject to the Horizon Hills Rules and
						Regulations. Automotive repair businesses are prohibited.
					</li>
					<li>Small satellite dishes are permitted.</li>
					<li>NO RENTERS ALLOWED - Owner Occupied Only.</li>
				</ul>
				<div className="buttons has-addons is-centered">
					<a
						onClick={() => this.props._toggleModal("Restrictions Tab")}
						className="button is-danger is-medium tab-button"
					>
						Get in touch today!
					</a>
				</div>
			</section>
		);
	}
}

export default Restrictions;
