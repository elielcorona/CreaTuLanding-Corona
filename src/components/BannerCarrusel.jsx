import banner1 from '../assets/images/banners/QrossPass_banner_1.jpg';
import banner2 from '../assets/images/banners/QrossPass_banner_2.jpg';
import banner3 from '../assets/images/banners/QrossPass_banner_3.jpg';

export default function BannerCarrusel() {
  return (
    <div id="carouselPro" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" id="carousel-inner-pro">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Banner" />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Banner" />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="Banner" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselPro" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselPro" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
