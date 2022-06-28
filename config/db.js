const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser:true,
            // useCreateIndex: true,
            // useFindAndModify: true,
        })
        console.log('Connect DB Success!!')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB