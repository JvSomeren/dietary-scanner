import { EXAMPLE_DO } from "./types";

export const exampleDo = index => (
  {
    type: EXAMPLE_DO,
    payload: index
  }
);
