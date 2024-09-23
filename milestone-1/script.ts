    function toggleSection(sectionId: string): void {
        const section = document.getElementById(`${sectionId}-section`) as HTMLElement;
        const button = document.getElementById(`toggle-${sectionId}`) as HTMLButtonElement;

        if (section) {
            section.classList.toggle("show");

            if (section.classList.contains("show")) {
                button.textContent = "Hide";
            } else {
                button.textContent = "Show";
            }
        }
    }

    const experienceSection = document.getElementById('experience-section') as HTMLElement;
    const skillsSection = document.getElementById('skills-section') as HTMLElement;

    if (experienceSection && skillsSection) {
        experienceSection.classList.remove("show");
        skillsSection.classList.remove("show");
    }
