import { Router } from 'express';
import apiController from '../controllers/apiController.js';
const router = Router();

// router.get('/test', async (req, res) => {
//   const url =
//    'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LAX&destinationLocationCode=JFK&departureDate=2024-05-15&returnDate=2024-05-25&adults=2&max=5';
//   const accessToken = 'llQ0jqeZzqOr7c1kpNLBX9DzPWM8';
//   const options = {
//     method: 'GET',
//     headers: {
//       'content-type': 'application/json',
//       Authorization: `Bearer ${accessToken}`
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//     res.status(200).json(data);
//     return;
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({a: 1});
//   }
//  });

router.get('/flights/:id', apiController.getUserFlights, (req, res) => {
  console.log("THIS IS THE RESPONSE FLIGHTS")
  console.log(res);
  res.status(200).json(res.locals.flights);
});

// router.delete('/flights/:id', apiController.deleteUserFlight, (req, res) => {
//   res.status(200).json({a: 1});
// });

router.post('/flights/', apiController.addUserFlight, (req, res) => {
  res.status(200).json(res.locals.flight);
});

router.get('/:id', apiController.getUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

export default router;
