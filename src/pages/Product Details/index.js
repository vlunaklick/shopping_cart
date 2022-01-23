import styled from "styled-components"
import { useParams } from "react-router-dom"
import { allComponents } from "../../allComponents"

function ProductDetails(props) {
    const { prodId } = useParams()

    let targetShow = allComponents.filter(item => item.id === prodId)

	return (
		<ProductsDetailsWrapper>
            <div className='wrapper-info'>
                <div className='target-top-part'>
                    <img src={targetShow[0].image} alt='' />
                </div>
                <div className='wrapper-stats'>
                    <h3>{targetShow[0].nameU}</h3>
                    <h4>${targetShow[0].price}</h4>
                    <div className='target-bottom-part-btn'>
                            <div
                                className='target-bottom-part-btn-left'
                                onClick={() => props.restar(targetShow[0].nameU)}>
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    data-prefix='fas'
                                    data-icon='minus'
                                    className='svg-inline--fa fa-minus fa-w-14 svgBtn'
                                    role='img'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 448 512'>
                                    <path
                                        fill='currentColor'
                                        d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
                                </svg>
                            </div>
                            <div
                                className='target-bottom-part-btn-rigth'
                                onClick={() => props.sumar(targetShow[0].nameU)}>
                                <svg
                                    aria-hidden='true'
                                    focusable='false'
                                    data-prefix='fas'
                                    data-icon='plus'
                                    className='svg-inline--fa fa-plus fa-w-14 svgBtn'
                                    role='img'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 448 512'>
                                    <path
                                        fill='currentColor'
                                        d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
		</ProductsDetailsWrapper>
	)
}

const ProductsDetailsWrapper = styled.div`
    background-color: ${({theme})=> theme.shop.bgColor};
	min-height: calc(100vh - 3.3613rem);
	display: flex;
	justify-content: center;
	align-items: center;
    gap: 1rem;
	transition: background-color .5s ease-in;

    .target-top-part {
		width: 25rem;
		height: 25rem;
		background-color: ${({ theme }) => theme.target.targetTopBg};
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.5s ease-in;
		border-top-left-radius: 0.15rem;
		border-top-right-radius: 0.15rem;
	}
	img {
		width: 95%;
		height: 95%;
		object-fit: cover;
		transition: 0.5s;
	}

    .wrapper-info{
        box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1) , 0px 1px 2px 0px rgba(0,0,0,0.06) ;
        border-radius: .5rem;
        padding: 1rem;
        display:flex;
        gap: 1rem;
        background-color: ${({ theme }) => theme.target.targetBottomBg};
        transition: background-color .5s ease-in;
    }

	h4,
	h3 {
        text-align: right;
		color: ${({theme})=> theme.shop.navColor};
		transition: color .5s ease-in;
	}

	h3 {
		font-size: 3.2rem;
	}

	h4 {
		font-size: 2rem;
	}

    .wrapper-stats{
        display: flex;
        flex-direction: column;
        width: 28rem;
    }

    .target-bottom-part {
		width: 17.5rem;
		height: 4.25rem;
		background-color: ${({ theme }) => theme.target.targetBottomBg};
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.5s ease-in;
	}
	.target-bottom-part-btn {
		display: flex;
        margin: auto 0 0 auto;
	}
    .target-bottom-part-btn-rigth{
        border-bottom-right-radius: 0.313rem;
		border-top-right-radius: 0.313rem;
    }
    .target-bottom-part-btn-left{
        border-bottom-left-radius: 0.313rem;
		border-top-left-radius: 0.313rem;
    }
	.target-bottom-part-btn-rigth,
	.target-bottom-part-btn-left {
		display: flex;
		justify-content: center;
		align-items: center;
        width: 6.25rem;
		height: 3.9413rem;
        background-color: ${({ theme }) => theme.target.targetBottomButton};
		cursor: pointer;
		transition: background-color 0.5s ease-in;
	}
	.target-bottom-part-btn-rigth:hover,
	.target-bottom-part-btn-left:hover {
		background-color: ${({ theme }) => theme.target.targetBootomButtonHover};
		transition: background-color 0.5s ease-in;
	}
	svg {
		width: 0.875rem;
		color: ${({ theme }) => theme.target.svgColor};
		transition: color 0.5s ease-in;
	}

	@media (max-width: 949px){
		min-height: calc(100vh - 3.0625rem);
        justify-content: normal;
        flex-direction: column;
        padding: 1rem;

        .target-top-part{
            width: 19.4375rem;
		    height: 19.4375rem;
        }

        .target-bottom-part-btn{
            margin: 1rem auto 0 auto;
        }

        .target-bottom-part-btn-rigth,
	    .target-bottom-part-btn-left{
            width: 76px;
		    height: 42px;
        }
        .wrapper-info{
            flex-direction: column;
            gap: 0.3rem;
            padding: 0.7rem;
        }

        .wrapper-stats{
            width: auto;
        }

        h3, h4{
            text-align: left
        }

        h3 {
		    font-size: 1.6rem;
	    }

        h4 {
            font-size: 1.2rem;
        }

	}`


export default ProductDetails