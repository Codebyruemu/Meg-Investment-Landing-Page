import RoutePlaceholder from '@/components/common/RoutePlaceholder';

interface PlanDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PlanDetailPage({ params }: PlanDetailProps) {
  const resolvedParams = await params;
  return (
    <RoutePlaceholder 
      title={`Plan Details: ${resolvedParams.slug}`} 
      code="L-04 · Not Implemented" 
      description="Plan offering details and prospectus screen scheduled for future implementation milestone." 
    />
  );
}
