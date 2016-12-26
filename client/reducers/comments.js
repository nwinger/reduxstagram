// a reducer takes in two things:

// 1. The action (info about what happened)
// 2. copy of the current state

function postComments(state = [], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			// return the new state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			// we need to return without the deleted comment
			return [
				// from the start to the one we want to delete
				...state.slice(0, action.i),
				// after the deleted one, to the end
				...state.slice(action.i + 1)
			];
		default:
			return state;
	};
}

function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// take the current state
			...state,
			// owerwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		};
	}
	return state;
}

export default comments;