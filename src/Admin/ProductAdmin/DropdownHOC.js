import React, { Component } from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";

export default class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.prepareData(props.data) };
  }

  prepareData = (data) => {
    // optional: you can skip cloning if you don't mind mutating original data
    var cloned = data.slice(0);

    // insert special select all node
    cloned.splice(0, 0, {
      label: "Select All",
      value: "selectAll",
      checked: false,
      className: "select-all",
    });

    return cloned;
  };

  toggleAll = (checked) => {
    const { data } = this.state;
    // console.log(data)
    for (var i = 0; i < data.length; i++) {
      data[i].checked = checked;

      // Check if the node has children and update their checked state as well
      if (data[i].children && Array.isArray(data[i].children)) {
        this.toggleChildren(data[i].children, checked);
      }
    }
    this.setState({ data });
    // console.log(data)
  };

  // Helper function to recursively toggle the checked state of children nodes
  toggleChildren = (children, checked) => {
    for (var i = 0; i < children.length; i++) {
      children[i].checked = checked;
      // console.log(children[i].checked)

      // Check if the node has children and update their checked state as well
      if (children[i].children && Array.isArray(children[i].children)) {
        this.toggleChildren(children[i].children, checked);
      }
    }
  };

  untoggleAll = (checked) => {
    const { data } = this.state;
    for (var i = 1; i < data.length; i++) {
      data[i].checked = checked;
    }
    this.setState({ data });
  };

  expandNode = (node) => {
    node.expanded = true;
    if (node.parent) {
      this.expandNode(node.parent);
    }
  };

  toggleParents = (data, value, checked) => {
    // Find the node with the given value
    const node = data.find((item) => item.value === value);

    // If the node is not found or there is no parent, stop the function
    if (!node || !node.parent) return;

    // Update the checked state of the node
    node.checked = true;
    // console.log(data);
    // Check if all siblings of the current node are checked
    console.log("Hiep ngu ngoc");
    const siblingsChecked = node.parent.children.some(
      (child) => child.checked === true
    );
    // Update the parent's checked state
    node.parent.checked = siblingsChecked;
    if (node.checked) {
      this.expandNode(node.parent);
    }

    this.toggleParents(data, node.parent.value, checked);
  };

  updateParentCheckStatus = (data, node, checked) => {
    if (node.parent) {
      // Update parent's checked status
      node.parent.checked = true;

      // Recursively update ancestors
      this.updateParentCheckStatus(data, node.parent, checked);
    }
  };

  handleChange = ({ value, checked }) => {
    this.untoggleAll(false);
    if (value === "selectAll") {
      this.toggleAll(checked);
    } else {
      this.toggleAll(false);
      const { data } = this.state;
      this.toggleParents(data, value, checked);

      const cha = [];
      function findNodesWithValue(node, value, ancestors = []) {
        if (node.value === value) {
          cha.push(ancestors);
        }
        ancestors.push(node);
        if (node.children && Array.isArray(node.children)) {
          node.children.forEach((child) => {
            findNodesWithValue(child, value, [...ancestors]);
          });
        }
      }

      const node = data.find((item) => findNodesWithValue(item, value));
      console.log(cha);

      cha.forEach((parentNodes) => {
        parentNodes.forEach((parentNode) => {
          parentNode.checked = true;
        });
      });

      if (node) {
        console.log(node);
        node.checked = true;
        if (node.parent) {
          this.toggleParents(data, node.parent.value, checked);
          console.log(node.parent);
        }

        this.setState({ data });
      }
      this.props.updateChaArray(cha);
    }
  };

  getSelectedData = (data) => {
    let selectedData = [];
    data.forEach((node) => {
      if (node.checked) {
        selectedData.push(node);
      }
      if (node.children) {
        selectedData = selectedData.concat(this.getSelectedData(node.children));
      }
    });
    return selectedData;
  };

  render() {
    return (
      <div>
        <DropdownTreeSelect
          data={this.state.data}
          onChange={this.handleChange}
          mode="hierarchical"
        />
      </div>
    );
  }
}
