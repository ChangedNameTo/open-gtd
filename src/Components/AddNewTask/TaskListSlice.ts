import {immerable} from "immer"
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export class Task {
  title: string;
  created: number;

  constructor(title: string) {
    this.created = Date.now();
    this.title = title;
  }

  public getTitle() {
    return this.title
  }
}

export class TaskList {
  [immerable] = true;
  tasks: Array<Task>

  constructor(taskArray: Array<Task>) {
    this.tasks = taskArray
  }
}

const initialState = new TaskList(
  [
    new Task('Followup on the email with Tedrick'),
    new Task('Reply to Jennifer'),
    new Task('This is a really long sentence to ensure that text wrapping and box sizing works properly'),
  ]
)


export const taskListSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: TaskList, action: PayloadAction<string>) => {
      const task = new Task(action.payload)
      state.tasks.push(task);
    },
  },
});

export const {addTask} = taskListSlice.actions;
export const getTaskList = (state: RootState) => state.tasks;
export default taskListSlice.reducer;
