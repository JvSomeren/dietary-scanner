const ACTION_PREFIX = '[Preferences]';
export const preferencesType = {
  INIT: `${ACTION_PREFIX} Init`,
  INIT_SUCCESS: `${ACTION_PREFIX} Init success`,

  ADD_DIETARY_PREFERENCE: `${ACTION_PREFIX} Add dietary preferences`,
  ADD_DIETARY_PREFERENCE_SUCCESS: `${ACTION_PREFIX} Add dietary preferences success`,
  ADD_DIETARY_PREFERENCE_FAILURE: `${ACTION_PREFIX} Add dietary preferences failure`,

  REMOVE_DIETARY_PREFERENCE: `${ACTION_PREFIX} Remove dietary preferences`,
  REMOVE_DIETARY_PREFERENCE_SUCCESS: `${ACTION_PREFIX} Remove dietary preferences success`,
  REMOVE_DIETARY_PREFERENCE_FAILURE: `${ACTION_PREFIX} Remove dietary preferences failure`,
};
