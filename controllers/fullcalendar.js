exports.createEvent = async(req, res) =>{
    try {
        res.send('Create Event Success')
    } catch (error) {
        console.log('Server Error')
        res.status(500).send('Server Error!!')
    }
}
