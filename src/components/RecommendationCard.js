import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;
  const [modalState, setModalState] = useState(false);
  const [newMsg, setNewMsg] = useState(message);
  if (newMsg.length > 25) {
    setNewMsg(newMsg.slice(0, 22) + "...");
  }

  const handleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className="col-12 col-md-4">
      <a href onClick={handleModal}>
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{newMsg}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
        </div>
      </a>
      <div>
        {/* <Button
          href="/"
          onClick={() => {
            handleModal();
          }}
        >
          on click
        </Button> */}

        <Modal show={modalState}>
          <Modal.Header closeButton>{message}</Modal.Header>
          <Modal.Body>{name}</Modal.Body>
          <Modal.Body>
            <h4>{designation}</h4>
            <h4>{company}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                handleModal();
              }}
            >
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default RecommendationCard;
