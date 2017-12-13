var Nav = require("../../components/nav");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div>
                <h2>导航</h2>
                <Nav data={[{name:"index",href:'#'},{name:"product",href:'#'}]} active="1"/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));