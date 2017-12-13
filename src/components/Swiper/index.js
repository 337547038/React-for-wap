var classnames = require("classnames");
/**
 * 参数
 * swiperSet　插件的所有参数
 * data　数据（为空时返回this.props.children,可用于实现类似于iscroll滚屏）
 * */
var Swiper0 = React.createClass({
    getInitialState: function () {
        return {}
    },
    getDefaultProps: function () {
        return {
            swiperSet: {
                grabCursor: true,
                pagination: '.swiper-pagination',
                autoplay: 5000,
                loop: true
            }
        }
    },
    componentDidMount: function () {
        console.log(this.props.swiperSet);
        var th = this;
        var swiper = new Swiper('.swiper-container', th.props.swiperSet);
    },
    render: function () {
        return (
            <div className={classnames("swiper-container",this.props.className)}>
                <div className="swiper-wrapper">
                    {this.props.data ?
                        this.props.data.map(function (d) {
                            return (<div className="swiper-slide">
                                <a href={d.href}> <img src={d.src} alt=""/></a>
                            </div>)
                        })
                        : this.props.children
                    }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-scrollbar"></div>
            </div>
        )
    }
});
module.exports = Swiper0;