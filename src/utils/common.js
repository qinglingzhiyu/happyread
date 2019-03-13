/* 封装一些方法 */

/**
 * 动态添加样式
 * @param {Object} obj css对象
 * @return stylesStr
 */
export function styles(obj) {
    let stylesStr = '';
    for (let styleName in obj) {
        if (obj.hasOwnProperty(styleName)) stylesStr += `${styleName.replace(/([A-Z])/g, "-$1").toLowerCase()}:${px2rpx(obj[styleName])};`;
    }
    return stylesStr;
}

/**
 * 返回单位
 * @param {String} str 
 * @return str 
 */
export function px2rpx(str) {
    if (/rpx/.test(str)) return str
    else if (/px/.test(str)) {
      let val = str.substring(0, str.indexOf('px'))
      return `${(val - 0) * 2}rpx`
    } else return str
}