import './Input.css'

const Input = ({type, placeholder}) => {
    const border = placeholder === '' ? 'border-none' : ''

  return (
    <div className={`input__wraper  ${border}`}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input