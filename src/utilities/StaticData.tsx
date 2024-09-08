import { API_KEY } from '../hooks/useURL';

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export const MAIN_LINKS = [
  {
    id: 'best-movies',
    link: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&with_backdrop=true&page=${getRandomNumber()}`,
    title: 'Discover the best movies!',
    media_type: 'movie',
  },
  {
    id: 'now-playing-movies',
    link: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&with_backdrop=true`,
    title: 'Now playing in theaters!',
    media_type: 'movie',
  },
  {
    id: 'popular-movies',
    link: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&with_backdrop=true&page=${getRandomNumber()}`,
    title: 'The most popular movies!',
    media_type: 'movie',
  },
  {
    id: 'top-rated-movies',
    link: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&with_backdrop=true&page=${getRandomNumber()}`,
    title: 'Top rated movies!',
    media_type: 'movie',
  },
  {
    id: 'best-tv',
    link: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&with_backdrop=true&vote_count.gte=10&page=${getRandomNumber()}
    `,
    title: 'Discover new TV shows!',
    media_type: 'tv',
  },
  {
    id: 'on_the_air-tv',
    link: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&with_backdrop=true&vote_count.gte=10&page=${getRandomNumber()}
    `,
    title: 'Upcoming TV shows!',
    media_type: 'tv',
  },
  {
    id: 'popular-tv',
    link: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&with_backdrop=true&vote_count.gte=10${getRandomNumber()}
    `,
    title: 'The most popular TV shows!',
    media_type: 'tv',
  },
  {
    id: 'top-rated-tv',
    link: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&with_backdrop=true&vote_count.gte=10${getRandomNumber()}
    `,
    title: 'Top rated TV shows!',
    media_type: 'tv',
  },
];
