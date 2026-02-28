const express = require("express");
const app = express();

app.use(express.json());
let ChennaiStreetFood = [
  {
    id: 1,
    name: "Sundal",
    type: "Snack",
    vegetarian: true,
    priceRangeINR: "20-40",
    rating: 4.5
  },
  {
    id: 2,
    name: "Kothu Parotta",
    type: "Main Course",
    vegetarian: false,
    priceRangeINR: "80-150",
    rating: 4.8
  },
  {
    id: 3,
    name: "Aththo",
    type: "Evening Snack",
    vegetarian: true,
    priceRangeINR: "50-100",
    rating: 4.6
  },
  {
    id: 4,
    name: "Kalakki",
    type: "Snack",
    vegetarian: false,
    priceRangeINR: "30-60",
    rating: 4.4
  },
  {
    id: 5,
    name: "Pani Puri",
    type: "Chaat",
    vegetarian: true,
    priceRangeINR: "30-70",
    rating: 4.3
  }
];

// ==============================
// GET - All Items
// ==============================
app.get("/api/foods", (req, res) => {
  res.status(200).json({
    success: true,
    count: ChennaiStreetFood.length,
    data: ChennaiStreetFood
  });
});

// ==============================
// GET - Single Item by ID
// ==============================
app.get("/api/foods/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const food = ChennaiStreetFood.find(item => item.id === id);

  if (!food) {
    return res.status(404).json({
      success: false,
      message: "Food item not found"
    });
  }

  res.status(200).json({
    success: true,
    data: food
  });
});

// ==============================
// POST - Add New Item
// ==============================
app.post("/api/foods", (req, res) => {
  const { name, type, vegetarian, priceRangeINR, rating } = req.body;

  if (!name || !type) {
    return res.status(400).json({
      success: false,
      message: "Name and Type are required"
    });
  }

  const newFood = {
    id: ChennaiStreetFood.length + 1,
    name,
    type,
    vegetarian: vegetarian ?? true,
    priceRangeINR: priceRangeINR ?? "Not specified",
    rating: rating ?? 0
  };

  ChennaiStreetFood.push(newFood);

  res.status(201).json({
    success: true,
    message: "Food item added successfully",
    data: newFood
  });
});

// ==============================
// PUT - Update Item
// ==============================
app.put("/api/foods/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = ChennaiStreetFood.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Food item not found"
    });
  }

  ChennaiStreetFood[index] = {
    ...ChennaiStreetFood[index],
    ...req.body,
    id: id
  };

  res.status(200).json({
    success: true,
    message: "Food item updated successfully",
    data: ChennaiStreetFood[index]
  });
});

// ==============================
// DELETE - Remove Item
// ==============================
app.delete("/api/foods/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = ChennaiStreetFood.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Food item not found"
    });
  }

  const deletedItem = ChennaiStreetFood.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Food item deleted successfully",
    data: deletedItem[0]
  });
});

// ==============================
// Server
// ==============================
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/foods`);
});