
import './App.css'
import React, { useState } from 'react'
import { Editor } from './components/Editor'
import { Preview } from './components/Preview'
import { marked } from 'marked'

function App() {
  const [text, setText] = useState('')


  return (
    <>
      <Editor setText={setText}></Editor>
      <Preview text={marked.parse(text)}></Preview>
    </>
  )
}

export default App
