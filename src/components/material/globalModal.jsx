import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
};
const GlobalModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const object = props.objectFromParent;

  if(props.pinasangData) {
    alert('fdasf')
  }

  return (
    <div>
      <Modal
        open={props.bukasOpen}
        onClose={props.saradoClose}
        aria-labelledby={props.headerFromParent}
        aria-describedby="modal-modal-description"
        sampledatafromparent={props.sampledatafromparent}
        delete={props.del}

      >
        <Box sx={style}>
          {props.pinasangData &&  (
            <h1>pang malakasang coding</h1>
          )}

          {props.pinasangData ? 'hoy' : 'gising'}

          <br/>
          {props.tae}
          {props.newState ? props.addbtn : props.delbtn}

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.headerFromParent}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.notesFromParent}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.what}
          </Typography>
          <Typography id="modal-modal-title" variant="h1" component="h2">
            {props.msg}
          </Typography>

          {object?.map((value, index) => (
            <Typography variant="h6" color="initial" key={index}>
              {value.name} -{value.lastName} - {value.location}
            </Typography>
          ))}
          
            <Box>
              {props.me}
            </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.messageFromParent}
            <br />
            {props.sampledatafromparent}
          </Typography>
          {props.newState && props.addThis}
          {!props.newState && props.delThis}
        </Box>
      </Modal>
    </div>
  );
};

export default GlobalModal;
