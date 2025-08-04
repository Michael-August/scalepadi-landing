export const GlowWrapper = ({ children, className = "" }) => (
  <div
    className={`relative z-10 before:absolute before:inset-0 before:rounded-xl before:blur before:bg-indigo-400/20 ${className}`}
  >
    {children}
  </div>
);
