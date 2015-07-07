import * as constants from '../constants/actionTypes'

const initialState = []

const actionsMap = {
  [constants.FETCH_CANDIDATES_SUCCESS]: (state, action) => (action.data)
  //[constants.FETCH_CANDIDATES_FAIL]: (state, action) => ({ repo: action.repo })
}

export default function candidatesActions (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  const result = reduceFn(state, action);
  console.log('NEW STATE',result.length);
  return result;
}
