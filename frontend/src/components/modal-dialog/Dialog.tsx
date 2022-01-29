import React, { FC, ReactElement } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useStylesSignIn } from '../../pages/SignIn';

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  open?: boolean;
  onClose: () => void
}

export const ModalDialog: FC<ModalProps> = ({
  title,
  children,
  open = false,
  onClose,
}: ModalProps): ReactElement | null => {
  if (!open) {
    return null;
  } 
  
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <IconButton
          onClick={onClose}
          color="secondary"
          aria-label="close"
        >
          <CloseIcon style={{fontSize: 26}} color="primary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
