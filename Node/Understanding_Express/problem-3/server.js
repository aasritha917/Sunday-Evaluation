const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const getData = () => {
    const raw = fs.readFileSync("./db.json", "utf-8");
    return JSON.parse(raw);
};

const saveData = (data) => {
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
};

// GET all dishes
app.get("/dishes", (req, res) => {
    const data = getData();
    res.status(200).json(data.dish);
});

// POST a new dish
app.post("/dishes", (req, res) => {
    const data = getData();
    const dish = data.dish;

    const newId = dish.length > 0 ? dish[dish.length - 1].id + 1 : 1;
    const newDish = { ...req.body, id: newId };

    dish.push(newDish);
    saveData(data);

    res.status(201).json({ message: "New Dish Added", dish: newDish });
});

// GET dish by ID
app.get("/dishes/:id", (req, res) => {
    const { id } = req.params;
    const data = getData();
    const dish = data.dish.find(d => d.id == id);

    if (dish) {
        res.status(200).json(dish);
    } else {
        res.status(404).json({ message: "Dish not found" });
    }
});

// PUT (update) dish by ID
app.put("/dishes/:id", (req, res) => {
    const { id } = req.params;
    const data = getData();
    const index = data.dish.findIndex(d => d.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "Dish not found" });
    }

    data.dish[index] = { ...data.dish[index], ...req.body };
    saveData(data);

    res.status(200).json({ message: "Dish updated", dish: data.dish[index] });
});

// DELETE dish by ID
app.delete("/dishes/:id", (req, res) => {
    const { id } = req.params;
    const data = getData();
    const dishList = data.dish;

    const newDishes = dishList.filter(d => d.id != id);

    if (dishList.length === newDishes.length) {
        return res.status(404).json({ message: "Dish not found" });
    }

    data.dish = newDishes;
    saveData(data);

    res.status(200).json({ message: "Dish deleted" });
});

//GET /dishes/get?name=... (search with partial match)
app.get("/dishes/get", (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ message: "Name query parameter is required" });
    }

    const data = getData();
    const matches = data.dish.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));

    if (matches.length === 0) {
        return res.status(404).json({ message: "No dishes found" });
    }

    res.status(200).json(matches);
});

//404 for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});

//Start server
app.listen(3000, () => {
    console.log("running in node 3000");
});
