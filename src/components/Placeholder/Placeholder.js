import './Placeholder.css';

function Placeholder({ text, img }) {
  return (
    <div className="placeholder">
      <img src={img} alt="icon" />
      <span className="placeholderText">{text}</span>
    </div>
  );
}

export default Placeholder;
