import React from "react";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import {Container, Typography} from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const FormDialog: React.FC<Props> = ({ children, title }) => (
  <Dialog open={true}>
    <Paper sx={{ padding: '10px' }}>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>{ title }</Typography>
      <Container component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        { children }
      </Container>
    </Paper>
  </Dialog>
)
