import axios from "axios";
import { API_CONSTANTS } from "./constants/api-constants";

export const $api = axios.create({
    baseURL: API_CONSTANTS.BASE_URL
})