import { Row, Col, Card } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import BgOverlay from '../../components/BgOverlay';
import Footer from '../../components/Footer';
import './style.scss';
import BackToTop from '../../components/BackToTop';
import { Link } from 'react-router-dom';

const Layout = () => {
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
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </>
              }
            />
            <div className="header">
              <div className="alert alert-primary" role="alert">
                <h4 className="alert-heading">Selamat Datang!</h4>
                <p>
                  Halo User! ini adalah Welcome Message yang akan kamu lihat
                  ketika mengakses halaman Dashboard!
                </p>
                <hr />
                <p className="mb-0">Enjoy dengan tampilan ini! :)</p>
              </div>
            </div>
            <div className="content dashboard">
              <Row>
                <Col md={6}>
                  <Card className="border-custom primary shadow mb-3">
                    <Card.Header className="primary">
                      Highlight Content
                    </Card.Header>
                    <Card.Body>
                      Berisikan konten apapun yang ingin disorot...
                      {/* element <br/> di bawah ini hanya untuk sementara */}
                      <br />
                      <br />
                      <br />
                      <br />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col xl={6}>
                      <Card className="border-custom border-success shadow mb-3">
                        <Card.Body>
                          <div className="icon">
                            <i className="text-success fas fa-users fa-sm fa-fw fa-3x"></i>
                            <small className="text-muted">Karyawan</small>
                          </div>
                          <span className="amount">102</span>
                        </Card.Body>
                      </Card>
                      <Card className="border-custom border-warning shadow mb-3">
                        <Card.Body>
                          <div className="icon">
                            <i className="text-warning fas fa-tasks fa-sm fa-fw fa-3x"></i>
                            <small className="text-muted">Task Job</small>
                          </div>
                          <span className="amount">12</span>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xl={6}>
                      <Card className="border-custom border-info shadow mb-3">
                        <Card.Body>
                          <div className="icon">
                            <i className="text-info fas fa-address-book fa-sm fa-fw fa-3x"></i>
                            <small className="text-muted">Absensi</small>
                          </div>
                          <span className="amount">25</span>
                        </Card.Body>
                      </Card>
                      <Card className="border-custom border-danger shadow mb-3">
                        <Card.Body>
                          <div className="icon">
                            <i className="text-danger fas fa-envelope fa-sm fa-fw fa-3x"></i>
                            <small className="text-muted">Mail</small>
                          </div>
                          <span className="amount text">76</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Card className="border-0 shadow">
                <Card.Header>Other Content</Card.Header>
                <Card.Body>Konten apapun lainnya...</Card.Body>
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
