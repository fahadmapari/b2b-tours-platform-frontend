import ProductPage from "@/components/product/ProductPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <ProductPage />;
};

export default Page;
