import store from '../store/store'

export default {
    handleError: (err, message) => {
        console.log('HANDLING ERROR!')
        if (Object.keys(err).length) {
            console.log(`Error: ${message} (${err.response})`)
            store.dispatch('createAlert', {
                message: `Error: ${message} (${err.response})`,
                type: 'danger'
            })
        } else {
            console.log('Error: ', message)
            store.dispatch('createAlert', {
                message: `Error: ${message}`,
                type: 'danger'
            })
        }
    },

    handleSuccess: (message, type = 'success') => {
        store.dispatch('createAlert', {
            message,
            type
        })
    }

}
