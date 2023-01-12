/**
 * Mainly used for useSWR hook
 * @param {string} url
 */

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
