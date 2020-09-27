const series = require('../model/series.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
};
const getById = (req, res) => {
    const id = req.params.id
    const seriesFind = series.find((serie) => serie.id == id); //(forma reduzida sem o return)
    res.status(200).send(seriesFind)
};
const getByYear = (req, res) => {
    const year = req.params.firstEpisode;
    const yearFilter = series.filter((serie) => serie.firstEpisode == year);
    res.status(200).send(yearFilter);
};
const getAllSeries = (req, res) => {
    const titleSerie = series.map((serie) => serie.title)
    res.status(200).send(titleSerie)
}

module.exports = { getAll, getById, getByYear, getAllSeries};