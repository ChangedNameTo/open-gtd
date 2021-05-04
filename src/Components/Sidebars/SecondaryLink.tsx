// @ts-ignore: Unreachable code error
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SecondaryLink(team: {
  name: string;
  href: string;
  bgColorClass: string;
}) {
  return (
    <a
      key={team.name}
      href={team.href}
      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
    >
      <span
        className={classNames(
          team.bgColorClass,
          "w-2.5 h-2.5 mr-4 rounded-full"
        )}
        aria-hidden="true"
      />
      <span className="truncate">{team.name}</span>
    </a>
  );
}

export default SecondaryLink;
