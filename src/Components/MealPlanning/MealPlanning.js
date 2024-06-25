import React from "react";
import { Card, Button, Form, Modal, ModalFooter} from "react-bootstrap";

const MealPlanning = () => {
  const [show, setShow] = useState(false);
  const [nutrients, setNutrients] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (mealType) => {
    const nutrientsInfo = `Nutrients for ${mealType};
    - Calories: 300
    - Protein: 20g
    carbs: 50g
    - Fat: 10g`;

    setNutrients(nutrientsInfo);
    setShow(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meal Planning</h1>
      <div className="row">
        {["Breakfast", "Lunch", "Dinner"].map((meal) => (
          <div className="col-md-4" key={meal}>
            <card className="mb-4">
              <Card.Body>
                <Card.Title>{meal}</Card.Title>
                <form>
                  <Form.Group className="mb-3" controlId={`form${meal}`}>
                    <Form.Label>Recipe</Form.Label>
                    <Form.Control type="text" placeholder={`Enter ${meal} recipe`} />
                  </Form.Group>
                  <Button variant="primary" onClick={() => handleShow(meal)}>
                    Save Recipe
                  </Button>
                </form>
              </Card.Body>
            </card>
            </div>
        ))}
    </div>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nutrients Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>{nutrients}</Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default MealPlanning; 
