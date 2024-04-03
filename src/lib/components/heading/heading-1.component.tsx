import { ReactNode } from "react";
import { BaseHeading, BaseHeadingProps } from "./base-heading.component";

export interface Heading1Props extends BaseHeadingProps {}

export const Heading1 = (props: Heading1Props): ReactNode => {
    return <BaseHeading {...props} level={1} />
}