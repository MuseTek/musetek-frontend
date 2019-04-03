// @flow
import React, { Component } from 'react';
import styles from "./SampleListItem.css";
import PropTypes from "prop-types";

type Props = {};


export default class SampleListItem extends Component<Props> {
  props: Props

//send the selected sample to the waveform using ipcrenderer
  loadSample = () => {
    let currentSample = this.props.path
    console.log("loading in sample at " + currentSample)
    const {ipcRenderer} = require('electron')
    ipcRenderer.send('update-sample', currentSample)
  }

  render() {

    return (
    	<tr onClick={this.loadSample} className={styles.row}>

	        <td className={styles.td1}>
	         {this.props.name}
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

 SampleListItem.propTypes = {
 name: PropTypes.string.isRequired,
 path: PropTypes.string.isRequired,
 tags: PropTypes.array,
 duration: PropTypes.number.isRequired
 }
