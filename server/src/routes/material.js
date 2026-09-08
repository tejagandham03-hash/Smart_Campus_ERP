const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/authorize');
const { ROLES } = require('../config/constants');
const { getMaterials, createMaterial, deleteMaterial } = require('../controllers/material');

const uploadDirectory = path.join(__dirname, '../../uploads/materials');
fs.mkdirSync(uploadDirectory, { recursive: true });
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, uploadDirectory),
  filename: (_req, file, callback) => callback(null, `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')}`),
});
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => callback(null, /^(application|text|image|video)\//.test(file.mimetype)),
});

const router = express.Router();
router.get('/', protect, getMaterials);
router.post('/', protect, authorize(ROLES.FACULTY, ROLES.ADMIN), upload.single('file'), createMaterial);
router.delete('/:id', protect, authorize(ROLES.FACULTY, ROLES.ADMIN), deleteMaterial);

module.exports = router;
