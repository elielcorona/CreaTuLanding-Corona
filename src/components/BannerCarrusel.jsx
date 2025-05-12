export default function BannerCarrusel() {
    return (
      <div id="carouselPro" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel-inner-pro">
          {/* Aquí puedes cargar los banners dinámicamente con useEffect más adelante */}
          <div className="carousel-item active">
            <img src="/assets/images/banners/QrossPass_banner_1.jpg" className="d-block w-100" alt="Banner" />
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
  