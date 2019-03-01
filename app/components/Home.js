// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Player from './Player/Player'
import SampleList from './SampleList/SampleList'

type Props = {};

const testsamples = [
    {name: "sample1", path: "a file path to sample1", tags: ["dark", "ambient"], duration: 1234},
    {name: "sample2", path: "a file path to sample2", tags: ["bright", "punchy"], duration: 2345},
  ]



export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.player}>
          <Player/>
        </div>

        <div className={styles.sampleList}>
          <SampleList samples={testsamples}/>

        </div>
      </div>
    );
  }
}
