import axios from 'axios'

const ROOT_URL = 'http://localhost:8000/api'

function getTags(sample, callback) {
    headers = {
        `Content-Disposition attachment; filename=${sample}`
    }
    
    axios.put(ROOT_URL + '/get-tags', sample, headers)
        .then(() => {
            callback();
        }
    )
    .catch(
        () => {
            console.log("There was error getting tags for sample...")
        }
    )
    .then(() => {})
}