const express = require('express')
const router = express.Router()


router.post('/finish-session-answer', function (req, res) {
  const finishSession = req.session.data['finish-session']

  if (finishSession === "yes") {
    res.redirect('/it3/lesson-list-complete')
  } else if (finishSession === "discussion") {
    res.redirect('/it3/lesson-list-discussion')
  } else {
    res.redirect('/it3/lesson-list')
  }
})

router.post('/it4/prefer-name-2', function (req, res) {
  const email = req.session.data['email']

  if (email == "error") {
    res.redirect('/it4/sign-in-error')
  } else {
    res.redirect('/it4/prefer-name-2')
  }
})

router.post('/finish-session-answer-it4', function (req, res) {
  const finishSession = req.session.data['finish-session']

  if (finishSession === "yes") {
    res.redirect('/it4/lesson-list-complete')
  } else if (finishSession === "discussion") {
    res.redirect('/it4/lesson-list-todo')
  } else {
    res.redirect('/it4/lesson-list-inprogress')
  }
})

router.post('/guidance-question-answer', function (req, res) {
  const finishSession = req.session.data['read-guidance']

  if (finishSession === "yes") {
    res.redirect('/it4/guidance')
  } else {
    res.redirect('/it4/home')
  }
})

module.exports = router
