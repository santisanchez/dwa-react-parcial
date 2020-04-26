import React from 'react'
import { StorageProvider } from '../context/storage'
import Albums from './Albums';
import Photos from './Photos';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';


export default function AlbumsView() {
    return (<>
        <StorageProvider>
            <Grid container>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={3} direction="column" container justify="center" alignItems="center">
                    <Albums />
                </Grid>
                <Grid item xs={6}>
                    <Photos />
                </Grid>
            </Grid>
        </StorageProvider>
        </>
    )
}
