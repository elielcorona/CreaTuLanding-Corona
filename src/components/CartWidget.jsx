import React from 'react';
// O usar un ícono si ya tienes una librería como Lucide o FontAwesome
// import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center text-white ms-3">
      {/* <ShoppingCart size={20} /> */}
      🛒
      <span className="ms-1">0</span>
    </div>
  );
};

export default CartWidget;
