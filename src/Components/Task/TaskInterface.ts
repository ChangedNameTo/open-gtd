export default interface Task {
  task: string;
  readonly created: number;
  modified: number;
  completed: number;
}
