import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <div className={styles.img}>
          <img
            src="https://github.com/han0224/portfolio/assets/70616579/0bce6111-c2ac-4d53-90c9-fd9a9d3ef27e"
            alt="증명사진"
          />
        </div>
        <div className={styles["default-info"]}>
          <div>
            <span>이름</span>
            <p>한윤서</p>
          </div>
          <div>
            <span>생년월일</span>
            <p>2000.02.24</p>
          </div>
          <div>
            <span>email</span>
            <p>
              <a href="mailto:dbn0224@gmail.com">dbn0224@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <div className={styles.education}>
            <h2>교육</h2>
            <div className={styles.box}>
              <div className={styles.date}>
                <span>2023.04 ~ </span>
                <span>2023.09</span>
              </div>
              <div>
                <p>우리FIS아카데미</p>
                <span>클라우드 서비스 개발</span>
              </div>
            </div>
          </div>
          <div className={styles.school}>
            <h2>학력</h2>
            <div className={styles.box}>
              <div className={styles.date}>
                <span>2021.03 ~ </span>
                <span>2024.02</span>
              </div>
              <div>
                <p>한국공학대학교 졸업예정</p>
                <span>컴퓨터공학과</span>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.date}>
                <span>2019.03 ~ </span>
                <span>2021.02</span>
              </div>
              <div>
                <p>호서대학교 중퇴</p>
                <span>게임애니메이션융합학부</span>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.date}>
                <span>2016.03 ~ </span>
                <span>2019.02</span>
              </div>
              <div>
                <p>천안여자고등학교 졸업</p>
              </div>
            </div>
          </div>
          <div className={styles.awards}>
            <h2>수상</h2>
            <div className={styles.box}>
              <div className={styles.date}>
                <span>2022.12</span>
              </div>
              <div>
                <p>한이음 ICT 멘토링 - 장려상</p>
                <span>
                  아마추어 테니스 경기 분석 어플리케이션 - 프론트엔드 담당
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
