import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index';
import { errorHandler } from './middlewares/error.middleware';
import { authMiddleware } from './middlewares/auth.middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Start the server
const startServer = async () => {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();