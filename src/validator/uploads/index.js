const InvariantError = require('../../error/InvariantError');
const { ImageCoverAlbumsSchema } = require('./schema');

const UploadsValidator = {
  validateImageCoverAlbums: (cover) => {
    const validationResult = ImageCoverAlbumsSchema.validate(cover);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UploadsValidator;
