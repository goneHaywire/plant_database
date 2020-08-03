import speciesService from '../services/SpeciesService'

const favouriteMixin = {
    methods: {
        favourite(id) {
            speciesService.favourite(id)
                .then(resp => console.log(resp))
                .catch(err => console.log(err))
        }
    }
}

export default favouriteMixin
