import express from 'express'
import {
    createNoticeCategory,
    deleteNoticeCategory,
    getAllNoticeCategory,
    getNoticeCategoryById,
    updateNopticeCategory

} from '../controllers/noticeCategory.controller.js';

const router = express.Router();

router.post("/", createNoticeCategory);
router.get("/", getAllNoticeCategory);
router.get('/:id', getNoticeCategoryById);
router.put('/:id', updateNopticeCategory);
router.delete('/:id', deleteNoticeCategory);

export default router;