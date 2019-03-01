// @flow
import React, { Component } from 'react';
import styles from "./SampleListItem.css";
import PropTypes from "prop-types";

type Props = {};


export default class SampleListItem extends Component<Props> {
  props: Props

  render() {
    return (
        <div className="sample">
         <span>{this.props.name} stored in {this.props.path}</span>
        </div>
    );
  }


}


 SampleListItem.PropTypes = {
 name: PropTypes.string.isRequired,
 path: PropTypes.string.isRequired,
 tags: PropTypes.array.isRequired,
 duration: PropTypes.number.isRequired
 }
