var Input =require('../../components/Input');
var Ajax = require('../../components/Ajax');
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
        Ajax.ajax({
            method: 'get',
            url: 'http://localhost:8080/package.json',
            data: '',
            async: true,
            cache: true,
            success: function (res) {
                console.log('ff');
            }})
    },
    render: function () {
        return (
            <div>
                <Input placeholder="请输入姓名"/>
                <br/><br/>
                <Input placeholder="请输入密码" type="password"/>
                <br/><br/>
                <Input placeholder="请选择日期" type="date"/>
                <br/><br/>
                <Input value="默认有值"/>
                <br/><br/>
                <Input disabled="disabled" value="不能输入"/>
                <br/><br/>
                <Input disabled="disabled" placeholder="不能输入"/>
                <br/><br/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));