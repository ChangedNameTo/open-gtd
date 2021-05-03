export enum TaskStatus {
  Active = "Active",
  Complete = "Complete",
  Dropped = "Dropped",
}

export enum TaskPriority {
  None = "None",
  Low = "Low ✅",
  Medium = "Medium ⚠️",
  High = "High 🛑",
  Immediate = "Immediate ⛔️",
}

export default interface Task {
  // The actual task text
  task: string;

  // Anything placed into the note text box
  note: string;

  // One of the three possible statuses that a task can have
  status: TaskStatus;

  // One of the five possible priorities, default None
  priority: TaskPriority;

  dueDate: number | null;
  deferDate: number | null;

  // Timestamps
  readonly created: number;
  modified: number;
  completed: number;
  archived: number | null;
}
