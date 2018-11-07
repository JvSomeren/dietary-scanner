import { preferencesType } from "./types";

export class PreferencesAction {
  static init = () => {
    return {
      type: preferencesType.INIT
    }
  };
}
