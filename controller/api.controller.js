const {request, response} = require('express')

const getApi = ((req= request, res= response) => {
    res.send('<h1>muy buenas a todos guapisimos</h1>');
});

module.exports = { getApi };