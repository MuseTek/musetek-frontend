// Lists current samples
// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './SampleList.css';
import SampleListItem from './SampleListItem.js';

type Props = {};

export default class SampleList extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <p>Samples go here!</p>
        <table>
          <tr>
            <th>Song name</th>
            <th>Path</th>
            <th>Duration</th>
            <th>Tags</th>
          </tr>
          {
            this.props.samples.map(s=> <SampleListItem name={s.name} path={s.path} tags={s.tags} duration={s.duration} />)
          }
        </table>
      </div>
    );
  }
}
