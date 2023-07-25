import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
import BackToTop from '../../components/BackToTop';
import BgOverlay from '../../components/BgOverlay';
import Sidebar from '../../components/Sidebar';
import NavbarCustom from '../../components/Navbar';
import Footer from '../../components/Footer';

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
                <li className="breadcrumb-item active" aria-current="page">
                  Data Karyawan
                </li>
              }
            />
            <div className="content">
              <Card className="border-0 shadow">
                <Card.Header className="header-custom">
                  Data Karyawan
                </Card.Header>
                <Card.Body>
                  <Form>
                    <div className="d-flex search mb-3">
                      <Form.Control type="text" placeholder="Search" />
                      <Button type="submit">Search</Button>
                    </div>
                  </Form>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Lengkap</th>
                        <th>Email</th>
                        <th>No. HP</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th className="text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Rizal Kadamong</td>
                        <td>rizallkadamong@gmail.com</td>
                        <td>082347722639</td>
                        <td>Manado</td>
                        <td>24-01-2003</td>
                        <td>Buha, Mapanget</td>
                        <td className="text-center">
                          <ButtonGroup size="sm">
                            <Button variant="info">
                              <i className="fas fa-search"></i>
                            </Button>
                            <Button variant="warning">
                              <i className="fas fa-edit"></i>
                            </Button>
                            <Button variant="danger">
                              <i className="fas fa-trash"></i>
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Budi</td>
                        <td>budi@gmail.com</td>
                        <td>082347722678</td>
                        <td>Bitung</td>
                        <td>21-05-2000</td>
                        <td>Bitung</td>
                        <td className="text-center">
                          <ButtonGroup size="sm">
                            <Button variant="info">
                              <i className="fas fa-search"></i>
                            </Button>
                            <Button variant="warning">
                              <i className="fas fa-edit"></i>
                            </Button>
                            <Button variant="danger">
                              <i className="fas fa-trash"></i>
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Mawar</td>
                        <td>mawar_23@gmail.com</td>
                        <td>08234715674</td>
                        <td>Jakarta</td>
                        <td>05-03-1998</td>
                        <td>Jakarta</td>
                        <td className="text-center">
                          <ButtonGroup size="sm">
                            <Button variant="info">
                              <i className="fas fa-search"></i>
                            </Button>
                            <Button variant="warning">
                              <i className="fas fa-edit"></i>
                            </Button>
                            <Button variant="danger">
                              <i className="fas fa-trash"></i>
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
