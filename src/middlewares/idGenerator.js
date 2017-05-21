import {ADD_COMMENT} from '../constants'

function generateRandomId() {
	return Number(Math.random().toFixed(5));
}

export default store => next => action => {
	if (action.type === ADD_COMMENT) {
		action.payload.id = generateRandomId();
	}

	next(action);
}