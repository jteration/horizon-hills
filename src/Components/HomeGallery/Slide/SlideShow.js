import * as React from "react";
import "./slide.css";

class SlideShow extends React.Component {
	state = {
		index: 0
	};

	width = 0;
	imageContainer = null;
	timeout = null;

	componentDidMount() {
		this.allImages = document.querySelectorAll(".images-wrap div");
		this.width = document.querySelector(".react-slideshow-wrapper").clientWidth;
		this.setWidth();
		this.addResizeListener();
	}

	setWidth = () => {
		const fullWidth = this.width * (this.props.images.length + 2);
		this.imageContainer.style.width = fullWidth + "px";
		this.imageContainer.style.transform = `translate(-${
			this.width * (this.state.index + 1)
		}px)`;
		this.applySlideStyle();
	};

	addResizeListener = () => {
		window.addEventListener("resize", () => {
			this.width = document.querySelector(
				".react-slideshow-wrapper"
			).clientWidth;
			this.setWidth();
		});
	};

	applySlideStyle = () => {
		const allImagesLen = this.allImages.length;
		for (let i = 0; i < allImagesLen; i += 1) {
			this.allImages[i].style.width = this.width + "px";
		}
		// this.allImages.forEach((eachImage, index) => {
		//   eachImage.style.width = this.width + 'px';
		// });
	};

	slideImages = (type) => {
		let index = this.state.index;
		const images = this.props.images;

		clearTimeout(this.timeout);
		index = type === "next" ? index + 1 : index - 1;

		this.imageContainer
			? (this.imageContainer.style.transition = `all ${
					this.props.transitionDuration / 1000
			  }s`)
			: null;

		this.imageContainer
			? (this.imageContainer.style.transform = `translate(-${
					this.width * (index + 1)
			  }px)`)
			: null;

		setTimeout(() => {
			this.imageContainer
				? (this.imageContainer.style.transition = "none")
				: null;
			this.setState({
				index:
					index < 0 ? images.length - 1 : index >= images.length ? 0 : index
			});
		}, this.props.transitionDuration);
	};

	render() {
		const { images, duration } = this.props;
		const index = this.state.index;
		const style = { transform: `translate(-${(index + 1) * this.width}px)` };
		this.timeout = setTimeout(() => {
			return this.slideImages("next");
		}, duration);
		return (
			<div className="react-slideshow-container">
				<div
					className="nav"
					onClick={() => {
						return this.slideImages("prev");
					}}
				>
					<i className="fas fa-arrow-left" />
				</div>
				<div className="react-slideshow-wrapper slide">
					<div
						className="images-wrap"
						style={style}
						ref={(wrap) => {
							return (this.imageContainer = wrap);
						}}
					>
						<div data-index="-1">
							<img src={images[images.length - 1]} alt="" />
						</div>
						{images.map((each, key) => {
							return (
								<div
									data-index={key}
									key={key}
									className={key === index ? "active" : ""}
								>
									<img src={each} alt="" />
								</div>
							);
						})}
						<div data-index="-1">
							<img src={images[0]} alt="" />
						</div>
					</div>
				</div>
				<div
					className="nav"
					onClick={() => {
						return this.slideImages("next");
					}}
				>
					<i className="fas fa-arrow-right" />
				</div>
			</div>
		);
	}
}

SlideShow.defaultProps = {
	duration: 5000,
	transitionDuration: 1000
};

export default SlideShow;
