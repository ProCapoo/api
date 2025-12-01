// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello from Render！API 已經上線啦～" });
});

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: "小明" }, { id: 2, name: "小美" }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));
