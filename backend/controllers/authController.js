import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};