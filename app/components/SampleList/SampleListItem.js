// @flow
import React, { Component } from 'react';
import styles from "./SampleListItem.css";
import PropTypes from "prop-types";

type Props = {};


export default class SampleListItem extends Component<Props> {
  props: Props

  render() {
    return (
    	<tr>
        <td>
         {this.props.name}
        </td>
        <td>
          {this.props.path}
        </td>
        <td>
          {this.props.duration}
        </td>
        <td>
          <table>
          	<tr>
          		{this.props.tags.map(item => {
          			return <td>|{item}|</td>;
        		})}
          	</tr>
          </table>
        </td>
        </tr>
    );
  }


}


 SampleListItem.PropTypes = {
 name: PropTypes.string.isRequired,
 path: PropTypes.string.isRequired,
 tags: PropTypes.array.isRequired,
 duration: PropTypes.number.isRequired
 }
