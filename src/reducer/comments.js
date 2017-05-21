import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

const commentMap = defaultComments.reduce((acc, comment) => ({
    ...acc, [comment.id]: comment
}), {})

export default (comments = commentMap, action) => {
    const {type, payload} = action
    switch (type) {
    	case ADD_COMMENT:
    		const {id, commentData} = payload
    		return {...comments, [id]: commentData}
    		break
    }

    return comments
}
