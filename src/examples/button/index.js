var Button=require("../../components/Button");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div>
                <h2>按钮类</h2>
                <h3>支持所有input=button属性</h3>
                <Button className="btn-confirm" text="确定"/>
                <Button className="btn-cancel" text="取消"/>
                <Button className="btn-disabled" text="不可点"/>
                <Button className="btn-block" text="块状"/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));