export default {
    //设置cookie
    setCookie: (name, value, exdays) => {
        const time = new Date();
        time.setTime(time.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + time.toUTCString();
        document.cookie = name + "=" + value + "; " + expires;
    },
    //获取cookie
    getCookie: (name) => {
        let arr = null;
        const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    // 删除cookie
    delCookie: function (name) {
        const exp = new Date();
        exp.setTime(exp.getTime() - 1);
        const val = this.getCookie(name);
        if (val != null)
            document.cookie = name + "=" + val + ";expires=" + exp.toGMTString();
    }
}