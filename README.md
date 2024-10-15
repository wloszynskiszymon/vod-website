### About this project

It's a simple front-end website originally build in React + JavaScript, but now it's set up using Next.js + TypeScript. I tried to make it simple and straight forward in order to learn the best React practices and patterns. After one year of coding in React I updated this project in 2024 and massively improved page performance and code.

### Current technologies:

- Next.js
- TypeScript
- React Query
- Tailwind

## Could be added in the future:

- Tests using testing library for React
- Improve loading and error handling
- Further simplify code
- Improve page loading (especially for mobile - caused mostly by the external carousel)

## To start

Link
https://vod-website-szymon.netlify.app/

### OR

1. Download repository.

2. Navigate to root project folder:

3. Create .env file in root directory.

4. Generate API key and Access Token. More info: https://developer.themoviedb.org/reference/intro/getting-started

5. Copy the text below and paste to the .env file. Make sure to add valid api key and access token.

```
NEXT_PUBLIC_TMDB_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_TMDB_ACCESS_TOKEN="YOUR_ACCESS_TOKEN"
```

6. Make sure you are in root folder in the console and type:

```bash
npm install
```

3. After installing all packages, run using command:

```bash
npm start
```
