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

  // One of the three possible statuses that a task can have
  status: TaskStatus;

  // Timestamps
  readonly created: number;
  modified: number;
  completed: number;
}
