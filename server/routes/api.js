import express from 'express';
import { Router } from 'express';
import supabase from '../models/armadilloModel.js';
const router = Router();
console.log('hello there');
router.get('/', async (req, res) => {
  console.log('hello');
  try {
    const { data, error } = await supabase.from('kids').select();

    if (supabase) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
    supabase
      .from('persons')
      .select()
      .then((resp) => console.log(resp));

    res.status(200).json(data);
  } catch (error) {
    console.log('failed');
    res.status(404).json(error);
  }
});

export default router;
