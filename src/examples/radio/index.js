var Radio = require("../../components/Radio");
var RadioGroup = Radio.RadioGroup;
var Single = React.createClass({
    _getValue: function () {
        console.log(this.refs.radio.getValue());
    },
    _onChange: function (e) {
        console.log(e.target.checked);
    },
    render: function () {
        return (
            <div>
                <h2>单个应用</h2>
                <p><Radio text="选项1"/></p>
                <p><Radio checked="checked" text="checked状态"/></p>
                <p><Radio disabled="disabled" text="disabled状态"/></p>
                <p><Radio checked="checked" disabled="disabled" text="checked disabled状态"/></p>
                <p><Radio onChange={this._onChange} text="onChange测试"/></p>
                <p><Radio ref="radio" text="取值测试"/></p>
                <p onClick={this._getValue}>取值</p>
            </div>
        )
    }
});
var Radiolist = React.createClass({
    render: function () {
        return (
            <div>
                <h2>单个在列表中应用</h2>
                <p><Radio name="radio1" text="选项1"/></p>
                <p><Radio name="radio1" text="选项2"/></p>
                <p><Radio name="radio1" text="选项3"/></p>
                <p><Radio name="radio1" text="选项4"/></p>
                <p><Radio name="radio1" text="选项5"/></p>
                <p>设置同样的name,给每个添加onChange事件，点击时可取对应的值</p>
            </div>
        )
    }
});
var Group = React.createClass({
    _onClick: function () {
        console.log(this.refs.getValue.getValue());
    },
    _onChange: function (e) {
        console.log(e.target.value);
    },
    render: function () {
        return (
            <div>
                <h2>组应用</h2>
                <p><RadioGroup name="te" options={[
                {text:"选项1",value:"1"},
                {text:"选项2",value:"2"},
                {text:"选项3",value:"3",disabled:true}
                ]}/></p>
                <p>
                    <RadioGroup ref="getValue" name="sex" onChange={this._onChange} value="男" options={[
                {text:"男"},
                {text:"女"}
                ]}/>
                </p>
                <p onClick={this._onClick}>取值</p>
            </div>
        )
    }
});
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div>
                <Single/>
                <hr/>
                <Radiolist/>
                <hr/>
                <Group/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));