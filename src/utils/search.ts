export function searchByValue(key: string, value: string) {
  return function (item: any) {
    return item[key].includes(value);
  };
}
