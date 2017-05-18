import {normalizedComments as defaultComments} from '../fixtures'
import {} from '../constants'

export default (comments = defaultComments, action) => {
    const {type, payload} = action
    switch (type) {
    }

    return comments
}
