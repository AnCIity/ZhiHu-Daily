/**
 * 到时间戳
 *
 * @export
 * @param {Date} [time=Date.now()] 时间
 * @param {boolean} [isTens=false] 是否十位
 * @returns
 */
export function getUnix(time = Date.now(), isTens = false) {
    if (typeof time === String) time = new Date(time);
    if (typeof time === Date) time = time.getTime();
    return isTens ? parseInt(time / 1000) : time;
}

/**
 * 格式化时间
 *
 * @export
 * @param {String} fmt 格式
 * @param {Date} [date=new Date()] 时间
 * @returns
 */
export function dateFormat(fmt, date = new Date()) {
    if (typeof date !== Date) new Date(date);

    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        }
    }
    return fmt;
}
