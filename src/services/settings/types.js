const ACTION_PREFIX = '[Settings]';
export const settingsType = {
  INIT: `${ACTION_PREFIX} Init`,
  INIT_SUCCESS: `${ACTION_PREFIX} Init success`,

  SET_REPEAT_USER: `${ACTION_PREFIX} Set repeat user`,
  SET_REPEAT_USER_SUCCESS: `${ACTION_PREFIX} Set repeat user success`,
  SET_REPEAT_USER_FAILURE: `${ACTION_PREFIX} Set repeat user failure`,

  UPDATE_LANGUAGE: `${ACTION_PREFIX} Update language`,
  UPDATE_LANGUAGE_SUCCESS: `${ACTION_PREFIX} Update language success`,
  UPDATE_LANGUAGE_FAILURE: `${ACTION_PREFIX} Update language failure`,
};
