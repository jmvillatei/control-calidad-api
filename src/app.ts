import express from 'express';
import morgan from 'morgan';

import indexRoutes from './routes/index'

const app = express();

//setings
app.set('port', process.env.PORT || 4000);

// middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', indexRoutes);

// folder for public files
app.use('/uploads', express.static(('uploads')));

export default app;