function Host({ host }) {
  return (
    <div className="host">
      <h2 className="host__name">{host.name}</h2>
      <img src={host.picture} alt="Propriétaire" className="host__picture" />
    </div>
  );
}

export default Host;
