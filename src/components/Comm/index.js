var comm = (function () {
    return {
        //获取Url中的参数值
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return r[2];
            }
            else {
                return "";
            }
        },
        hasClass(elements, cName){
            return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
        },
        addClass: function (elements, cName) {
            if (!this.hasClass(elements, cName)) {
                if (elements.className) {
                    elements.className += " " + cName;
                } else {
                    elements.className += cName;
                }
            }
        },
        removeClass: function (elements, cName) {
            if (this.hasClass(elements, cName)) {
                elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), "");
            }
        },
        height: function (elements) {
            //处理两个特殊的高 window document
            if (elements == window) {
                return document.documentElement.clientHeight || document.body.clientHeight
            } else if (elements == document) {
                return document.documentElement.scrollHeight || document.body.scrollHeight
            } else if (typeof elements == "object") {
                return elements.offsetHeight;
            } else if (typeof elements == "string") {
                return document.getElementById(elements).offsetHeight;
            }
        },
        width: function (elements) {
            //处理两个特殊 window document
            if (elements == window) {
                return document.documentElement.clientWidth || document.body.clientWidth
            } else if (elements == document) {
                return document.documentElement.scrollWidth || document.body.scrollWidth
            } else if (typeof elements == "object") {
                return elements.offsetWidth;
            } else if (typeof elements == "string") {
                return document.getElementById(elements).offsetWidth;
            }
        },
        //滚动条位置
        scrollTop: function () {
            return document.documentElement.scrollTop || document.body.scrollTop;
        },
        //滚动到指定位置
        scrollTo:function (x,y) {
            window.scrollTo(x,y);
        }
    }
})();
module.exports=comm;