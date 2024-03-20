
import './App.css'
import React, { useState } from 'react'
import { marked } from 'marked'

function App() {
  const initText = "# Welcome to my React Markdown viewer! \n ## This is a sub-heading...  \n ### And here's some other cool stuff:  \n Heres some code, `<div></div>`, between 2 backticks.\n ```\n // this is multi-lin e code:\n \n function anotherExample(firstLine, lastLine) {\n   if (firstLine == '```' && lastLine == '```') {\n     return multiLineCode;\n   }\n }\n ```\n You can also make text **bold**... whoa!  \n Or _italic_. Or... wait for it... **_both!_** And feel free to go crazy ~~crossing stuff out~~.  \n There's also [links](https://www.freecodecamp.org), and  \n > Block Quotes!  \n  \n And if you want to get really crazy, even tables:  \n\nWild Header | Crazy Header | Another Header?  \n------------ | ------------- | -------------\nYour content can | be here and it | can be here.... \nAnd here. | Okay. | I think we get it. \n- And of course there are lists.  \n- Some are bulleted.  \n- With different indentation levels.  \n- That look like this.  \n1. And there are numbered lists too.\n1. Use just 1s if you want! \n\n And last but not least, let's not forget embedded images: \n\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) ";
  const [text, setText] = useState(initText)
  const onChange = (ev) => {
    if (ev) {
      setText(ev.target.value)
    }
  }

  return (
    <div className="content">
      <textarea id="editor" value={text} onChange={(ev) => onChange(ev)}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </div>
  )
}

export default App
