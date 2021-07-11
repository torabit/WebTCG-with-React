import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const NoBasicDialog = (props) => {
    return (
        <Dialog
            open={props.noBasic}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">種ポケモンがいません</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    対戦相手に手札を公開し、マリガンをしてください。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.mulligan} color="secondary">
                    はい
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NoBasicDialog;