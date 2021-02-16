const Covid = require("../models/Covid");
module.exports = {
    grafik1: async (req,res) => {
        try {
            const data = await Covid.aggregate([
                {$group: { _id: "$tanggal", TanggalCount:{$sum : 1}}}
            ])
            
            res.status(200).json({
                ...data
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "internal server error"});
        }
    },
    grafik2: async (req,res) => {
        let muda_, sedang_, tua_;
        Covid.find({})
            .then(data => {
            muda_ = data.filter(datacovid => datacovid.usia < 17);
            sedang_ = data.filter(datacovid => datacovid.usia > 17 - 40);
            tua_ = data.filter(datacovid => datacovid.usia >  40);
            res.status(200).json({
                muda: muda_.length,
                sedang: sedang_.length,
                tua: tua_.length,
            });
            })
            .catch(err => console.error(err));
    },
    grafik3: async (req,res) => {
        let sembuh_, dirawat_, meninggal_;
        Covid.find({})
            .then(data => {
            sembuh_ = data.filter(datacovid => datacovid.status == "Sembuh");
            dirawat_ = data.filter(datacovid => datacovid.status == "Dirawat");
            meninggal_ = data.filter(datacovid => datacovid.status == "Meninggal");
            res.status(200).json({
                sembuh: sembuh_.length,
                dirawat: dirawat_.length,
                meninggal: meninggal_.length,
            });
            })
            .catch(err => console.error(err));
    }
}