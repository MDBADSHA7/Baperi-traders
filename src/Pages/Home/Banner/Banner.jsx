import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../../Component/Images/01.jpg"
import image2 from "../../../Component/Images/02.jpg"
import image3 from "../../../Component/Images/03.png"
const Banner = () =>{
    return(
        <Carousel>
        <div>
            <img src={image1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
        <img src={image2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src={image3} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    )
};
export default Banner;