import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <Container className='mt-5 py-5 px-2'>
        <Row >
          <Col xs={12} md={3}>
            <h3>CareerHub</h3>
            <p className='text-secondary'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            <img src="group.jpg" alt="" />
          </Col>
          <Col xs={12} md={2}>
            <h6>Company</h6>
            <ul className='text-secondary '>
              <li>About</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Career</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h6>Product</h6>
            <ul className='text-secondary'>
              <li>Product Type</li>
              <li>Plans &amp; Pricing</li>
              <li>Customer</li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <h6>Support</h6>
            <ul className='text-secondary'>
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developer</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6>Contact</h6>
            <p className='text-secondary'>123 Main Street<br />Anytown, USA 12345<br />(123) 456-7890<br />info@website.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
