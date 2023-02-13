import "./Text.css";

const Text = ({ title, subtitle,  paragraph }) => {
  return (
    <div className="text">
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
      <p>{paragraph}</p>
    </div>
  );
};

export default Text;
