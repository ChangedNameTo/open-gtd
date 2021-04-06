function Footer() {
  const socialLink = (text) => {
    return <div class="text-white px-1">{text}</div>;
  };

  return (
    <div class="w-full bg-black divide-x flex flex-row justify-center">
      {socialLink("Find me on Github")}
      {socialLink("Find me on LinkedIn")}
    </div>
  );
}

export default Footer;
