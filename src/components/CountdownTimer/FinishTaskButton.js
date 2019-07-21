import styled from "styled-components"
import COLORS from "../../constants/theme"

export default styled.button.attrs({
  children: "完成此代辦"
})`
  border-radius: 23px;
  background: transparent;
  border: solid 1px white;
  font-size: 14px;
  padding: 9px 19px;
  color: ${props => props.isBreaking ? "white" : COLORS.ACCENT_COLOR};
  transition: border-color .3s ease, color .3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: ${COLORS.ACCENT_COLOR};
    color: ${COLORS.ACCENT_COLOR};
  }
`
