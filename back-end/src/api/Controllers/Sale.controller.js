const saleService = require('../Services/Sale.service');

const getSellers = async (req, res) => {
  try {
    const sellers = await saleService.getSellers();
    return res.status(200).json(sellers);
  } catch (error) {
    console.log('controller:', error);
  }
};

const getSellerById = async (req, res) => {
  try {
    const { id } = req.params;
    const seller = await saleService.getSellerById(id);
    return res.status(200).json(seller);
  } catch (error) {
    console.log(error);
  }
};

const createSale = async (req, res) => {
  try {
    const { body: { request, products } } = req;
    const newSale = await saleService.createSale(request, products);
    if (newSale) {
      return res.status(201).json(newSale);
    } return res.status(404).json({ message: 'Error creating' });
  } catch (error) {
    console.log('controller:', error);
  }
};

const updateSaleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSale = await saleService.updateSaleStatus(id);
    return res.status(200).json(updatedSale);
  } catch (error) {
    console.log('controller:', error);
  }
};

module.exports = {
  getSellers,
  createSale,
  getSellerById,
  updateSaleStatus,
};
