/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Children } from "react";
import { Tooltip } from "reactstrap";

export default class ToolTipPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <span href="#" id="TooltipExample">
          {this.props.children}
        </span>

        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}
        >
          {this.props.message}
        </Tooltip>
      </div>
    );
  }
}
