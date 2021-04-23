function ButtonGroup(
  buttonGroupSelectedOption: any,
  onClickArg: Function,
  options: any[],
  idPrefix: string
) {
  const buttonIsActive = (option: any) => {
    if (buttonGroupSelectedOption === option) {
      return "font-semibold bg-gray-700 text-gray-100";
    } else {
      return "bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300";
    }
  };

  const convertOptionText = (option: any) => {
    if (option === null) {
      return "Select All";
    } else if (option === true) {
      return "True";
    } else if (option === false) {
      return "False";
    } else {
      return option;
    }
  };

  const leftButton = () => {
    const buttonText = options[0];

    return (
      <button
        className={`${buttonIsActive(
          buttonText
        )} border border-gray-600 flex-auto rounded-l duration-200 ease-in-out transition focus:outline-none hover:ring-2 hover:ring-gray-700`}
        id={`${idPrefix}${buttonText}Button`}
        onClick={() => onClickArg(buttonText)}
        key={buttonText}
      >
        {convertOptionText(buttonText)}
      </button>
    );
  };

  const middleButtons = () => {
    return options.slice(1, options.length - 1).map((buttonText, index) => {
      return (
        <button
          className={`${buttonIsActive(
            buttonText
          )} border border-gray-600 flex-auto duration-200 ease-in-out transition focus:outline-none hover:ring-2 hover:ring-gray-700`}
          id={`${idPrefix}${buttonText}Button`}
          onClick={() => onClickArg(buttonText)}
          key={buttonText}
        >
          {convertOptionText(buttonText)}
        </button>
      );
    });
  };

  const rightButton = () => {
    const buttonText = options[options.length - 1];
    return (
      <button
        className={`${buttonIsActive(
          buttonText
        )} border border-gray-600 flex-auto rounded-r duration-200 ease-in-out transition focus:outline-none hover:ring-2 hover:ring-gray-600`}
        id={`${idPrefix}${buttonText}Button`}
        onClick={() => onClickArg(buttonText)}
        key={buttonText}
      >
        {convertOptionText(buttonText)}
      </button>
    );
  };

  return (
    <div className="flex flex-row">
      {leftButton()}
      {middleButtons()}
      {rightButton()}
    </div>
  );
}

export default ButtonGroup;