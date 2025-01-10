import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { RoutePath } from "../../types";

interface IMenuItemClickEvent {
  key: string;
}

const items = [
  {
    label: <Link to={RoutePath.TableShulte}>Таблица Шульте</Link>,
    key: RoutePath.TableShulte,
  },
  {
    label: <Link to={RoutePath.GraphTask}>Задача на графы</Link>,
    key: RoutePath.GraphTask,
  },
];

export const Header = () => {
  const location = useLocation();
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" items={items} />
  );
};
