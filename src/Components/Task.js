function Task(props) {
  return (
    <div>
      <button class="w-full text-left hover:bg-gray-100 focus:bg-gray-200 rounded px-1 subpixel-antialiased font-mono">
        {props.task}
      </button>
    </div>
  );
}

export default Task;
