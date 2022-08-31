const { BadRequest, UnauthenticatedError } = require('./errors')
const jwt = require('jsonwebtoken')
const { Artist, Artwork } = require('./models.js')


const login = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        throw new BadRequest('please provide email & password')
    }
    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(200).json({msg: 'user created', token})
}

const auth = async (req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No Token Provided')
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        res.status(200).json({user: req.user.username})

    } catch (error) {
        throw new UnauthenticatedError('token unauthorized')
    }

  
}


const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find({})
        res.status(200).json({ artists })
    } catch (err) {
        console.log(err)
    }
}

const getArtist = async (req, res) => {
    const {name: name} = req.params
    try {
        const artist = await Artist.findOne({ name: name })
        res.status(200).json({artist})
    } catch (err) {
        console.log(err)
    }
}

const getAllArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.find({})
        res.status(200).json({ artworks })
    } catch (err) {
        console.log(err)
    }
}

const getArtwork = async (req, res) => {
    const {name: name} = req.params
    try {
        const artwork = await Artwork.findOne({ name: name })
        res.status(200).json({ artwork })
    } catch (err) {
        console.log(err)
    }
}

const getArtistAndArtworks = async (req, res) => {
    const {name: name} = req.params
    try {
        const artist = await Artist.findOne({ name: name })
        const artworks = await Artwork.find({artist: artist.name}) 
        res.status(200).json({artist: artist, artworks: artworks})
        
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    login, 
    auth, 
    getAllArtists, 
    getArtist,
    getAllArtworks,
    getArtwork,
    getArtistAndArtworks
}