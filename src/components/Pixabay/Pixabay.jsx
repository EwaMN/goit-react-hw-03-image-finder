import axios from 'axios';

const API_KEY = '31090356-a4baf08cf7070484ab89516fc';

export const fetchImages = async (query, page, perPage) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`
  );
  return response.data;
};
