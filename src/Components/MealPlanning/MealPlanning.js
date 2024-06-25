import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import axios from "axios";

const MealPlanning = () => {
  const [meals, setMeals] = useState({ breakfast: [], lunch: [], dinner: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate`,
        {
          params: {
            timeFrame: "day",
            apiKey: "a2fa5157fc94457abbd67a6492d48b96", // Replace with your Spoonacular API key
          },
        }
      );

      const meals = response.data.meals.map((meal) => ({
        id: meal.id,
        title: meal.title,
        image: `https://spoonacular.com/recipeImages/${meal.id}-312x231.jpg`, // Assuming this is how the image URLs are formed
        nutrition: meal.nutrition, // Assuming this is how nutrition info is included
        mealType: meal.mealType, // Assuming this field exists
      }));
      
      setMeals({
        breakfast: response.data.meals.filter(
          (meal) => meal.mealType === "breakfast"
        ),
        lunch: response.data.meals.filter((meal) => meal.mealType === "lunch"),
        dinner: response.data.meals.filter(
          (meal) => meal.mealType === "dinner"
        ),
      });
    } catch (error) {
      setError(
        "An error occurred while fetching meal plans. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (meal) => {
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Meal Planning</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <Row>
        <Col>
          <h2>Breakfast</h2>
          <Row>
            {meals.breakfast.map((meal, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={meal.image} alt={meal.title} />
                  <Card.Body>
                    <Card.Title>{meal.title}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShowModal(meal)}
                    >
                      View Nutrients
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Lunch</h2>
          <Row>
            {meals.lunch.map((meal, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={meal.image} alt={meal.title} />
                  <Card.Body>
                    <Card.Title>{meal.title}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShowModal(meal)}
                    >
                      View Nutrients
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Dinner</h2>
          <Row>
            {meals.dinner.map((meal, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={meal.image} alt={meal.title} />
                  <Card.Body>
                    <Card.Title>{meal.title}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShowModal(meal)}
                    >
                      View Nutrients
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMeal?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display nutrient information here */}
          <p>Calories: {selectedMeal?.nutrition?.calories}</p>
          <p>Protein: {selectedMeal?.nutrition?.protein}</p>
          <p>Fat: {selectedMeal?.nutrition?.fat}</p>
          <p>Carbohydrates: {selectedMeal?.nutrition?.carbohydrates}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MealPlanning;
