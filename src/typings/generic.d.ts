import { FC, ReactNode } from "react";

type RFCC<T = {}> = FC<{ children: ReactNode | ReactNode[] } & T>;

export { RFCC };
