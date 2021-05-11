import styled from "styled-components";
//style
import { Colors } from "StyledHelpers/Colors";
//interface
import IBoxImageStyle from "./IBoxImageStyle";

const BoxImageS = styled.div<IBoxImageStyle>`
    background-color: ${(props) =>
        props.Background ? props.Background : "Transparent"};
    box-shadow: 0 0 3px
        ${(props) => (props.Shadow ? Colors.Shadow : "transparent")};
    border-radius: ${(props) => (props.Rounded ? "100%" : "0")};
    height: ${(props) => props.Height + "px"};
    width: ${(props) => props.Width + "px"};
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: ${(props) => (props.Margin ? props.Margin : "auto")};
    display: flex;
`;

export default BoxImageS;
