"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import useDialog from "@/hooks/useDialog";
import IconKakao from "@/assets/icons/icon-kakao.svg";
import IconNaver from "@/assets/icons/icon-naver.svg";
import IconGoogle from "@/assets/icons/icon-google.svg";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./index.module.scss";

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "이메일을 입력해주세요" })
    .email({ message: "올바른 이메일 형식이 아닙니다." }),
  password: z
    .string()
    .nonempty({ message: "비밀번호를 입력해주세요" })
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
    }),
});

type LoginFormProps = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();

  const { alert } = useDialog();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    alert(JSON.stringify(data, null, 4));

    // TODO: API 로직 추가하기
  };

  const onError = async () => {
    await alert("아이디/비밀번호를 확인해주세요.");
  };

  const handleKakaoLogin = () => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    router.push(kakaoAuthURL);
  };

  const handleNaverLogin = () => {
    const naverAuthURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}`;
    router.push(naverAuthURL);
  };

  const handleGoogleLogin = () => {
    const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}.apps.googleusercontent.com&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
    router.push(googleAuthURL);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>로그인</h2>
      </header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <Input
            id="email"
            type="email"
            label="이메일"
            full
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
        <div>
          <Input
            id="password"
            type="password"
            label="비밀번호"
            full
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
        <div className={styles["button-container"]}>
          <Button type="submit" size="medium" full>
            로그인
          </Button>
        </div>
      </form>
      <ul className={styles["link-container"]}>
        <li>
          <Link href="/auth/id-find">아이디 찾기</Link>
        </li>
        <li>
          <Link href="/auth/pw-find">비밀번호 찾기</Link>
        </li>
      </ul>
      <div className={styles["social-container"]}>
        <h3>
          <span>소셜계정 로그인</span>
        </h3>
        <ul className={styles.social__list}>
          <li>
            <button
              type="button"
              className={`${styles.social__item} ${styles["social__item-kakao"]}`}
              aria-label="카카오 로그인"
              onClick={handleKakaoLogin}
            >
              <IconKakao width="19px" height="19px" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${styles.social__item} ${styles["social__item-naver"]}`}
              aria-label="네이버 로그인"
              onClick={handleNaverLogin}
            >
              <IconNaver width="19px" height="19px" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${styles.social__item} ${styles["social__item-google"]}`}
              aria-label="구글 로그인"
              onClick={handleGoogleLogin}
            >
              <IconGoogle width="30px" height="30px" />
            </button>
          </li>
        </ul>
      </div>

      <p className={styles["signup-text"]}>
        아직 회원가입을 안하셨다면?{" "}
        <Link href="/auth/signup">회원가입하기</Link>
      </p>
    </section>
  );
};

export default LoginForm;
