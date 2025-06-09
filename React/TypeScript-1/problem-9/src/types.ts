
export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export interface Task {
  id: number;
  description: string;
  priority: Priority;
  completed: boolean;
}
