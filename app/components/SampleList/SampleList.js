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
    this.state = { currState: true, query: '' };
    this.updateState = this.updateState.bind(this)
    this.search = this.search.bind(this)
    this.resetSearch = this.resetSearch.bind(this)

    
    
  }

  updateState(){
    console.log("update state");
    this.setState(previousState => (
      { currState: !previousState.currState }
    ));
  }

 search(){
  let searchTag = document.getElementById("tagSearch").value;
  var tagArray = searchTag.split(",");
  var i;
  for (i = 0; i < tagArray.length; i++)
    tagArray[i] = tagArray[i].trim();

  this.setState({
    query: tagArray
  });
 }

  resetSearch(){
  let searchTag = '';
  document.getElementById("tagSearch").value = '';
  var tagArray = searchTag.split(",");

  this.setState({
    query: tagArray
  });
 }

  render() {
    return (
      <div className={styles.container} data-tid="container">
      <button onClick = {this.updateState}>CLICK</button><br/> 
      <span className={styles.searchSpan}>
        <input type="text" id="tagSearch" className={styles.searchBox}/> <button className={styles.searchButton} onClick={this.search}>Search Tags</button> <button className={styles.searchReset} onClick={this.resetSearch}>Clear Search</button>
      </span>
        <table className={styles.head}>
          <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Tags</th>
          </tr>
        </table>
        <div className={styles.innerTable}>
          <table className={styles.songsTable}>
            {
              this.props.samples.map(s=> <SampleListItem name={s.name} path={s.path} tags={s.tags} duration={s.duration} search={this.state.query}/>)
            }
          </table>
        </div>
      </div>
    );
  }

 
}
