import { ReactNode } from "react";
import { BaseHeading, BaseHeadingProps } from "./base-heading.component";

export interface Heading3Props extends BaseHeadingProps {}

export const Heading3 = (props: Heading3Props): ReactNode => {
    return <BaseHeading {...props} level={3} />
}