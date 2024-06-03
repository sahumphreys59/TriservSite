const Router = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEvents);
router.post('/', controller.addEvent);

router.get('/:id', controller.getEventsById);
router.put('/:id', controller.updateEvent);
router.delete('/:id', controller.removeEvent);

module.exports = router;