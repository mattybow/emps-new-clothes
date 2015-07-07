import { FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_FAIL } from '../constants/actionTypes'; 

export function fetchFromRemote(url){
	return {
		types:['REQUEST', FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_FAIL],
		promise: (apiClient) => apiClient.get(url)
	}
}
