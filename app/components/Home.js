// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Player from './Player/Player'
import SampleList from './SampleList/SampleList'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.player}>
          <Player/>
        </div>

        <div className={styles.sampleList}>
          <SampleList/>
        </div>
      </div>
    );
  }
}
