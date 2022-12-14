import Nav from "react-bootstrap/Nav";

const CategoryNav = ({
  showAll,
  showFurniture,
  showClothes,
  showElectronics,
  showAppliances,
}) => {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="all"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.3rem",
      }}
    >
      <Nav.Item>
        <Nav.Link eventKey="all" onClick={showAll}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="furniture" onClick={showFurniture}>
          Furniture
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="clothing" onClick={showClothes}>
          Clothing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="electronics" onClick={showElectronics}>
          Electronics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="appliances" onClick={showAppliances}>
          Appliances
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CategoryNav;
