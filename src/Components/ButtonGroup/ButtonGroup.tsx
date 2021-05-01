function ButtonGroup(
  buttonGroupSelectedOption: any,
  onClickArg: Function,
  options: any[],
  idPrefix: string
) {
  const buttonIsActive = (option: any) => {
    if (buttonGroupSelectedOption === option) {
      return "font-semibold bg-indigo-700 text-white hover:text-indigo-700 hover:bg-indigo-300";
    } else {
      return "font-medium bg-gray-100 text-gray-700 hover:text-gray-700 hover:bg-gray-300";
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
        )} -ml-px w-full items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
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
          )} -ml-px w-full items-center px-4 py-2 border border-gray-300 bg-white text-sm focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
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
        )} -ml-px w-full items-center px-4 py-2 rounded-r-md border border-gray-300 text-sm focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
        id={`${idPrefix}${buttonText}Button`}
        onClick={() => onClickArg(buttonText)}
        key={buttonText}
      >
        {convertOptionText(buttonText)}
      </button>
    );
  };

  return (
    <div className="relative z-0 flex flex-row shadow-sm rounded-md">
      {leftButton()}
      {middleButtons()}
      {rightButton()}
    </div>
  );
}

export default ButtonGroup;
