import '../../styles/calculator/Button.css';

function Button(props){

  const isOperator = (value) => {
    const conditions = isNaN(value) && value!== '.' && value!=='=';
    return conditions;
  }

  return (
    <div 
      className={`calculator-button ${isOperator(props.children)? 'operator': null}`.trimEnd()}
      onClick={() => props.clickAction(props.children)} 
      >{props.children}
    </div>);
}

export default Button;