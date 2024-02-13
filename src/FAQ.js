import React from "react";
import Navbar from "./Navbar";
import { Container, Typography } from "@mui/material";


export default function FAQ() {
    return (<>
        <Navbar />
        <Container>
            <Typography variant="h5" sx={{ textAlign: 'center', marginTop: 12 }}>Күнде көмек беретін жасанды интеллект</Typography>
            <Typography variant="h5" sx={{ textAlign: 'center', marginTop: 4 }}>developer: obojau</Typography>
        </Container>
    </>)
}