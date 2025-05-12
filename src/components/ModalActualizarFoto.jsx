export default function ModalActualizarFoto() {
    return (
      <div className="modal fade" id="modalActualizarFoto" tabIndex="-1" aria-labelledby="modalActualizarFotoLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white border-info">
            <div className="modal-header">
              <h5 className="modal-title">Actualización de Foto</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              Han pasado 3 meses desde tu última actualización de perfil.
              <br /><br />
              <strong>Por favor, acércate a recepción para tomarte una nueva foto y seguir disfrutando de QrossPass.</strong>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" data-bs-dismiss="modal">Entendido</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  