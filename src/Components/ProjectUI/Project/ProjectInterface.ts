export default interface Project {
  project: string;

  pinned: boolean;

  // Timestamps
  readonly created: number;
  modified: number;
  completed: number;
  archived: number | null;
}
