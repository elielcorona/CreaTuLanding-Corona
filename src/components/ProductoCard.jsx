import { useCarrito } from "../context/CarritoContext";

function ProductoCard({ producto }) {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div className="card text-white bg-dark border-info p-3">
      <h5>{producto.nombre}</h5>
      <p>{producto.descripcion}</p>
      <button className="btn btn-info" onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductoCard;
