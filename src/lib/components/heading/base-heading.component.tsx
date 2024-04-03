import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import { ReactNode } from "react";
import styled from "styled-components";

const { Title } = Typography;

const StyledBaseHeading = styled(Title)`
    margin: 0 !important;
`;

export interface BaseHeadingProps extends TitleProps {}

export const BaseHeading = (props: BaseHeadingProps): ReactNode => {
    const { children } = props;

    return <StyledBaseHeading {...props}>{children}</StyledBaseHeading>
}