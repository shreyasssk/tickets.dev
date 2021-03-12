import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY not defined!');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI not specified!');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Auth server listening on port: ${PORT}`);
  });
};

start();
