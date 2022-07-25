import { ButtonComponent } from './styles'

export interface ButtonProps {
  text?: string;
  fullWidth?: boolean;
}

function Button({ text, fullWidth }: ButtonProps) {

  const scroll = () => {
    window.scrollTo(0, 2300);
  }

  return (
    <>
      <ButtonComponent fullWidth={fullWidth} onClick={scroll}>
        {text}
      </ButtonComponent>
    </>
  );
}

export default Button;
