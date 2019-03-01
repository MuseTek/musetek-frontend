// Handles displaying sample waveform and playing
// @flow
import WaveSurfer from 'wavesurfer.js'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import routes from '../../constants/routes';
import styles from './Player.css';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
    this.wavesurfer;
  }

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

  play = () => {
    console.log("in play");
    this.wavesurfer.playPause();
    var play_btn = document.getElementById('play-button');
    if (this.state.playing) {
      play_btn.style.backgroundColor = 'green';
    }
    else {
      play_btn.style.backgroundColor = 'yellow';
    }
    this.setState({
      playing: !this.state.playing
    });
  }

  previous = () => {

  }

  restart = () => {
    console.log('in restart');
    this.wavesurfer.stop();
    if (!this.state.playing)
    {
      this.setState({
        playing: !this.state.playing
      });
      var play_btn = document.getElementById('play-button');
      play_btn.style.backgroundColor = 'yellow';
    }
  }

  next = () => {

  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <p>Player goes here!</p>
        <a onClick={this.loadWaveForm}>Load Waveform</a>
        <div className={styles.waveform} id='waveform'></div>
        <button type="button" onClick={this.previous} id="previous-button">Previous</button>
        <button type="button" onClick={this.restart} id="restart-button">Restart</button>
        <button type="button" onClick={this.play} id="play-button">Play/Pause</button>
        <button type="button" onClick={this.next} id="next-button">Next</button>
      </div>
    );
  }
}
