import {enableMapSet, immerable} from "immer"
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

enableMapSet()

interface Task {
  task:string
}
export class TaskList {
  [immerable] = true;
  tasks: Task;
  selectedTask: number;

  constructor(taskArray: Task, selectedTask: number) {
    this.tasks = taskArray
    this.selectedTask = selectedTask;
  }

  getSelectedTask() {
    return this.selectedTask 
  }

  getTasks() {
    return this.tasks
  }
}

const initialState = new TaskList(
  {
    byId:{
      0:{ task: 'Followup on the email with Tedrick'},
      1:{ task: 'Send a message to Jennifer'},
      2:{ task: 'Testing'},
    },
    allIds:[0,1,2]
  },
  -1
)


export const taskListSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: TaskList, action: PayloadAction<string>) => {
      const task = {}
      // state.tasks.push(task)
    },
    selectTask: (state: TaskList, action: PayloadAction<number>) => {
      state.selectedTask = action.payload
    }
  },
});

export const {addTask, selectTask} = taskListSlice.actions;
export const getTaskList = (state: RootState) => state.tasks.getTasks();
export const getSelectedTask = (state: RootState) => state.tasks.getSelectedTask();
export default taskListSlice.reducer;
