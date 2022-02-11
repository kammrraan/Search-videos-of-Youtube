import axios from 'axios';
const KEY = 'AIzaSyBHPIlyP4LazX6h5Kl5yRJ6_OJdI1w5_wc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
