import { UseQueryResult, useQuery } from "react-query";
import * as models from "../../types";
import { MovieListService } from "../apis";
import { toast } from "react-toastify";

interface IDetailService {
  detailOption?: {
    params: models.GetDetailParams;
    enabled?: boolean;
  };
}

export const DETAIL_QUERY_KEY = {
  characterDetail: "characterDetail",
  planetDetail: "planetDetail",
  starshipDetail: "starshipDetail",
};

export const useDetailService = (opts: IDetailService) => {
  const detail: UseQueryResult<models.GetDetailCharacterResponse> = useQuery(
    [DETAIL_QUERY_KEY.characterDetail, opts?.detailOption?.params],
    () =>
      MovieListService.getDetail(
        opts?.detailOption?.params
          ? opts?.detailOption?.params
          : { id: 1, type: "people" }
      )
        .then((res) => res.data)
        .catch((error) => {
          toast.error("error while fetch detail");

          return error;
        }),
    {
      enabled: opts?.detailOption?.enabled || false,
    }
  );

  return {
    detail,
  };
};
