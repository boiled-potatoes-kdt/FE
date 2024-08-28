import ManageProgress from "@/components/Campaign/ManageProgress";

const Page = () => {
  return (
    <h2>
      체험단 관리
      <ManageProgress activeIndex={0} />
    </h2>
  );
};

export default Page;
