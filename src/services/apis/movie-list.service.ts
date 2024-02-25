import { HttpService } from "../HttpServices";
import * as models from "../../types";

export class MovieListService extends HttpService {
  static getFilms() {
    return this.get("/films")
  }
  static getDetail(data: models.GetDetailParams) {
    return this.get(`/${data.type}/${data.id}`)
  }
}
