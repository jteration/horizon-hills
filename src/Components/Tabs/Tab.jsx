import * as React from "react";

class Tab extends React.Component {
	render() {
		const { active, text, _handleTabToggle } = this.props;
		return (
			<li onClick={() => _handleTabToggle(text)} className={active}>
				<a>
					<span>{text}</span>
				</a>
			</li>
		);
	}
}

export default Tab;
