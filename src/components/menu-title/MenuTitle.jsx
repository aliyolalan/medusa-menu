import "./MenuTitle.css";
export default function MenuTitle({ children }) {
  return (
    <div className="menu">
      <h2 className="menu-title">{children}</h2>
    </div>
  );
}
