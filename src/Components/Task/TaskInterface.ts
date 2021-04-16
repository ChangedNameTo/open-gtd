export enum TaskStatus {
  Active,
  Complete,
  Dropped,
}

export default interface Task {
  // The actual task text
  task: string;

  // Anything placed into the note text box
  note: string;

  status: TaskStatus;

  // Timestamps
  readonly created: number;
  modified: number;
  completed: number;
}
