import styled from "styled-components";

const BasicButton = styled.button`
  background-color: purple;
  color: yellow;
  padding: 5px 10px 5px 10px;
  margin: 5px;
`;
const UnderLineButton = styled(BasicButton)`
  text-decoration: underline;
`;
const ItalicButton = styled(BasicButton)`
  font-style: italic;
`;
const WhiteUnderlineButton = styled(UnderLineButton)`
  color: white;
`;

export { BasicButton, ItalicButton, UnderLineButton, WhiteUnderlineButton };
