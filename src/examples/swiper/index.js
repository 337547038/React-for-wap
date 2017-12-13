require("../../libs/swiper-3.4.2.min");

var Button = require("../../components/Button");
var Swiper = require("../../components/Swiper");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div>
                <Swiper
                    swiperSet={{autoplay: 5000,pagination: '.swiper-pagination'}}
                    data={[{src:'1.jpg',href:"#"},{src:'2.jpg'},{src:'3.jpg'}]}/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));