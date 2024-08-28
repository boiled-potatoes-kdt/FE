import IconRecruit from "@/assets/icons/icon-recruit.svg";
import IconRecruitFinish from "@/assets/icons/icon-recruit-finish.svg";
import IconReview from "@/assets/icons/icon-review.svg";
import IconReviewFinish from "@/assets/icons/icon-review-finish.svg";
import IconDirectionRight from "@/assets/icons/icon-direction-right.svg";

const PROGRESS_STEPS: { icon: () => React.ReactNode; text: string }[] = [
  { icon: () => <IconRecruit />, text: "모집 중" },
  { icon: () => <IconRecruitFinish />, text: "모집종료" },
  { icon: () => <IconReview />, text: "체험&리뷰" },
  { icon: () => <IconReviewFinish />, text: "리뷰마감" },
];

interface ManageProgressProps {
  activeIndex: number;
}

const ManageProgress = ({ activeIndex }: ManageProgressProps) => {
  return (
    <article>
      {PROGRESS_STEPS.map((step, index) => (
        <>
          <figure>
            {step.icon()}
            <figcaption>{step.text}</figcaption>
          </figure>
          {index !== PROGRESS_STEPS.length && <IconDirectionRight />}
        </>
      ))}
    </article>
  );
};

export default ManageProgress;
