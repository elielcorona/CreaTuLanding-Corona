export default function BienvenidaUsuario() {
    const userName = sessionStorage.getItem('userName') || 'Usuario';
    const suscription = sessionStorage.getItem('userSuscription') || 'Multigym Mensual';
  
    return (
      <section className="py-5 text-white text-center" style={{ marginTop: '5rem' }}>
        <div className="container">
          <h1 className="mb-2">¡Hola, <span>{userName}</span>!</h1>
          <p className="lead">Estás disfrutando del plan <strong className="text-info">{suscription}</strong></p>
          <div className="bg-dark border border-info p-4 rounded-4 shadow mb-4">
            <h2 className="fw-bold mb-3"><i className="me-2 text-info"></i>¡Comienza tu entrenamiento!</h2>
            <p>Escanea tu código QR en la entrada de cualquier gimnasio afiliado.</p>
            <a href="/ubicaciones" className="btn btn-outline-info mt-3">Ver gimnasios cercanos</a>
          </div>
        </div>
      </section>
    );
  }
  