var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/db_covid', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Covid'
  ]);

  // Clear specified collections
  seeder.clearModels(['Covid'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  {
    'model': 'Covid',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53116'),
        tanggal: '01/03/2020',
        no_pasien: 'No_0012',
        usia: '34',
        status: 'Dirawat'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53117'),
        tanggal: '01/03/2020',
        no_pasien: 'No_0013',
        usia: '32',
        status: 'Dirawat'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53118'),
        tanggal: '01/03/2020',
        no_pasien: 'No_0014',
        usia: '12',
        status: 'Sembuh'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53119'),
        tanggal: '01/03/2020',
        no_pasien: 'No_0015',
        usia: '14',
        status: 'Sembuh'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53120'),
        tanggal: '01/03/2020',
        no_pasien: 'No_0016',
        usia: '17',
        status: 'Sembuh'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53121'),
        tanggal: '06/03/2020',
        no_pasien: 'No_0017',
        usia: '20',
        status: 'Meninggal'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53122'),
        tanggal: '07/03/2020',
        no_pasien: 'No_0018',
        usia: '30',
        status: 'Meninggal'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53123'),
        tanggal: '08/03/2020',
        no_pasien: 'No_0019',
        usia: '30',
        status: 'Meninggal'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53124'),
        tanggal: '09/03/2020',
        no_pasien: 'No_0020',
        usia: '21',
        status: 'Meninggal'
      },
      {
        _id: mongoose.Types.ObjectId('602b33330f51d62540b53125'),
        tanggal: '10/03/2020',
        no_pasien: 'No_0021',
        usia: '60',
        status: 'Dirawat'
      },
    ]
  }
];
