export function searchByValue(key: string, value: string) {
  return function (item: any) {
    return item[key].includes(value);
  };
}
export async function fuzzyQueryByKey(useHookFn, key, e) {
  const { data, resetData } = useHookFn();
  await resetData();
  data.value = data.value.filter((item: any) => searchByValue(key, e)(item));
}
