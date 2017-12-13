var Switch = require("../../components/Switch");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div>
                <Switch/>
                <Switch showText={true}/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));