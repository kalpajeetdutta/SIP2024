import Contact from "../model/contact.js"

export const sentMsg = async(req, res) => {
    try {
        console.log(req.body)
        const newMsg = new Contact(req.body);
        console.log('newMsg', newMsg);
        await newMsg.save();
        if (!newMsg) return res.status(404).json({message: 'Message sent error'});
        return res.status(201).json({newMsg});
      } catch (err) {
        console.log('err', err);
      }
}