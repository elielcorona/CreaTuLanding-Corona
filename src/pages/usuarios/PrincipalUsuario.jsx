import BannerCarrusel from '../../components/BannerCarrusel';
import BienvenidaUsuario from '../../components/BienvenidaUsuario';
import CodigoQRUsuario from '../../components/CodigoQRUsuario';
import BeneficioPro from '../../components/BeneficioPro';
import ModalActualizarFoto from '../../components/ModalActualizarFoto';

export default function PrincipalUsuario() {
  return (
    <>
      <BannerCarrusel />
      <BienvenidaUsuario />
      <CodigoQRUsuario />
      <BeneficioPro />
      <ModalActualizarFoto />
    </>
  );
}
