const kitData = require("../data");
exports.getKit = async function (req, res) {
  try {
    let paginatedData;
    const id = req.query.q;
    const pageSize = 10;
    if (id && id != undefined) {
      const page = parseInt(req.query.page) || 1;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const data = kitData.filter((el) => el.id.toString().includes(id));
      paginatedData = data.slice(startIndex, endIndex);
    } else {
      paginatedData = kitData.slice(0, pageSize);
    }

    res.status(201).json(paginatedData);
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
