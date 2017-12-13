var Dialog = require("../../components/Dialog");
var Loading = require("../../components/Loading");
var Root = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
        //alert时仅支持title和content
        //Dialog.alert({title:'title',content:'content'});
        //confirm支持layer所有参数，详情见layer
        Dialog.confirm({title:'title',content:'content',confirm:'ok',confirmBack:function (layer) {
            console.log('back');
            layer.parentNode.removeChild(layer);//有回调时要在这里移除
        },cancel:'cancel'});
        //this.refs.layer.layerOpen();
    },
    render: function () {
        return (
            <div>
                <Loading/>
            </div>
        )
    }
});


ReactDOM.render(
    <Root/>
    , document.getElementById('main'));