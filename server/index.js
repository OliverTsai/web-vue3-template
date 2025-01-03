const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // 允許所有來源的跨域請求

app.get('/football/today', (req, res) => {
    // 在這裡處理你的API邏輯
    res.json({ message: "This is the response from the server" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});