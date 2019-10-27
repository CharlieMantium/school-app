import {
	ADD_ACTIVITY,
	REMOVE_ACTIVITY,
	EDIT_ACTIVITY,
	SET_ACTIVITIES,
} from './actionTypes';

const activitiesReducerDefaultState = {
	activities: {
		items: [],
	},
};

export default (state = activitiesReducerDefaultState, action) => {
	switch (action.type) {
		case ADD_ACTIVITY:
			return {
				activities: {
					items: [...state.activities.items, action.activity],
				},
			};
		case REMOVE_ACTIVITY:
			return {
				activities: {
					items: state.activities.items.filter(
						activity => activity.id !== action.id,
					),
				},
			};
		case EDIT_ACTIVITY:
			return {
				activities: {
					items: state.activities.items.map(activity => {
						if (activity.id === action.id) {
							return {
								...activity,
								...action.updates,
							};
						}
						return activity;
					}),
				},
			};
		case SET_ACTIVITIES:
			return {
				activities: {
					items: action.activities,
				},
			};
		default:
			return state;
	}
};
