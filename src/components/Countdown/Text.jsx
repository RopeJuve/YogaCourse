import "./Text.css";

const Text = ({ title, subtitle, paragraf }) => {
  return (
    <div className="text">
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
      <p>{paragraf}</p>
    </div>
  );
};

export default Text;
