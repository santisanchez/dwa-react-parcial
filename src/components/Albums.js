import React, { Component } from 'react'
import { StorageContext } from '../context/storage';

import Grid from '@material-ui/core/Grid';

import '../styles/styles.css';

const styles = {
    border: '5px solid #6be0da',
    width: 'fit-content'
}

export default class Albums extends Component {

    render() {
        const { albums,selectAlbum,albumId } = this.context;
        return (
            <Grid container direction="column" alignItems="center">
                {albums.map((album)=> <Grid item style={albumId === album.id ? styles : {}}>
                        <img alt={album.title} src={album.url} className="album" onClick={selectAlbum(album.id)}/>
                    </Grid>
                )}
            </Grid>
        )
    }
}

Albums.contextType = StorageContext;