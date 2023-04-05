const mongoose = require('mongoose');
const SinhVienSchema = new mongoose.Schema({
    ten: {
        type: String,
        
        
    },
    tuoi: {
        type: Number,
       

    },
    diachi: {
        type: String,
    }
    ,
    
}, {
    collection: 'SinhVien'
}
);

const SinhVienModel = mongoose.model('SinhVien', SinhVienSchema);
module.exports = SinhVienModel;