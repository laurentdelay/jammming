import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameUpdate(e.target.value);
  }

  render() {
    return (
      <div className="Playlist" >
        <input value={this.props.name} onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlist}
          isRemoval={true}
          onRemove={this.props.onRemove}
          currentPreview={this.props.currentPreview}
          onPreviewToggle={this.props.onPreviewToggle} />
        <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;