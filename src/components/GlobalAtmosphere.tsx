const GlobalAtmosphere = () => {
  return (
    <div className="hud-global-overlay" aria-hidden="true">
      <div className="absolute inset-0 hud-smoke-layer opacity-85" />
      <div className="absolute inset-0 hud-grid-overlay opacity-35" />
    </div>
  );
};

export default GlobalAtmosphere;
