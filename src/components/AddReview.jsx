import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    border
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

  
  function AddReview() {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
   
    const {
    
      addReview
     
    } = useContext(ApplicationContext);
  
    const onRatingChangeHandler = (e) => {
      setRating(e.target.value);
      
    };
  
    const onCommentHandler = (e) => {
      setComment(e.target.value);
      
    };
  
  
    return (
      <>
        <button onClick={onOpen}>
          <button style={{background: "red", color: "white"}} onClick={onOpen}>Add Review</button>
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Your Review</ModalHeader>
            <ModalCloseButton />
  
            <ModalBody>
              <select
                
                value={rating}
                style={{
                  border: "1px solid black",
                  height: "40px",
                  width: "392px",
                  alignContent: "top"
                }}
                onChange={(e) => onRatingChangeHandler(e)}>
                    <option value="Select Rating">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
              <input
                type="text"
                value={comment}
                style={{
                  border: "1px solid black",
                  height: "40px",
                  width: "392px",
                  alignContent: "top",
                  marginTop: "4px"
                }}
                placeholder="Your Comment"
                onChange={(e) => onCommentHandler(e)}
              />
            
              <button
                style={{
                  background: "white",
                  padding: "8px",
                  color: "black",
                  margin: "4px",
                  height: "48px",
                  borderRadius: "8px"
                }}
                onClick={() => {
                  addReview(rating, comment);
                }}
              >
                {" "}
                Submit{" "}
              </button>
            </ModalBody>
  
            <ModalFooter></ModalFooter>
          </ModalContent>
          {/* </ModalOverlay> */}
        </Modal>
      </>
    );
  }
  export { AddReview };
  