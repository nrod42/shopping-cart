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
      className="mb-5"
      style={{
        display: "flex",
        width: "100%", // Ensure the Nav component takes up the full width
        // height: "4rem",
      }}
    >
      <Nav.Item style={{ flex: "1" }}>
        <Nav.Link eventKey="all" onClick={showAll}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ flex: "1" }}>
        <Nav.Link eventKey="furniture" onClick={showFurniture}>
          Furniture
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ flex: "1" }}>
        <Nav.Link eventKey="clothing" onClick={showClothes}>
          Clothing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ flex: "1" }}>
        <Nav.Link eventKey="electronics" onClick={showElectronics}>
          Electronics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ flex: "1" }}>
        <Nav.Link eventKey="appliances" onClick={showAppliances}>
          Appliances
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CategoryNav;
