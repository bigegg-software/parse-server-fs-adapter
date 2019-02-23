'use strict'

const ReadStream = require('fs-readstream-seek')
//hack to be used in ParsePlatform/FileRouter::handlFileStream

ReadStream.prototype._orig_close = ReadStream.prototype.close
ReadStream.prototype.close = function() {
    this._closeInvoked = true;
    this._orig_close();
}

ReadStream.prototype._orig_emit = ReadStream.prototype.emit
ReadStream.prototype.emit = function(ev, data) {
    if(this._closeInvoked && ev === 'data') {
        return;
    }
    this._orig_emit(ev, data);
}


ReadStream.prototype._orig_seek = ReadStream.prototype.seek
ReadStream.prototype.seek = function (pos, cb) {
    this._orig_seek(pos);
    if (cb) {
        setTimeout(cb, 0);
    }
}
module.exports = ReadStream
