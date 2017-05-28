import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {OrderedMap, Record} from 'immutable'

const CommentModel = Record({
    id: null,
    text: '',
    user: ''
})

const DefaultReducerState = Record({
    entities: new OrderedMap({}),
    quantity: 0,
    loading: false,
    loaded: false
})

export default (comments = new DefaultReducerState(), action) => {
    const {type, payload, randomId, response} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return comments.setIn(['entities', payload.offset], response.records)
                           .set('quantity', response.total)
                           .set('loading', false)
                           .set('loaded', true)
    }

    return comments
}
