import ManageProgress from "@/components/Campaigns/ManageProgress";
import ManageTable from "@/components/Campaigns/ManageTable";

const Page = () => {
  return (
    <>
      <h2>체험단 관리</h2>
      <ManageProgress activeIndex={0} />
      <ManageTable />
    </>
  );
};

export default Page;
