// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Player from './Player/Player'
import SampleList from './SampleList/SampleList'
import storage from 'electron-json-storage';

const testsamples = [
    {name: "sample1", path: "a file path to sample1", tags: ["dark", "ambient"], duration: 1234},
    {name: "sample2", path: "a file path to sample2", tags: ["bright", "punchy"], duration: 2345},
  ]

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   //this.importFiles();
  //   this.saveFiles();
  // }

  // saveFiles = () => {
  //   const dataPath = "C:\\Users\\tommy\\Desktop\\Projects\\MuseTek\\musetek-frontend\\package.json"
  //   console.log(dataPath)

  //   storage.set('allSamples', dataPath, (error) => {
  //     if (error) throw error
  //   });
  //   storage.getAll((error, data) => {
  //     if (error) throw error
  //     console.log(data);
  //   });
  // }

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
