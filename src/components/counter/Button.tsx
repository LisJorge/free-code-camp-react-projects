import '../../styles/counter/Button.css';

function Button({text, isClickButton, clickAction }){
  return (
    <button 
      className={isClickButton? 'click-button': 'reset-button'}
      onClick={clickAction}
    >
      {text}
    </button>
  )
}

export default Button
