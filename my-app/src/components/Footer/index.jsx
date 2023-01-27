import Logo from '../../assets/logoFooter.svg';

function Footer() {
  return (
    <footer>
      <img className="footer__logo" src={Logo} alt="Logo de Kasa" />
      <p className="footer__copyright">© 2020 Kasa. Tout droits réservés</p>
    </footer>
  );
}

export default Footer;
