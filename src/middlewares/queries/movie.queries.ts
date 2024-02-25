import { UseQueryResult, useQuery } from "react-query";
import * as models from "../../types";
import { MovieListService } from "../apis";
import { toast } from "react-toastify";

interface IMovieService {
  movieListOption?: {
    params: models.GetMovieListParams;
    enabled?: boolean;
  };
}

export const MOVIE_QUERY_KEY = {
  filmList: "filmList"
};

export const useMovieService = (opts: IMovieService) => {
  const filmList: UseQueryResult<models.GetMovieListResult> = useQuery(
    [MOVIE_QUERY_KEY.filmList, opts?.movieListOption?.params],
    () =>
      MovieListService.getFilms()
        .then((res) => res.data)
        .catch((error) => {
          toast.error("error while fetch movie list");

          return error;
        }),
    {
      enabled: opts?.movieListOption?.enabled || false,
    }
  );

  return {
    filmList,
  };
};
