const excel = require('exceljs');
const path = require("path");
const fs = require("fs");

const Covid = require("../models/Covid");

module.exports = {
    viewDashboard: async (req, res) => {
      try {
        const datacovid = await Covid.find();
        console.log(datacovid);
        var name = [];
        datacovid.forEach(function (data) {
          name.push(data.tanggal);
        });
        console.log(name);
        var value = [];
        datacovid.forEach(function (data) {
          value.push(data.usia);
        });
        console.log(value);
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus };
        res.render('dashboard/view_dashboard', {
          alert,
          names: name,
          values: value,
          title: "Covid-test | Dashboard",
          page: "Dashboard"
        });
      } catch (error) {
        res.redirect('dashboard');
      }
    },

    viewCovid: async (req, res) => {
      try {
        const datacovid = await Covid.find().sort({tanggal: 'asc'});
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus };
        res.render('covid/view_covid', {
          alert,
          datacovid,
          title: "Covid-test | Data Covid",
          page: "Data Covid"
        });
      } catch (error) {
        res.redirect('covid');
      }
    },
    filterCovid: async (req, res) => {
      try {
        const { status, usia, tgl_mulai, tgl_akhir } = req.body;
        if (req.body.status && req.body.usia && req.body.tgl_mulai && req.body.tgl_akhir){
          const datacovid = await Covid.find({
            status: status,
            usia: usia,
            tanggal: {
              $gte: tgl_mulai,
              $lt: tgl_akhir
            }
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else if (req.body.usia && req.body.tgl_mulai && req.body.tgl_akhir){
          const datacovid = await Covid.find({
            usia: usia,
            tanggal: {
              $gte: tgl_mulai,
              $lt: tgl_akhir
            }
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else if (req.body.status && req.body.tgl_mulai && req.body.tgl_akhir){
          const datacovid = await Covid.find({
            status: status,
            tanggal: {
              $gte: tgl_mulai,
              $lt: tgl_akhir
            }
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else if (req.body.status && req.body.usia){
          const datacovid = await Covid.find({
            status: status,
            usia: usia
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else if (req.body.tgl_mulai && req.body.tgl_akhir){
          const datacovid = await Covid.find({
            tanggal: {
              $gte: tgl_mulai,
              $lt: tgl_akhir
            }
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else if (req.body.usia){
          const datacovid = await Covid.find({
            usia: usia
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else if ( req.body.status){
          const datacovid = await Covid.find({
            status: status
          }).sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
        else {
          const datacovid = await Covid.find().sort({tanggal: 'asc'});
          console.log(datacovid);
          const alertMessage = req.flash('alertMessage');
          const alertStatus = req.flash('alertStatus');
          const alert = { message: alertMessage, status: alertStatus };
          res.render('covid/view_covid', {
            alert,
            datacovid,
            title: "Covid-test | Data Covid",
            page: "Data Covid"
          });
        }
      } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/covid');
      }
    },
    
    addCovid:async (req, res) => {
      try {
        const { tanggal, no_pasien, usia, status } = req.body;
          await Covid.create({ tanggal, no_pasien, usia, status });
          req.flash('alertMessage', 'Berhasil Menambahkan Data Pasien');
          req.flash('alertStatus', 'success');
          res.redirect('/covid');
      } catch (error) {
        req.flash('alertMessage', 'Gagal Menambahkan Data Pasien');
        req.flash('alertStatus', 'danger');
        res.redirect('/covid');
      }
    },
    updateCovid: async (req, res) => {
      try {
        const { id, tanggal, no_pasien, usia, status } = req.body;
        const covid = await Covid.findOne({ _id: id });
        covid.tanggal = tanggal;
        covid.no_pasien = no_pasien;
        covid.usia = usia;
        covid.status = status;
        req.flash('alertMessage', 'Berhasil Mengubah Data Pasien');
        req.flash('alertStatus', 'success');
        await covid.save();
        res.redirect('/covid');
      } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/covid');
      }
    },
    deleteCovid: async (req, res) => {
      try {
        const { id } = req.params;
        const covid = await Covid.findOne({ _id: id });
        await covid.remove();
        req.flash('alertMessage', 'Berhasil Menghapus Data Pasien');
        req.flash('alertStatus', 'success');
        res.redirect('/covid');
      } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/covid');
      }
    },
    exportCovid: async (req, res) => {
      try {
        const datacovid = await Covid.find().sort({tanggal: 'asc'});
        let workbook = new excel.Workbook(); //creating workbook
        let worksheet = workbook.addWorksheet('Sheet1'); //creating worksheet
        
        //  WorkSheet Header
        worksheet.columns = [
          { header: 'Tanggal', key: 'tanggal', width: 30 },
          { header: 'Jumlah Pasien Positif', key: 'tanggal', width: 30 },
          { header: 'No Pasien', key: 'no_pasien', width: 30},
          { header: 'Usia', key: 'usia', width: 10},
          { header: 'Status', key: 'status', width: 30, outlineLevel: 1}
        ];
        
        // Add Array Rows
        worksheet.addRows(datacovid);

       // Write to File
        workbook.xlsx.writeFile("dataCovid.xlsx")
        .then(function() {
          console.log("file saved!");
        });
        req.flash('alertMessage', 'Berhasil Export Data Covid');
        req.flash('alertStatus', 'success');
        res.redirect('/covid');
      } catch (error) {
        req.flash('alertMessage', `${error.message}`);
        req.flash('alertStatus', 'danger');
        res.redirect('/covid');
      }
    }
    

}