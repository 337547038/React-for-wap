var classnames = require('classnames');
var Nav = React.createClass({
    render: function () {
        var props = this.props.data;
        return (
            <div className="ucs-nav">
                <ul>
                    {props && props.map(function (child, index) {
                        return <li><a href={child.href}
                                      className={classnames({'active':index==this.props.active})}>{child.name}</a></li>
                    }.bind(this))}
                </ul>
            </div>
        )
    }
});
module.exports = Nav;