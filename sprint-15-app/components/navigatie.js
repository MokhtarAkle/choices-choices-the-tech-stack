import styles from '../styles/Navigatie.module.css'

export default function Navigatie() {
    return (
        <section className="styles.section-nav">
	<nav className={styles["nav-boven"]}>
		<a className={styles["nav-link1"]} href="/">iets plaatsen</a>
		<a className={styles["nav-link1"]} href="/">inloggen of registreren</a>
	</nav>

	<nav className={styles["nav-beneden"]}>
		<img
			src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png"
			alt="logo"
            className={styles.image}
            		/>
		<a className={styles["nav-link2"]} href="/">Berichten</a>
		<a className={styles["nav-link2"]} href="/">Activiteiten</a>
		<a className={styles["nav-link2"]} href="/">Over Strandeiland</a>
		<a className={styles["nav-link2"]} href="/">Planning</a>
		<a className={styles["nav-link2"]} href="/">Participatieteam</a>
		<a className={styles["nav-link2"]} href="/">Personen</a>
		<a className={styles["nav-link2"]} href="/">Organisaties</a>
		<a className="Wensen" href="/">Wensen</a>

            <div className={styles["details"]}>

            
            <summary role="button">
                <div className={styles["dropdown"]}>
                    <svg
                        width="40"
                        height="32"
                        viewBox="0 0 44 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="44" height="4" fill="" />
                        <rect y="14" width="44" height="4" fill="" />
                        <rect y="28" width="44" height="4" fill="" />
                    </svg>
                    
                </div>
            </summary>
            <ul>
                <li>
                    <a href="/">
                        Berichten
                        </a>
                </li>
                <li>
                    <a href="/">
                        Activiteiten
                        </a>
                </li>
                <li>
                    <a href="/">
                        Over Strandeiland
                        </a>
                </li>
                <li>
                    <a href="/">
                        Planning
                        </a>
                </li>
                <li>
                    <a href="/">
                        Participatieteam
                        </a>
                </li>
                <li>
                    <a href="/">
                        Personen
                        </a>
                </li>
                <li>
                    <a href="/">
                        Organisaties
                        </a>
                </li>
                <li>
                    <a href="/">
                        Wensen
                        </a>
                </li>
               
			</ul>
            </div>

	</nav>

	
</section>



    )
  }