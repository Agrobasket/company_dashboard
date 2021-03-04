import React, {useEffect} from "react"
import { navigate } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
	   navigate("/loginPage");
	}, []);
  return (
  	<div>
   	 <SEO title="Home" />
 	  </div>
  )
}

export default IndexPage
