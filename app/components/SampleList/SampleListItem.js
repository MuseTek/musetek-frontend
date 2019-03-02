// @flow
import React, { Component } from 'react';
import styles from "./SampleListItem.css";
import PropTypes from "prop-types";

type Props = {};


export default class SampleListItem extends Component<Props> {
  props: Props

  render() {
    return (
    	<tr className={styles.row}>
	        <td className={styles.td1}>
	         {this.props.name}
	        </td>
	        <td className={styles.td2}>
	          {this.props.path}
	        </td>
	        <td className={styles.td3}>
	          {this.props.duration}
	        </td>
	        <td className={styles.td4}>
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
