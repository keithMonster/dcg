/**
 * Created by dcg on 16/9/20.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
// router.get('/:sss', function (req, res) {
//     // , { title: 'Express' }
//     console.log('index');
//     res.render('index');
// });
router.get('/*', function (req, res) {
    // , { title: 'Express' }
    console.log('index');
    res.render('index');
});
module.exports = router;