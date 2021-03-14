import React, { useEffect } from "react"
import IndexComponent from "../components/indexComponent"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <IndexComponent></IndexComponent>
    </div>
  )
}

export default IndexPage
