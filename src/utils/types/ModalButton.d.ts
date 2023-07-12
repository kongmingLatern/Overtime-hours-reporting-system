interface RuleState {
  type?: "text" | "number" | string;
  label?: string;
  rules?: Record<string, any>[];
  options?: Record<string, any>;
}

type InputType =
  | "number"
  | "text"
  | "date"
  | "readonly"
  | "select"
  | "password";
