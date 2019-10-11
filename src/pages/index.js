import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"

const IndexPage = () => (
  <div>
    <Header />
    <p>My name is Brendon</p>
    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
