/**
 * defaultProps为默认属性，extraProps为定制化的属性
 * promisify 微信内置函数
 * @param fn
 * @returns { promise }
 */
const promisify = fn => defaultProps => extraProps => new Promise((resolve, reject) => fn({
    ...defaultProps,
    ...extraProps,
    success: res => resolve(res),
    fail: err => reject(err)
}));

 // 登录
const loginPromisify =  promisify(wx.login)();

/**
 * 数据请求
 * @param {*} params 
 */
const requestPromisify = promisify(wx.request)({
    header: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    complete: () => wx.hideLoading()
});

/**
 * 用法:
 * jumpToPromisify('a'); // navigateTo到a页面
 * jumpToPromisify('a', 'navigate', { m: 'm' }); // navigateTo到a页面 ,路径参数为?m=m
 * jumpToPromisify('a', 'redirect', { m: 'm' }); // redirectTo到a页面 ,路径参数为?m=m
 * jumpToPromisify(1, 'back', { m: 'm' }); // back 上一步 ,路径参数为?m=m
 *
 * @param page 需要跳转的页面或者页面路径(如果是"pages/a/b/b"这样的路径，page='pages/a/b/b', specialUrl=true )
 * @param type
 * @param params
 * @param specialUrl
 * @return {*}
 *
 */
const jumpToPromisify = (page = 'index', type = 'navigate', params = '', specialUrl = false) => {
    const {
        navigateTo,
        redirectTo,
        navigateBack,
        reLaunch,
        switchTab
    } = wx;
    const types = {
        navigate: url => promisify(navigateTo)({
            url
        })(),
        redirect: url => promisify(redirectTo)({
            url
        })(),
        reLaunch: url => promisify(reLaunch)({
            url
        })(),
        switchTab: url => promisify(switchTab)({
            url
        })(),
        back: delta => promisify(navigateBack)({
            delta
        })(),
    };
    params = obj2Url(params);
    if (specialUrl) return types[type](params ? `${page}?${params}` : page);
    // 获取跳转参数，如果为数字，则为navigateBack，反之为 navigateTo 或 navigateBack。
    const jumpPram = (typeof page === 'number') ? page : `/pages/${page}/main${params ? `?${params}` : ''}`;
    //console.log(`%c**跳转参数**jumpPram** ${jumpPram}`, 'color:white;background:green');
    return types[type](jumpPram);
}

/**
 * 路径参数的拼接
 * @param {*} params 
 */
const obj2Url = params => {
    if (params instanceof Array || typeof params === 'number') throw new Error('跳转参数限制于string和对象');
    // 如果路径参数为 object, 做以下转换
    if (typeof params === 'object') {
        const rawParams = Object.entries(params).reduce((acc, cur) => {
            if ((!cur[1]) && ((typeof cur[1]) !== 'boolean')) console.warn(`${cur[0]}的值为空， 请检查原因！`);
            return `${acc + cur[0]}=${cur[1]}&`;
        }, '');
        params = rawParams.substr(0, rawParams.length - 1);
    }
    return params;
};

export default {
    loginPromisify,
    jumpToPromisify,
    requestPromisify
}