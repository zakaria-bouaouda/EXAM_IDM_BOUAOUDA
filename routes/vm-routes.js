const express=require("express");
const router=express.Router();
const vmsControllers=require('../controllers/vmController');

// router.get('/',(req,resp,next)=>{
//     // 
//     console.log('get request in places');
//     resp.json({message:'ok'});
// });


router.post('/', vmsControllers.postVm);
router.get('/',vmsControllers.getVm);

module.exports=router;