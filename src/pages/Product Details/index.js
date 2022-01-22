import styled from "styled-components"
import { useParams } from "react-router-dom"
import { allComponents } from "../../allComponents"

function ProductDetails(props) {
    const {prodId} = useParams()

	return (
		<ProductsDetailsWrapper>
			<main>
				<h1>Error</h1>
				<p>This page has not been found</p>
			</main>
		</ProductsDetailsWrapper>
	)
}

const ProductsDetailsWrapper = styled.div``


export default ProductDetails