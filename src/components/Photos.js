import React, { Component } from 'react'
import { StorageContext } from '../context/storage';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import { DialogContent, DialogActions, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

export default class Photos extends Component {

    render() {
        const { photos,selectPhoto,openModal,photoModalOpened,photo } = this.context;

        return (
            <div className="photos">
                {(photos.map((photo)=> <img key={photo.id} alt={photo.title} src={photo.url} onClick={selectPhoto(photo)} className="photo" />))}

                <Dialog onClose={()=> openModal(false) } aria-labelledby="customized-dialog-title" open={photoModalOpened}>
                    <DialogTitle id="customized-dialog-title" onClose={openModal(false)} />
                    <DialogContent >
                        <img alt={photo.title} src={photo.url} className="photo__modal"/>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
            </Dialog>
            </div>
        )
    }
}

Photos.contextType = StorageContext;
