import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import BgOverlay from '../../components/BgOverlay';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useState } from 'react';
import './style.scss';

const Layout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const _handleLogin = (data) => {
    if (data.password !== data.c_password) {
      return alert('Password dan konfirmasi password tidak sama!');
    }
    alert('Berhasil!');
    console.log(data);
  };

  return (
    <>
      <BgOverlay />
      <Row className="m-0">
        <Col md="auto" className="p-0">
          <Sidebar />
        </Col>
        <Col className="p-0">
          <main className="main-wrapper">
            <NavbarCustom
              breadcrumb={
                <>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tambah Karyawan
                  </li>
                </>
              }
            />
            <div className="content">
              <Card className="border-0 shadow">
                <Card.Header className="header-custom">
                  Tambah Karyawan
                </Card.Header>
                <Card.Body>
                  <Formik
                    initialValues={{
                      firstname: '',
                      lastname: '',
                      username: '',
                      password: '',
                      c_password: '',
                      tempat_lahir: '',
                      tgl_lahir: '',
                      email: '',
                      no_hp: '',
                      jenis_kelamin: 'Laki-laki',
                      agama: '',
                      posisi: '',
                      tgl_masuk: '',
                      status_perkawinan: '',
                      gaji_pokok: '',
                      alamat: '',
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
                        <Row>
                          <Col md="6">
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="firstname"
                              >
                                <Form.Label>Nama Depan</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Nama Depan"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="lastname"
                              >
                                <Form.Label>Nama Belakang</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Nama Belakang"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="tempat_lahir"
                              >
                                <Form.Label>Tempat Lahir</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Tempat Lahir"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="tgl_lahir"
                              >
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control
                                  type="date"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="jenis_kelamin"
                              >
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <Form.Select onChange={handleChange} required>
                                  <option value="Laki-laki">Laki-laki</option>
                                  <option value="Perempuan">Perempuan</option>
                                </Form.Select>
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="agama"
                              >
                                <Form.Label>Agama</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Agama"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="posisi"
                              >
                                <Form.Label>Posisi</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Posisi"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="tgl_masuk"
                              >
                                <Form.Label>Tanggal Masuk</Form.Label>
                                <Form.Control
                                  type="date"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="status_perkawinan"
                              >
                                <Form.Label>Status Perkawinan</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Status Perkawinan"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="gaji_pokok"
                              >
                                <Form.Label>Gaji Pokok</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="Masukkan Gaji Pokok"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="alamat">
                              <Form.Label>Alamat</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Masukkan Alamat"
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md="6" className="border-start column-2">
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="email"
                              >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="Masukkan Email"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="no_hp"
                              >
                                <Form.Label>Nomor HP</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan No. HP"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                            </Row>
                            <Row>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="username"
                              >
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Masukkan Username"
                                  onChange={handleChange}
                                  required
                                />
                              </Form.Group>
                              <Form.Group
                                as={Col}
                                md="6"
                                className="mb-3"
                                controlId="password"
                              >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type={showPassword ? 'text' : 'password'}
                                  placeholder="Masukkan Password"
                                  className="mb-3"
                                  onChange={handleChange}
                                  required
                                />
                                <Form.Group
                                  className="mb-2"
                                  controlId="c_password"
                                >
                                  <Form.Label>Konfirmasi Password</Form.Label>
                                  <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Masukkan Konfirmasi Password"
                                    onChange={handleChange}
                                    required
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="showPassword"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    label="Show Password"
                                    onChange={(e) =>
                                      setShowPassword(e.target.checked)
                                    }
                                  />
                                </Form.Group>
                              </Form.Group>
                            </Row>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                          <Button
                            className="mt-2"
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
                              'Submit'
                            )}
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Card>
            </div>
            <Footer />
          </main>
        </Col>
      </Row>
      <BackToTop />
    </>
  );
};

export default Layout;
