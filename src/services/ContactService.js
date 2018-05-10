import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export default class ContactService {

    saveContact(contact) {
        return axios.post('/contacts', contact)
    }

    getContacts() {
        return axios.get('/contacts')
    }

    deleteContact(id) {
        return axios.delete(`/contacts/${id}`)
    }

}

export const contact = new ContactService()