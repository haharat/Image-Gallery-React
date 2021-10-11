import React from "react";
import {  
    Button,
    Divider,
} from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Popup = (props) => {

    return (
        <div>
            <Dialog
                fullWidth={true}
                //maxWidth="lg"
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Full image"}</DialogTitle>
                <DialogContent>
                    <img src={props.imageSelected} height={400} width="100%" alt=""/>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={props.handleClose}>{props.buttonName}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Popup;