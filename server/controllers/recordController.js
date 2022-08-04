import Record from "../models/recordModel.js";

export const createRecord = (req, res) => {
    //console.log(req.body);
    const { username,description,imgCollection } = req.body;

    const newRecord = new Record({
        username,
        description,
        imgCollection,
    }).save()
        .then(() => res.status(201).json({success: true, msg: 'Record created successfully'}))
        .catch((err) => res.status(400).json(`error: ${err}`));
   
}
export const getAllRecords = (req, res) => {
    Record.find()
        .then((records) => res.status(200).json({records}))
        .catch((err) => res.status(400).json(`error: ${err}`));
    
}
export const getRecord = (req, res) => {
    const {id: recordID} = req.params; 
    Record.findById(recordID)
        .then((record) => res.status(200).json({record}))
        .catch((err) => res.status(400).json(`error: ${err}`));
    
}
export const updateRecord = (req, res) => {
    const {id: recordID} = req.params;
    Record.findById(recordID)
        .then((record) => {
            record.username = req.body.username;
            record.description = req.body.description;
            record.imgCollection = req.body.imgCollection;

            record
            .save()
            .then(() => res.status(201).json({success: true, msg: 'Record updated successfully'}))
            .catch((err) => res.status(400).json(`error: ${err}`));
        })
        .catch((err) => res.status(400).json(`error: ${err}`));
    
}
export const deleteRecord = (req, res) => {
    const {id: recordID} = req.params; 
    Record.findByIdAndDelete(recordID)
        .then(() => res.status(200).json({success: true, msg: 'Record deleted successfully'}))
        .catch((err) => res.status(400).json(`error: ${err}`));
    
}