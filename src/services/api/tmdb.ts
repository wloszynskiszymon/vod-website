import { TMDB } from "tmdb-ts";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN as string;

export const tmdb = new TMDB(ACCESS_TOKEN);
