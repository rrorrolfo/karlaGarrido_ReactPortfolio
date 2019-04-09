
const getPhotoUrl = array => {
    const arrayPhotos = [];
    array.forEach(
        photo => arrayPhotos.push(photo.src)
    )

    return arrayPhotos
}

const requirePhotos = array => {
    const requiredPhotos = [];
    
    array.forEach( 
        photo => requiredPhotos.push(require(photo))
    )

    return requiredPhotos

}

module.exports.getPhotoUrl = getPhotoUrl;
module.exports.requirePhotos = requirePhotos;