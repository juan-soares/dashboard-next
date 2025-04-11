import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { ILink } from "./NavLinks.interface";

export const links: ILink[] = [
  {
    id: "1",
    title: "Home",
    slug: "/dashboard",
    icon: HomeIcon,
  },

  {
    id: "2",
    title: "Invoices",
    slug: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },

  {
    id: "3",
    title: "Customers",
    slug: "/dashboard/customers",
    icon: UserGroupIcon,
  },
];
