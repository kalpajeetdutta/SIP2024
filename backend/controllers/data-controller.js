import Data from '../model/data.js';

export const getData = async (req, res) => {
  try {
    let data;
    data = await Data.find();
    if (!data) return res.status(404).json({message: 'No data found'});
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

export const addData = async (req, res) => {
  try {
    const newData = new Data(req.body);
    console.log('newData', newData);
    await newData.save();
    if (!newData) return res.status(404).json({message: 'No data found'});
    return res.status(201).json({newData});
  } catch (err) {
    console.log('err', err);
  }
};
