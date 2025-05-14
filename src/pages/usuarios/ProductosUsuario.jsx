import ProductoCard from '../../components/ProductoCard';

const productosMock = [
  { id: 1, nombre: 'Proteína Whey', descripcion: 'Sabor chocolate' },
  { id: 2, nombre: 'Guantes Gym', descripcion: 'Talla única' }
];

export default function ProductosUsuario() {
  return (
    <div className="container mt-5 pt-5 text-white">
      <h2 className="mb-4">Catálogo de Productos</h2>
      <div className="row g-4">
        {productosMock.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <ProductoCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}
