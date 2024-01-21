interface ProductState {
  productData: ProductData | null;
  loading: boolean;
  error: string | null | undefined;
}

interface Review {
  customer: string;
  review: string;
  score: number;
}

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface ProductData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: SalesData[];
}

interface RetailSalesProps {
  salesData: SalesData[];
}

export { Review, SalesData, ProductData, ProductState, RetailSalesProps };

export type RootState = {
  product: ProductState;
};
