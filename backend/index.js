import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import studentRoutes from './routes/studentRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/attendance', attendanceRoutes); // Add this line
app.use('/api/auth', authRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});