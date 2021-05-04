import { Link } from "react-router-dom";

// @ts-ignore: Unreachable code error
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavLink(item: {
  name: string;
  href: string;
  current: boolean;
  icon: any;
}) {
  return (
    <Link
      key={item.name}
      href={item.href}
      to={`${item.href}`}
      className={classNames(
        item.current
          ? "bg-gray-200 text-gray-900"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      <item.icon
        className={classNames(
          item.current
            ? "text-gray-500"
            : "text-gray-400 group-hover:text-gray-500",
          "mr-3 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  );
}

export default NavLink;
