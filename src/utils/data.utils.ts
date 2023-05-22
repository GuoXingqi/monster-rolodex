
//write an util function in order to type it- using generic T 
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
}
