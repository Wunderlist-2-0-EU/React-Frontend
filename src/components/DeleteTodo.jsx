import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/core";
import { SubtleButton2 } from "./CustomButtons";

function DeleteTodo() {
  const [isOpen, setIsOpen] = React.useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      {/* <Button variantColor="red" onClick={() => setIsOpen(true)}>
        Delete
      </Button> */}

      <SubtleButton2 onClick={() => setIsOpen(true)}>Delete</SubtleButton2>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Todo
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button variantColor="red" onClick={onClose} ml={3}>
              Delete
            </Button> */}
            <SubtleButton2 onClick={onClose} ml={3}>
              Delete
            </SubtleButton2>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default DeleteTodo;
