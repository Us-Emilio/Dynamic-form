import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

export default function NavBarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">
            Dynamic <b>Form</b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Hola Mundo{" "}
              <a href="google.es" target="_blank" rel="noreferrer">
                enlace
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Button>Boton normal</Button>
    </div>
  );
}
