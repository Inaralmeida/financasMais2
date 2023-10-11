import styled from "styled-components";

const Button = ({ texto, variant, width, onClick }) => {
  return (
    <>
      {variant == 'primary' && <PrimaryButton onClick={onClick} width={width}>{texto}</PrimaryButton>}
      {variant == 'secondary' && <SecondaryButton onClick={onClick} width={width}>{texto}</SecondaryButton>}
    </>
  );
};

export default Button;

const StyleButton = styled.button`
  width:auto;
  border-radius: 8px;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 48px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: background .3s;

  &:hover{
    background-color: ${(props) => props.theme.blue500};
  }
`;


const PrimaryButton = styled(StyleButton)`
  width: ${props => props.width ? props.width : 'fit-content'};
   background: ${(props) => props.theme.blue700};
   border: none; 
   color: ${(props) => props.theme.white50};
   :hover{
    background-color: ${(props) => props.theme.blue500};
  }
`
const SecondaryButton = styled(StyleButton)`
   background: transparent;
   border: 1px solid ${(props) => props.theme.blue700}; 
   color: ${(props) => props.theme.blue700};
`
