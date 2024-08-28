import ms from "@/utils/modifierSelector";
import IconRecruit from "@/assets/icons/icon-recruit.svg";
import IconRecruitFinish from "@/assets/icons/icon-recruit-finish.svg";
import IconReview from "@/assets/icons/icon-review.svg";
import IconReviewFinish from "@/assets/icons/icon-review-finish.svg";
import IconDirectionRight from "@/assets/icons/icon-direction-right.svg";
import styles from "./index.module.scss";

const PROGRESS_STEPS: {
  icon: () => React.ReactNode;
  text: string;
}[] = [
  {
    icon: () => <IconRecruit viewBox="0 0 60 60 " />,
    text: "모집중",
  },
  {
    icon: () => <IconRecruitFinish viewBox="0 0 60 60 " />,
    text: "모집종료",
  },
  {
    icon: () => <IconReview viewBox="0 0 60 60 " />,
    text: "체험&리뷰",
  },
  {
    icon: () => <IconReviewFinish viewBox="0 0 60 60 " />,
    text: "리뷰마감",
  },
];

interface ManageProgressProps {
  activeIndex: number;
}

const icon = ms(styles, "bar__icon");
const text = ms(styles, "caption__text");

const ManageProgress = ({ activeIndex }: ManageProgressProps) => {
  return (
    <article className={styles.progress}>
      <ul className={styles.bar}>
        {PROGRESS_STEPS.map((step, index) => (
          <>
            <li>
              <figure
                className={activeIndex === index ? icon("--active") : icon()}
              >
                {step.icon()}
              </figure>
            </li>
            {index !== PROGRESS_STEPS.length - 1 && (
              <li>
                <figure className={styles.bar__arrow}>
                  <IconDirectionRight viewBox="0 0 24 24" />
                </figure>
              </li>
            )}
          </>
        ))}
      </ul>
      <ul className={styles.caption}>
        {PROGRESS_STEPS.map((step, index) => (
          <li key={step.text}>
            <p className={activeIndex === index ? text("--active") : text()}>
              {step.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ManageProgress;
