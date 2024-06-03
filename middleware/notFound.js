const notFound = (req, res, next) => {
    const error = new Error(`Not found!`)
        error.status = 400;
        return next(error)
}

export default notFound;