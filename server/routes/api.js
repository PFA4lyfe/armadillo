import { Router } from 'express';
import apiController from '../controllers/apiController.js';
const router = Router();

router.get('/:id', apiController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get('/flights/:id', apiController.getUserFlights, (req, res) => {
  res.status(200).json(res.locals.flights);
});

router.post('/flights/', apiController.addUserFlight, (req, res) => {
  res.status(200).json(res.locals.flight);
});

router.delete('/flights/:id', apiController.deleteUserFlight, (req, res) => {
  res.status(200).json({a: 1});
});


export default router;
