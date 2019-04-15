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

  constructor(){
    super();
    this.state = { currState: true };
    this.updateState = this.updateState.bind(this)
    
  

    
    
  }

  updateState(){
    console.log("update state");
    this.setState(previousState => (
      { currState: !previousState.currState }
    ));
  }

 search(){
  searchTag = document.getElementById("tagSearch").value;
 }

  render() {
    var searchTag = "dark";
    return (
      <div className={styles.container} data-tid="container">
      <input type="text" id="tagSearch" /> <button onClick={this.search}>Search Tags</button><br/> 
      <button onClick = {this.updateState}>CLICK</button>
        <table className={styles.head}>
          <tr>
            <th>Name{searchTag}</th>
            <th>Duration</th>
            <th>Tags</th>
          </tr>
        </table>
        <div className={styles.innerTable}>
          <table className={styles.songsTable}>
            {
              this.props.samples.map(s=> <SampleListItem name={s.name} path={s.path} tags={s.tags} duration={s.duration} search={searchTag}/>)
            }
          </table>
        </div>
      </div>
    );
  }

 
}
