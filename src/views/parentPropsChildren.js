import styled from "@emotion/styled";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const PropsChildren = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
    props.handleClose(openModal);
  };

  const objectFromParentPerson = props.personMe;
  const objectFromParent = props.newestObject;
  const greetFromparent = props.newName;
  const productFromChild = props.ing;

  const MyOwnModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Box>
      <Typography variant="h3" color="initial">
        this is props come from parent - {props.newName}
      </Typography>
      {objectFromParentPerson?.map((person, index) => (
        <Typography variant="h2" sx={{ color: "blue" }} key={index}>
          this object comes from parent component array - {person.name}{" "}
          {person.lastName} -{person.location}
        </Typography>
      ))}

      {props.mgaStudyante.map((val, index) => (
        <h1 key={index}>{val.name} - {index + 1} -{val.location}</h1>
      ))}

      {props.mgaDatingJowa.map((val, index) => (
        <div>
          {val.name} - {val.age}
        </div>
      ))}

      <MyOwnModal
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            height: "30vh",
            width: "25vw",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography>
            {props.message} - i am {greetFromparent}
            {props.anodaw} - from parent
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Passing Bolean value from child to parent to close
          </Button>
        </Box>
      </MyOwnModal>

      <Box>
        {props.newestObject?.map((o, i) => (
          <Typography variant="h4" color="initial" key={i}>
            {o.product1}-{o.product2} -{o.product3}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography variant="h2" color={"violet"}>
          this comes from parent component object
        </Typography>
        <Typography variant="h3" color="initial">
          {props.ing.ingredients1} -{props.ing.ingredients2} -
          {props.ing.ingredients3}
        </Typography>
      </Box>
    </Box>
  );
};

export default PropsChildren;
