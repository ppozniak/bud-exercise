import axios from "axios";

/**
 * Mainly used for useSWR hook
 * @param {string} url
 */
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
