import axios from 'axios';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzlhNjJlYTE5ZmQzZmUwYjhhZGE5NTM4Nzc1ZTZmOSIsInN1YiI6IjY1NzBjOWUwYTc2YWM1MDEzOTA5NzllNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xkJugkWffi98YAAJOAs6dLpuODWV6jhron_0UeVaJg';
const fetchTrendMovies = async url => {
  try {
    const fetchInfo = await axios.get(url, {
      accept: 'application/json',
    });
    const { data } = fetchInfo;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchTrendMovies };
