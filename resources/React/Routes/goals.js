const router = require('express').Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json([
      {
        id: '1',
        name: 'Run 2018 NYC marathon',
        members: {
          owner: { id: '1', name: 'Lindsey' },
        },
      },
      {
        id: '2',
        name: 'Build LifeSmack',
        members: {
          owner: { id: '1', name: 'Lindsey' },
        },
      },
    ]);
  }, 1500);
});

module.exports = router;
