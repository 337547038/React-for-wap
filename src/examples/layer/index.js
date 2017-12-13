var Loading = require("../../components/Loading");
var Layer = require("../../components/Layer");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
        //Alert.alert({title:'title',content:'content'});
        //Alert.confirm({title:'title',content:'content'})
        //this.refs.layer.layerOpen();
    },
    render: function () {
        return (
            <div className="a">
                <p>00000000000000</p>
                <Layer autoClose="30" ref="layer" confirm="ok" title="t">0000</Layer>
                <Loading/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));