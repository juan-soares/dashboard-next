import { ComponentType, SVGProps } from "react";

export interface ILink {
  id: string;
  title: string;
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
