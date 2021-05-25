import axios from 'axios';

const key = '20792904-7b714194335b4ba783f2ee189';

const galleryApi = ({ query = '', page = 1 }) => {
    return axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
        .then((response) => response.data.hits);
};

export default { galleryApi };