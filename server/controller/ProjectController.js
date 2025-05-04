const ProjectModel = require('../model/ProjectModel')

const store = async (req, res) => {
  console.log(req.body);
  var arr = []

  req.files.wedding_img.forEach(image => {
    arr.push(image.filename)
  });
  var singleimg = "";
  if (req.files.wedding_face !== undefined) {
    singleimg = req.files.wedding_face[0].filename
  }

  try {
    const {
      wedding_name,
      Package,
      Date,
      Mobile_Number,
      months,
      days,
      hours,
      minutes,
      pin,
      members,
      terms
    } = req.body;



    const project = await ProjectModel.create({
      wedding_name,
      Package,
      Date,
      Mobile_Number,
      months,
      days,
      hours,
      minutes,
      pin,
      members,
      terms,
      wedding_face: singleimg, wedding_img: arr
    });
    res.json({ message: "Inserted successfully", project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inserting project", error: error.message });
  }
};






const index = async (req, res) => {
  const project = await ProjectModel.find();
  res.json({
    success: true,
    project
  })
}

const trash = async (req, res) => {
  const { id } = req.params;
  const project = await ProjectModel.findByIdAndDelete(id)
  // res.json("record delete")
  res.redirect('/Pending')
}

const edit = async (req, res) => {
  const { id } = req.params
  const { wedding_name, Package, Mobile_Number, months, days, hours, miniutes, pin } = req.body
  await ProjectModel.findByIdAndUpdate(
    {
      _id: id
    },
    {
      wedding_name, Package, Mobile_Number, months, days, hours, miniutes, pin
    }
  )
  res.json({
    message: "updated...."
  })
}


module.exports = { store, index, trash, edit }