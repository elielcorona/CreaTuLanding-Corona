export default function CodigoQRUsuario() {
    return (
      <section className="pb-5 text-white text-center">
        <div className="container">
          <img
            src="/assets/images/default-qr.png"
            alt="QR de acceso"
            style={{
              maxWidth: '260px',
              boxShadow: '0 0 20px rgba(102, 252, 241, 0.5)'
            }}
            className="img-fluid border border-info rounded-3"
          />
        </div>
      </section>
    );
  }
  