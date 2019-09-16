const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    //const products = await Product.find();
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
  async update(req, res) {
    //con a config new = true, retorna o objeto atualizado
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  },
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
  async seed(req, res) {
    for (let index = 0; index < 20; index++) {
      await Product.create({
        title: `product ${index}`,
        description: `description ${index}`,
        url: `http://product${index}`
      });

    }
    const products = await Product.find();
    return res.json(products);
  }
};
