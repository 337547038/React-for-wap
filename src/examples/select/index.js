var Select = require("../../components/Select");

var Root = React.createClass({
    getInitialState: function () {
        return {value: 5}
    },
    componentDidMount: function () {
    },
    getValue: function () {
        console.log(this.refs.select.getValue());
    },
    setValue: function () {
        this.setState({value: 4});
        //this.refs.select.setValue(4);
    },
    render: function () {
        return (
            <div>
                <Select disabled="disabled" options={[{text:'请选择'}]}/>
                <Select ref="select" value={this.state.value} options={[
                {text:'选项1',value:'1',disabled:true},
                {text:'选项2',value:''},
                {text:'选项3'},
                {text:'选项4',value:4},
                {text:'选项5',value:5}
                ]}/>
                <div onClick={this.getValue}>取值</div>
                <div onClick={this.setValue}>设值</div>
            </div>
        )
    }
});

ReactDOM.render(
    <Root/>
    , document.getElementById('main'));