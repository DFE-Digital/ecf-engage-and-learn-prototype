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

router.post('/it4/create-username', function (req, res) {
  const email = req.session.data['email']

  if (email === "error") {
    res.redirect('/it4/sign-in-error')

  } else {
    res.redirect('/it4/create-username')
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
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/it4/guidance')
  } else {
    res.redirect('/it4/home')
  }
})

router.post('/dev/home', function(req, res) {
  const email = req.session.data['email']

  if (email === "error") {
    res.redirect('/dev/sign-in-error')
  } else if (!email) {
    res.redirect('/dev/sign-in-error-none')
  } else if (email === "format") {
    res.redirect('/dev/sign-in-error-format')
  } else {
    res.redirect('/dev/home')
  }
})

router.post('/finish-session-answer-dev', function (req, res) {
  const finishSession = req.session.data['finish-session']

  if (finishSession === "yes") {
    res.redirect('/dev/lesson-list-complete')
  } else if (finishSession === "discussion") {
    res.redirect('/dev/lesson-list-todo')
  } else if (!finishSession) {
    res.redirect('/dev/lesson-error')
  } else {
    res.redirect('/dev/lesson-list-inprogress')
  }
})

router.post('/guidance-question-answer-dev', function (req, res) {
  const readGuidance = req.session.data['read-guidance']

  if (readGuidance === "yes") {
    res.redirect('/dev/guidance')
  } else {
    res.redirect('/dev/home')
  }
})

module.exports = router
