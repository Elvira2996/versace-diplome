import './Home.css';
import video from '../../images/video.mp4'
import { Link } from 'react-router-dom'
import Gallery1 from "../../images/gallery1.jpg"
import Gallery2 from "../../images/gallery2.jpg"
import Gallery3 from "../../images/gallery3.jpg"
import Gallery4 from "../../images/gallery4.jpg"
import Gallery5 from "../../images/gallery5.jpg"
import Present1 from "../../images/present1.jpg"
import Present2 from "../../images/present2.jpg"

import MainBag from "../../images/main_bag.jpg"
import recentImage1 from '..//..//images/recent1.jpg'
import recentImage2 from '..//..//images/recent2.jpg'
import recentImage3 from '..//..//images/recent3.jpg'
import recentImage4 from '..//..//images/recent4.jpg'
import ShopSlide from '../../Components/ShopSlide/ShopSlide';
import FooterMail from '../../Components/FooterMail/FooterMail';




function Home() {

	return (
		<>

			<section className="main">
				<div className="video-container">
					<video width="100%" height="auto" controls autoPlay muted loop> <source src={video} type="video/mp4" /></video>
					<h1 className="video-title">La Vacanza 2024</h1>
					<div className="buttons">
						<button className="btn_main">Shop women's</button>
						<button className="btn_main">Discover More</button>
					</div>
				</div>
			</section>

			<section className="gallery">
				<div className="gallery-content flex">
					<div className="gallery-left">
						<h2>New In</h2>
					</div>
					<div className="gallery-right">
						<div className="gallery-images">
							<div className="gallery-image">
								<img src={Gallery1} alt="#" />
								<p className="gallery-text"> <Link to="#">Athena</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery2} alt="#" />
								<p className="gallery-text"> <Link to="#">Medusa Buckle</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery3} alt="#" />
								<p className="gallery-text"> <Link to="#">Medusa '95</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery4} alt="#" />
								<p className="gallery-text"> <Link to="#">Underwear And <br/> Beachwear</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery5} alt="#" />
								<p className="gallery-text"> <Link to="#">Jewerly</Link></p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="presentation">
				<div className="presentation_image">
					<img src={Present1} alt="#" />
					<div className="image_content">
						<h2 className="presentation_title">New In for her</h2>
						<Link to="#" className="presentation_btn">Shop now</Link>
					</div>
				</div>
				<div className="presentation_image">
					<img src={Present2} alt="#" />
					<div className="image_content">
						<h2 className="presentation_title">Woman's bag</h2>
						<Link to="#" className="presentation_btn">Shop now</Link>
					</div>
				</div>
			</section>

			<ShopSlide />
			<section class="main_bag">
				<img src={MainBag} alt="Bag" />
				<button class="main_btn">Shop the look</button>
			</section>

			<section className="recent">
				<div className="recent_left">
					<h2 className="recent_title">RECENT STORIES</h2>
					<div className="recent_icons">
						<div className="left_icon"></div>
						<div className="dots"></div>
						<div className="dots"></div>
						<div className="dots"></div>
						<div className="dots"></div>
						<div className="dots"></div>
						<div className="dots"></div>
						<div className="right_icon"></div>
					</div>
				</div>
				<div className="recent_right flex">
					<div className="image_container">
						<img src={recentImage1} alt="#" />
						<p className="recent_txt">TEXT 1</p>
						<Link to="#" className="read_more">Read More</Link>
					</div>
					<div className="image_container">
						<img src={recentImage2} alt="#" />
						<p className="recent_txt">TEXT 2</p>
						<Link to="#" className="read_more">Read More</Link>
					</div>
					<div className="image_container">
						<img src={recentImage3} alt="#" />
						<p className="recent_txt">TEXT 2</p>
						<Link to="#" className="read_more">Read More</Link>
					</div>
					<div className="image_container">
						<img src={recentImage4} alt="#" />
						<p className="recent_txt">TEXT 2</p>
						<Link to="#" className="read_more">Read More</Link>
					</div>

				</div>
			</section>
			<FooterMail />

		</>
	);
}

export default Home;
