import { FC } from "react";
import Icon from "..";
import { SBoxIcon, SBoxIconValue } from "./css";
import IBoxIcon from "./IBoxIcon";

const BoxIcon: FC<IBoxIcon> = (props) => {
    return (
        <SBoxIcon
            Size={props.IconSize}
            Rounded={props.Rounded}
            Background={props.Background}
            Shadow={props.BoxShadow}
            Width={props.BoxWidth}
            Height={props.BoxHeight}
        >
            <Icon
                IconSize={props.IconSize}
                Alt={props.Alt}
                IconType={props.IconType}
                Bordered={props.Bordered}
            />
            {props.Value && <SBoxIconValue>{props.Value}</SBoxIconValue>}
        </SBoxIcon>
    );
};

export default BoxIcon;
