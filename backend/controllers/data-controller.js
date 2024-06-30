import Data from "../model/data.js";

export const getData = async (req, res) => {
    let data;
    try{
        data = await Data.find()
    }catch(err){
        console.log(err)
    }
    if(!data) return res.status(404).json({message: "No data found"})
    return res.status(200).json({data})
}

export const addData = async (req, res) => {
    const newData = new Data(req.body)
    try{
        await newData.save();
    }catch(err){
        console.log('err',err)
    }
    if(!newData) return res.status(404).json({message: "No data found"})
    return res.status(201).json({newData})
}