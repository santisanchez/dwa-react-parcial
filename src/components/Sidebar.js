import React, { useContext } from 'react'
import '../styles/styles.css';
import { Button } from '@material-ui/core';
import {StorageContext} from '../context/storage'

const styles = {
    height:'fit-content',
    background: '#313131',
    color: 'white',
    marginTop: '30px'
}

export default function Sidebar() {
    const {showAlbums} = useContext(StorageContext)
    return (
        <aside className="sidebar">
            <Button onClick={showAlbums} style={styles}>Ver Albums</Button>
        </aside>
    )
}
