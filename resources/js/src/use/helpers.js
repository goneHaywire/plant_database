import store from '../store/store'

export default {
    handleError: (err, message) => {
        console.log('HANDLING ERROR!')
        if (err.response) {
            store.dispatch('createAlert', { message: `Response error: ${message} (${err.response.data.error})`, type: 'danger' })
            console.log(`Response error: ${message} (${err.response.data.error})`)
        }
        else if (err.request) {
            store.dispatch('createAlert', { message: `Request error: ${message} (${err.request})`, type: 'danger' })
            console.log(`Request error: ${message} (${err.request})`)
            console.log(err.request)
            console.log(err)
        }
        else {
            store.dispatch('createAlert', { message: `Error: ${message}`, type: 'danger' })
            console.log(`Error: ${message}`)
        }
    },

    handleSuccess: (message, type = 'success') => {
        store.dispatch('createAlert', {
            message,
            type
        })
    }

}
