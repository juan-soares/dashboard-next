import { SideNav } from "../_UI/components";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
