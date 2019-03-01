// Handles displaying sample waveform and playing
// @flow
import WaveSurfer from 'wavesurfer.js'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import routes from '../../constants/routes';
import styles from './Player.css';


type Props = {};

export default class Player extends Component<Props> {
  props: Props;
  wavesurfer;

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      barWidth: 2,
      height: 80
    });
    this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
  }

  loadWaveForm = () => {
    console.log("loading in waveform")
    this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <p>Player goes here!</p>
        {/* <a onClick={this.loadWaveForm}>Load Waveform</a> */}
        {/* <img src='' */}
        <div className={styles.waveform} id='waveform'></div>
      </div>
    );
  }
}
