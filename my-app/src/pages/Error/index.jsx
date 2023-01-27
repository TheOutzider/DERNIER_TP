import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Oups ! La page que vous avez demandé n'existe pas.
      </h2>
      <Link className="error__link" to="/">
        Retourner à la page d'accueil
      </Link>
    </div>
  );
};

export default Error
