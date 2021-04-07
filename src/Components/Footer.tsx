/**
 * Returns the footer component
 * @return {FunctionComponent}
 */
function footer() {
  const socialLink = (text: String) => {
    return <div className="text-white px-1">{text}</div>;
  };

  return (
    <div className="w-full bg-black divide-x flex flex-row justify-center">
      {socialLink('Find me on Github')}
      {socialLink('Find me on LinkedIn')}
    </div>
  );
}

export default footer;
