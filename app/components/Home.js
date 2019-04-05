// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import Player from './Player/Player'
import SampleList from './SampleList/SampleList'
import storage from 'electron-json-storage';

const testsamples = [
    {name: "rain (local to roddur)", path: "C:\\Users\\roddu\\Documents\\Audacity\\Samples\\rain.mp3", tags: ["dark", "ambient"], duration: 1234},
    {name: "birds chirping (local to roddur)", path: "C:\\Users\\roddu\\Documents\\Audacity\\Samples\\birds chirping.mp3", tags: ["bright", "punchy"], duration: 2345},
  ]



export default class Home extends Component {
  constructor(props) {
    super(props);
    //FAILED ATTEMPT at loading sample from menu.js using IPC
  /*  const {ipcMain} = require("electron").remote
    ipcMain.on('load-sample', (event, arg)=>{
        console.log("caught: " + arg)
      }) */
  };




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
