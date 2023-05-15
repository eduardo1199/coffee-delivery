import { api } from 'lib/api'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { TypeCoffee } from 'types/productsType'

type Product = {
  id: number
  name: string
  price: number
  type: TypeCoffee[]
  description: string
}
interface ProductSummary extends Product {
  quantity: number
}

interface ProductContextProps {
  products: Product[]
  quantityOrderSummaryWithCartShopping: number
  summaryOrders: ProductSummary[]
  addProductInCartShopping: (id: number, quantity: number) => void
  incrementProductSummary: (id: number) => void
  decrementProductSummary: (id: number) => void
  onRemoveSummaryProduct: (id: number) => void
  summaryQuantityOrders: number
}

export const ProductsContext = createContext({} as ProductContextProps)

interface ProductContextProviderProps {
  children: ReactNode
}

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [summaryOrders, setSummaryOrders] = useState<ProductSummary[]>([])

  const quantityOrderSummaryWithCartShopping = summaryOrders.length

  function incrementProductSummary(id: number) {
    const existProductInSummary = summaryOrders.some(
      (product) => product.id === id,
    )

    if (existProductInSummary) {
      setSummaryOrders((state) =>
        state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          } else {
            return product
          }
        }),
      )
    }
  }

  function decrementProductSummary(id: number) {
    const existProductInSummary = summaryOrders.some(
      (product) => product.id === id,
    )

    if (existProductInSummary) {
      setSummaryOrders((state) =>
        state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          } else {
            return product
          }
        }),
      )
    }
  }

  function addProductInCartShopping(id: number, quantity: number) {
    const findProductAddSummary = products.find((product) => product.id === id)!

    const existProductInSummary = summaryOrders.some(
      (product) => product.id === id,
    )

    if (existProductInSummary) {
      setSummaryOrders((state) =>
        state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + quantity,
            }
          } else {
            return product
          }
        }),
      )
    } else {
      setSummaryOrders((state) => [
        ...state,
        { ...findProductAddSummary, quantity },
      ])
    }
  }

  function onRemoveSummaryProduct(id: number) {
    const withoutOrderProductInSummary = summaryOrders.filter(
      (product) => product.id !== id,
    )

    setSummaryOrders(withoutOrderProductInSummary)
  }

  const summaryQuantityOrders = summaryOrders.reduce((acc, product) => {
    return acc + product.quantity * product.price
  }, 0)

  useEffect(() => {
    async function getFetchProduct() {
      const products = await api.get<Product[]>('products')

      setProducts(products.data)
    }

    getFetchProduct()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        quantityOrderSummaryWithCartShopping,
        addProductInCartShopping,
        summaryOrders,
        decrementProductSummary,
        incrementProductSummary,
        summaryQuantityOrders,
        onRemoveSummaryProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
