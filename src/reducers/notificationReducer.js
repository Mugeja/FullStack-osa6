const notificationReducer = (state = '', action) => {

    switch (action.type) {
        case 'MESSAGE':
            return action.data.message
        default:
            return state
    }
}

export const notificationMessage = (message) => {
    return {
        type: 'MESSAGE',
        data: {
            message
        }
    }
}

export default notificationReducer