import express from 'express';
import {approvalMethod,depositMethod,withDrawTokenMethod,getTxtInfo} from '../controllers/ether-controler.js';
const router = express.Router();

// router.post('/approve',approveMethod);
router.post('/approve',approvalMethod);
router.post('/deposit',depositMethod);
router.post('/withdraw-token',withDrawTokenMethod);
router.get('/getTxtInfo',getTxtInfo);

export default router;