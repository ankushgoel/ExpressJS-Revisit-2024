const errorHandler = (err, req, res, next) => {
    console.log('middelware', err);
    res.status(err.status || 500).json({message: err.message})
}

export default errorHandler;