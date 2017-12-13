var Textarea = require("../../components/Textarea");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {

    },
    _onChange: function (e) {
        console.log(e.target.value);
    },
    render: function () {
        return (
            <div>
                <Textarea disabled="disabled">禁用</Textarea>
                <Textarea onChange={this._onChange} placeholder="请输入"/>
            </div>
        )
    }
});

ReactDOM.render(
    <Root/>
    , document.getElementById('main'));