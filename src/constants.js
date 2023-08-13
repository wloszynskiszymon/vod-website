import { API_KEY } from './hooks/useMedia';

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export const MAIN_LINKS = [
  {
    id: 'best-movies',
    link: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&language=pl&with_backdrop=true&page=${getRandomNumber()}`,
    title: 'Odkryj interesujące filmy!',
    media_type: 'movie',
  },
  {
    id: 'now-playing-movies',
    link: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&language=pl&with_backdrop=true`,
    title: 'Teraz grane w kinach!',
    media_type: 'movie',
  },
  {
    id: 'popular-movies',
    link: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&language=pl&with_backdrop=true&page=${getRandomNumber()}`,
    title: 'Najpopularniejsze filmy!',
    media_type: 'movie',
  },
  {
    id: 'top-rated-movies',
    link: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&region=PL&with_images=true&language=pl&with_backdrop=true&page=${getRandomNumber()}`,
    title: 'Najlepiej oceniane filmy!',
    media_type: 'movie',
  },
  {
    id: 'best-tv',
    link: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&language=pl&with_backdrop=true&vote_count.gte=10&page=${getRandomNumber()}
    `,
    title: 'Odkryj nowe seriale!',
    media_type: 'tv',
  },
  {
    id: 'on_the_air-tv',
    link: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&language=pl&with_backdrop=true&vote_count.gte=10&page=${getRandomNumber()}
    `,
    title: 'Nadchodzące seriale',
    media_type: 'tv',
  },
  {
    id: 'popular-tv',
    link: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&language=pl&with_backdrop=true&vote_count.gte=10${getRandomNumber()}
    `,
    title: 'Najpopularniejsze seriale!',
    media_type: 'tv',
  },
  {
    id: 'top-rated-tv',
    link: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&sort_by=vote_average.desc&region=PL&with_images=true&language=pl&with_backdrop=true&vote_count.gte=10${getRandomNumber()}
    `,
    title: 'Najlepiej oceniane seriale!',
    media_type: 'tv',
  },
];
