import { ReactNode } from "react";
import { BaseHeading, BaseHeadingProps } from "./base-heading.component";

export interface Heading4Props extends BaseHeadingProps {}

export const Heading4 = (props: Heading4Props): ReactNode => {
    return <BaseHeading {...props} level={4} />
}