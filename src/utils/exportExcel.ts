import * as xlsx from "xlsx";

/**
 * @description: 获取map的长度
 * @param {Object} obj map对象
 * @return: map的长度
 */
function getLength(obj: any) {
  let count = 0;
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      count += 1;
    }
  }

  return count;
}

/**
 * @description:
 * @param {Object} json 服务端发过来的数据
 * @param {String} name 导出Excel文件名字
 * @return:
 */
export function exportExcel(json: any, name: string) {
  /* convert state to workbook */
  const data: any[] = [];
  const keyArray: any[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key1 in json) {
    if (Object.prototype.hasOwnProperty.call(json, key1)) {
      const element = json[key1];
      const rowDataArray: any[] = [];
      for (const key2 in element) {
        if (Object.prototype.hasOwnProperty.call(element, key2)) {
          const element2 = element[key2];
          rowDataArray.push(element2);
          if (keyArray.length < getLength(element)) {
            keyArray.push(key2);
          }
        }
      }
      data.push(rowDataArray);
    }
  }
  data.splice(0, 0, keyArray);
  const ws = xlsx.utils.aoa_to_sheet(data);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "SheetJS");
  /* generate file and send to client */
  xlsx.writeFile(wb, `${name}.xlsx`);
}
