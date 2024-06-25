import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSearchResults([]);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            ingredients: searchTerm,
            number: 10,
            apiKey: "a2fa5157fc94457abbd67a6492d48b96", // Replace with your Spoonacular API key
          },
        }
      );

      setSearchResults(response.data);
    } catch (error) {
      setError("An error occurred while fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Recipe Search</h1>
      <Form onSubmit={handleSearch} className="mb-4">
        <Row>
          <Col md={10}>
            <Form.Group controlId="formSearch">
              <Form.Control
                type="text"
                placeholder="Search for recipes by ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <Row>
        {searchResults.map((result) => (
          <Col md={4} key={result.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={result.image} alt={result.title} />
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>
                  Used Ingredients: {result.usedIngredientCount}
                </Card.Text>
                <Card.Text>
                  Missed Ingredients: {result.missedIngredientCount}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeSearch;
