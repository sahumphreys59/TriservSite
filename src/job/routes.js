const Router = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getJobs);
router.post('/', controller.addJob);

router.get('/:id', controller.getJobById);
router.put('/:id', controller.updateJob);
router.delete('/:id', controller.removeJob);


module.exports = router;