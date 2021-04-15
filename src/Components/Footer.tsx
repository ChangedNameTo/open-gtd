import { IconName } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Returns the footer component
 * @return {FunctionComponent}
 */
function footer() {
  const followLink = (link: string) => {
    window.open(link);
  };

  const socialLink = (text: IconName, link: string) => {
    return (
      <div className="grid justify-items-center px-4">
        <button
          className="text-white rounded border-2 border-white hover:bg-white hover:text-gray-800 px-2 py-1 focus:outline-none"
          onClick={() => followLink(link)}
        >
          <FontAwesomeIcon size="3x" icon={["fab", text]} />
        </button>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-800 divide-x flex flex-row justify-center py-2">
      {socialLink("github-square", "https://github.com/ChangedNameTo/open-gtd")}
      {socialLink("linkedin", "")}
    </div>
  );
}

export default footer;
