// Fixed animated background: floating gradient orbs + subtle grid.
// Works in both light and dark mode (opacity tuned per scheme).
const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="bg-grid" />
    </div>
  );
};

export default Background;
