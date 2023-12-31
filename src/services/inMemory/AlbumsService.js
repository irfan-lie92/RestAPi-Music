const { nanoid } = require('nanoid');
const InvariantError = require('../../error/InvariantError');
const NotFoundError = require('../../error/NotFoundError');

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbum({ name, year }) {
    const id = `album-${nanoid(16)}`;
    const newAlbum = { id, name, year };
    this._albums.push(newAlbum);
    const isSucces = this._albums.filter((album) => album.id === id).length > 0;
    if (!isSucces) {
      throw new InvariantError('Album gagal ditambahkan');
    }
    return id;
  }

  getAlbums() {
    return this._albums;
  }

  getAlbumById(id) {
    const album = this._albums.filter((n) => n.id === id)[0];
    if (!album) {
      throw new NotFoundError('Album tidak ditemukan');
    }
    return album;
  }

  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new NotFoundError('Album tidak ditemukan');
    }
    this._albums[index] = { id, name, year };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new NotFoundError('Album tidak ditemukan');
    }
    this._albums.splice(index, 1);
  }
}

module.exports = AlbumsService;
