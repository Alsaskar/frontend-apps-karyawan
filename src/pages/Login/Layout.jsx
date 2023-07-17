import { useState } from 'react';
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import './style.scss';
import { Formik } from 'formik';

const Layout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const _handleLogin = (data) => {
    alert(`${data.username}, ${data.password}`);
  };

  return (
    <div className="background">
      <Container>
        <Card className="login-wrapper my-5 shadow border-0">
          <Card.Header className="header text-center">
            <h2>Apps Karyawan</h2>
          </Card.Header>
          <Card.Body className="body">
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={(values) => {
                setTimeout(() => {
                  _handleLogin(values);
                  setLoading(false);
                }, 1000);

                setLoading(true);
              }}
            >
              {({ handleSubmit, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan Username"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Masukkan Password"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="showPassword">
                    <Form.Check
                      type="checkbox"
                      label="Show Password"
                      onChange={(e) => setShowPassword(e.target.checked)}
                    />
                  </Form.Group>
                  <Button
                    className="w-100 mt-2"
                    variant="primary"
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                        />
                        Loading
                      </>
                    ) : (
                      'Login'
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
          <Card.Footer className="footer text-center text-muted">
            <small>Copyright 2023</small>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Layout;
