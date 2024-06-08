const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy database
const cancerPatients = [
    { id: 1, name: 'John Doe', age: 45, cancerType: 'Lung Cancer' },
    { id: 2, name: 'Jane Smith', age: 35, cancerType: 'Breast Cancer' },
    // Add more patients as needed
];

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/cancer-patients', (req, res) => {
    // Dummy authentication check
    const authenticated = true; // Assume user is authenticated for demo
    if (!authenticated) {
        return res.status(401).send('Unauthorized');
    }
    // Return list of cancer patients
    res.json(cancerPatients);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



