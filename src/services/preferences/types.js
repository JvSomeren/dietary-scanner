const ACTION_PREFIX = '[Preferences]';
export const preferencesType = {
  INIT: `${ACTION_PREFIX} Init`,
  INIT_SUCCESS: `${ACTION_PREFIX} Init success`,

  ADD_DIETARY_PREFERENCE: `${ACTION_PREFIX} Add dietary preference`,
  ADD_DIETARY_PREFERENCE_SUCCESS: `${ACTION_PREFIX} Add dietary preference success`,
  ADD_DIETARY_PREFERENCE_FAILURE: `${ACTION_PREFIX} Add dietary preference failure`,

  REMOVE_DIETARY_PREFERENCE: `${ACTION_PREFIX} Remove dietary preference`,
  REMOVE_DIETARY_PREFERENCE_SUCCESS: `${ACTION_PREFIX} Remove dietary preference success`,
  REMOVE_DIETARY_PREFERENCE_FAILURE: `${ACTION_PREFIX} Remove dietary preference failure`,

  STORE_DIETARY_PREFERENCES: `${ACTION_PREFIX} Store dietary preferences`,
  STORE_DIETARY_PREFERENCES_SUCCESS: `${ACTION_PREFIX} Store dietary preferences success`,
  STORE_DIETARY_PREFERENCES_FAILURE: `${ACTION_PREFIX} Store dietary preferences failure`,
};
