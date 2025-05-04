// const CountDownModel = require('../model/CountDownModel')

// const AddCountDown = async (req, res) => {
//     try {
//         const { months, days, hours, minutes } = req.body;

//         const countdown = await CountDownModel.create(
//             { months, days, hours, minutes },
//         );
//         res.json({
//             success: true,
//             message: "CountDown added..."
//         })


//     } catch (error) {
//         console.log(error);
//     }
// };
// const updateCountdown = async (req, res) => {
//     try {
//         const { months, days, hours, minutes } = req.body;

//         // Find the existing countdown or create a new one
//         const countdown = await CountDownModel.findOneAndUpdate(
//             {},
//             { months, days, hours, minutes },
//             { new: true, upsert: true }
//         );

//         res.status(200).json({ message: "Countdown updated", countdown });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating countdown", error });
//     }
// };

// const getCountdown = async (req, res) => {
//     try {
//         const countdown = await CountDownModel.findOne();
//         if (!countdown) {
//             return res.status(404).json({ message: "Countdown not found" });
//         }
//         res.status(200).json(countdown);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching countdown", error });
//     }
// };


// module.exports = { updateCountdown, getCountdown, AddCountDown }
