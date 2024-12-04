import styles from "./resume.module.css"; // Scoped CSS for Resume page

export default function Resume() {
  return (
    <main>
      <h1 className={styles.pageTitle}>Resume</h1>
      <div className={styles.resumeImage}>
        <a href="/jonathanlauresume.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/resumesc.png" alt="Jonathan Lau's Resume" className={styles.image} />
        </a>
      </div>
    </main>
  );
}
