const Material = require('../models/Material');
const Faculty = require('../models/Faculty');
const Student = require('../models/Student');

exports.getMaterials = async (req, res, next) => {
  try {
    const { course, subject, semester } = req.query;
    const query = {};
    if (req.user.role === 'student') {
      const student = await Student.findOne({ userId: req.user._id }).select('course semester');
      if (!student) return res.status(200).json({ success: true, data: [] });
      query.course = student.course;
      query.semester = student.semester;
    }
    if (course) query.course = course;
    if (subject) query.subject = subject;
    if (semester) query.semester = Number(semester);
    const materials = await Material.find(query)
      .populate('course subject faculty')
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: materials });
  } catch (error) { next(error); }
};

exports.createMaterial = async (req, res, next) => {
  try {
    const { title, description, course, subject, semester } = req.body;
    if (!req.file || !title || !course || !subject || !semester) {
      return res.status(422).json({ success: false, message: 'Title, course, subject, semester, and a file are required' });
    }
    const faculty = await Faculty.findOne({ userId: req.user._id }).select('_id');
    if (!faculty) return res.status(422).json({ success: false, message: 'No faculty profile is linked to this account' });
    const material = await Material.create({
      title, description, course, subject, semester: Number(semester), faculty: faculty._id,
      fileUrl: `/uploads/materials/${req.file.filename}`, fileName: req.file.originalname,
      mimeType: req.file.mimetype, size: req.file.size,
    });
    res.status(201).json({ success: true, message: 'Material uploaded successfully', data: await material.populate('course subject faculty') });
  } catch (error) { next(error); }
};

exports.deleteMaterial = async (req, res, next) => {
  try {
    const material = await Material.findByIdAndDelete(req.params.id);
    if (!material) return res.status(404).json({ success: false, message: 'Material not found' });
    res.status(200).json({ success: true, message: 'Material deleted successfully' });
  } catch (error) { next(error); }
};
