
router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json([
      {
        id: '1',
        name: 'Run 2018 NYC marathon'
        },
      },
      {
        id: '2',
        name: 'Build LifeSmack'
        },
      },
    ]);
  }, 1500);
});

module.exports = router;
