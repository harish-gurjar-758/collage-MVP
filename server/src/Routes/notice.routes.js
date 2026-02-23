import express from 'express';
import {
    createNotice,
    deleteNotice,
    getAllNotices,
    getNoticeById,
    updateNotice
} from '../controllers/notice.controllers.js';
import uploadNoticeBanner from '../middleware/uploadNoticeBanner.js';

const router = express.Router();

router.post('/', uploadNoticeBanner.single("banner"), createNotice);
router.get('/', getAllNotices);
router.get('/:id', getNoticeById);
router.put('/:id', uploadNoticeBanner.single("banner"), updateNotice);
router.delete('/:id', deleteNotice);

export default router;