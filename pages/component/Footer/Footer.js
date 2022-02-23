import styles from './Footer.module.scss';

export default function footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.title}>Alphodo</div>
            <div className={styles.linkGroup}>
                <div className={styles.linkColumn}>
                    <div>현장관리 시스템</div>
                    <div onClick={() => router.push('/spot/timeline')}>
                        내 현장 타임라인
                    </div>
                    <div onClick={() => router.push('/spot/info')}>내 현장 정보</div>

                <div className={styles.linkColumn}>
                    <div>서비스 정보</div>
                    <div>이용약관</div>
                    <div>오픈소스 라이선스</div>
                    <div>v1.0.9</div>
                </div>
            </div>
            </div>
        </div>
    );
}
