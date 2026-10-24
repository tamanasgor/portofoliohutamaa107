/* =========================
   TOAST NOTIFICATIONS
========================= */

function showToast(message, icon = "fa-solid fa-circle-check") {

    const stack = document.getElementById("toastStack");
    if (!stack) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="${icon}"></i><span>${message}</span>`;

    stack.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("toast-show");
    });

    setTimeout(() => {
        toast.classList.remove("toast-show");
        toast.addEventListener("transitionend", () => toast.remove(), { once: true });
    }, 2800);

}


/* =========================
   I18N — TRANSLASI ID / ENGLISH
========================= */

const translations = {
    nav: {
        home: { id: "Beranda", en: "Home" },
        about: { id: "Tentang", en: "About" },
        skills: { id: "Keahlian", en: "Skills" },
        portfolio: { id: "Portofolio", en: "Portfolio" },
        contact: { id: "Kontak", en: "Contact" }
    },
    hero: {
        bgText: { id: "Portofolio Saya", en: "MY PORTFOLIO" },
        greeting: { id: "Halo, saya", en: "Hello, I'm" },
        eyebrowLeft: { id: "SELAMAT DATANG", en: "WELCOME" },
        bioLeft: {
            id: "Halo semuanya, selamat datang di portofolio saya. Di sini Anda dapat melihat hasil karya dan proyek yang telah saya buat.",
            en: "Hello everyone, welcome to my portfolio. Here you can see the works and projects I have created."
        },
        eyebrowRight: { id: "PERKENALAN", en: "INTRODUCTION" },
        bioRight: {
            id: "Perkenalkan, nama saya Hutama Bagas Aldhisa, siswa SMK jurusan Teknik Komputer Jaringan. Saya berharap bidang yang saya tekuni dapat terus berkembang dan bermanfaat.",
            en: "My name is Hutama Bagas Aldhisa, a vocational high school student majoring in Computer and Network Engineering. I hope the field I pursue continues to grow and proves useful."
        },
        scrollDown: { id: "GULIR KE BAWAH", en: "SCROLL DOWN" }
    },
    about: {
        label: { id: "TENTANG SAYA", en: "ABOUT ME" },
        heading: { id: "TENTANG SAYA", en: "ABOUT ME" },
        description: {
            id: "Saya adalah pribadi yang ingin terus belajar hal-hal berguna dan bermanfaat bagi banyak orang. Saya juga memiliki kemampuan dasar dalam menggambar (masih sebatas menggambar ulang) dan coding. Saya berharap dapat lebih disiplin, meskipun terkadang masih suka menunda.",
            en: "I am someone who wants to keep learning things that are useful and beneficial to many people. I also have basic skills in drawing (still limited to redrawing) and coding. I hope to become more disciplined, although I sometimes still procrastinate."
        },
        button: { id: "HUBUNGI SAYA", en: "CONTACT ME" },
        stat1: { id: "Teknologi Web", en: "Web Technologies" },
        stat2: { id: "Karya Gambar", en: "Drawings" }
    },
    skills: {
        eyebrow: { id: "KEAHLIAN & PROSES", en: "SKILLS & PROCESS" },
        heading: { id: "Dari Ide hingga Hasil", en: "From Idea to Result" },
        intro: {
            id: "Setiap proyek dikerjakan secara bertahap, mulai dari memahami kebutuhan hingga menghasilkan karya yang dapat digunakan.",
            en: "Every project is built step by step, from understanding the requirements to delivering something usable."
        },
        toolsLabel: { id: "KEAHLIAN YANG SAYA KUASAI", en: "SKILLS I HAVE" },
        tool1: { id: "HTML", en: "HTML" },
        tool2: { id: "CSS", en: "CSS" },
        tool3: { id: "JavaScript", en: "JavaScript" },
        tool4: { id: "PHP", en: "PHP" },
        tool5: { id: "Menggambar", en: "Drawing" },
        process1Title: { id: "Analisis Kebutuhan", en: "Requirements" },
        process1Desc: { id: "Memahami tujuan dan kebutuhan proyek sebelum mulai mengerjakan.", en: "Understanding the project's goals and needs before starting." },
        process2Title: { id: "Perancangan", en: "Design" },
        process2Desc: { id: "Menyusun struktur, tampilan, dan alur kerja secara terencana.", en: "Planning the structure, layout, and workflow." },
        process3Title: { id: "Pengembangan", en: "Development" },
        process3Desc: { id: "Menuliskan kode menggunakan HTML, CSS, JavaScript, dan PHP.", en: "Writing the code with HTML, CSS, JavaScript, and PHP." },
        process4Title: { id: "Pengujian", en: "Testing" },
        process4Desc: { id: "Memeriksa dan memperbaiki hasil agar berfungsi dengan baik.", en: "Checking and fixing the result so it works properly." }
    },
    portfolio: {
        eyebrow: { id: "PROYEK & KARYA", en: "PROJECTS & WORKS" },
        heading: { id: "Portofolio", en: "Portfolio" },
        smallText: { id: "Pilih karya lalu klik gambar untuk melihat detailnya.", en: "Pick a work and click the image to see its details." },
        clickExplore: { id: "Lihat detail", en: "View details" },
        viewSlider: { id: "Slider", en: "Slider" },
        viewGrid: { id: "Grid", en: "Grid" }
    },
    detail: {
        backBtn: { id: "Kembali ke Portofolio", en: "Back to Portfolio" },
        eyebrow: { id: "DETAIL KARYA", en: "WORK DETAIL" },
        messageFromArtTitle: { id: "CATATAN KARYA", en: "WORK NOTES" },
        ratingBoxTitle: { id: "BERI PENILAIAN", en: "RATE THIS WORK" },
        noRating: { id: "Belum ada penilaian", en: "No rating yet" },
        portfolioMessageLabel: { id: "Komentar atau masukan", en: "Comments or feedback" },
        commentPlaceholder: { id: "Tulis komentar atau masukan Anda...", en: "Write your comments or feedback..." },
        sendWhatsapp: { id: "Kirim via WhatsApp", en: "Send via WhatsApp" },
        sendEmail: { id: "Kirim via Gmail", en: "Send via Gmail" }
    },
    float: {
        whatsapp: { id: "Hubungi via WhatsApp", en: "Chat on WhatsApp" },
        top: { id: "Kembali ke atas", en: "Back to top" }
    },
    contactHeading: {
        part1: { id: "Mari berdiskusi", en: "Let's talk" },
        part2: { id: "dan bekerja sama.", en: "and collaborate." }
    },
    contact: {
        smallText1: { id: "KONTAK", en: "CONTACT" },
        smallText2: { id: "TERBUKA UNTUK KOLABORASI", en: "OPEN TO COLLABORATION" },
        label: { id: "PUNYA PERTANYAAN ATAU PROYEK?", en: "HAVE A QUESTION OR A PROJECT?" },
        description: { id: "Silakan isi formulir di bawah ini atau hubungi saya langsung melalui email.", en: "Please fill in the form below or contact me directly by email." },
        nameLabel: { id: "NAMA", en: "NAME" },
        emailLabel: { id: "EMAIL", en: "EMAIL" },
        messageLabel: { id: "PESAN", en: "MESSAGE" },
        namePlaceholder: { id: "Nama lengkap Anda", en: "Your full name" },
        emailPlaceholder: { id: "anda@email.com", en: "you@email.com" },
        messagePlaceholder: { id: "Tuliskan pesan atau kebutuhan proyek Anda...", en: "Write your message or project needs..." },
        sendButton: { id: "KIRIM PESAN", en: "SEND MESSAGE" }
    },
    footerHeading: {
        part1: { id: "Terima kasih", en: "Thank you" },
        part2: { id: "telah berkunjung.", en: "for visiting." }
    },
    footer: {
        brandLabel: { id: "PORTOFOLIO HUTAMA BAGAS", en: "HUTAMA BAGAS PORTFOLIO" },
        findMeOnline: { id: "TEMUKAN SAYA DI", en: "FIND ME ONLINE" },
        backToTop: { id: "KEMBALI KE ATAS ↑", en: "BACK TO TOP ↑" }
    },
    rating: {
        r1: { id: "1 / 5 — Perlu ditingkatkan", en: "1 / 5 — Needs improvement" },
        r2: { id: "2 / 5 — Cukup", en: "2 / 5 — Fair" },
        r3: { id: "3 / 5 — Baik", en: "3 / 5 — Good" },
        r4: { id: "4 / 5 — Sangat baik", en: "4 / 5 — Very good" },
        r5: { id: "5 / 5 — Istimewa", en: "5 / 5 — Excellent" }
    },
    alert: { pickRating: { id: "Pilih penilaian terlebih dahulu", en: "Please pick a rating first" } },
    toast: {
        whatsappOpened: { id: "Membuka WhatsApp…", en: "Opening WhatsApp…" },
        emailOpened: { id: "Membuka Gmail…", en: "Opening Gmail…" },
        formOpened: { id: "Membuka Gmail — periksa tab baru.", en: "Opening Gmail — check the new tab." }
    },
    whatsapp: {
        greeting: { id: "Halo Bagas,", en: "Hello Bagas," },
        sawArt: { id: "Saya telah melihat karya:", en: "I have viewed the work:" },
        myRating: { id: "Penilaian saya:", en: "My rating:" },
        message: { id: "Komentar:", en: "Comments:" }
    },
    email: {
        greeting: { id: "Halo Bagas,", en: "Hello Bagas," },
        gaveRating: { id: "Saya memberikan penilaian untuk karya:", en: "I am giving a rating for the work:" },
        ratingLabel: { id: "Penilaian:", en: "Rating:" },
        message: { id: "Komentar:", en: "Comments:" },
        sentFrom: { id: "Dikirim dari website portofolio.", en: "Sent from the portfolio website." },
        subjectPrefix: { id: "Penilaian Portofolio -", en: "Portfolio Rating -" }
    }
};

let currentLang = localStorage.getItem("site-lang") === "en" ? "en" : "id";

function t(key) {

    const parts = key.split(".");

    let node = translations;

    for (const part of parts) {

        if (!node) return "";

        node = node[part];

    }

    return node ? node[currentLang] : "";

}

function applyStaticTranslations() {

    document.querySelectorAll("[data-i18n]").forEach((el) => {

        el.textContent = t(el.getAttribute("data-i18n"));

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {

        el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));

    });

    const contactHeading = document.querySelector(".contact-content h2");

    if (contactHeading) {

        contactHeading.innerHTML =
            `${t("contactHeading.part1")}\n            <span>${t("contactHeading.part2")}</span>`;

    }

    renderMarqueeText();

    document.documentElement.lang = currentLang;

}

/* wide sideways-scrolling banner text behind the hero photo —
   just needs every duplicated item updated to the current language */
function renderMarqueeText() {

    const phrase = t("hero.bgText");

    document.querySelectorAll("[data-marquee-text]").forEach((el) => {

        el.textContent = phrase;

    });

}

function setLanguage(lang) {

    currentLang = lang;

    localStorage.setItem("site-lang", lang);

    applyStaticTranslations();

    renderFooterHeading();

    refreshProjectTexts();

    refreshDetailIfOpen();

    document.querySelectorAll(".lang-btn").forEach((btn) => {

        btn.classList.toggle("active", btn.dataset.lang === lang);

    });

    const langSwitch = document.getElementById("langSwitch");

    if (langSwitch) langSwitch.setAttribute("data-active", lang);

}

document.querySelectorAll(".lang-btn").forEach((btn) => {

    btn.addEventListener("click", () => {

        if (btn.dataset.lang !== currentLang) setLanguage(btn.dataset.lang);

    });

});

/* =========================
   ABOUT ICON SCROLL ANIMATION
========================= */

const aboutSection = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-icons");

            }

        });
    },
    {
        threshold: 0.35
    }
);

aboutObserver.observe(aboutSection);
/* =========================
   FOOTER "THANKS FOR SCROLLING" LETTER ANIMATION
   (renderFooterHeading dipanggil ulang tiap ganti bahasa)
========================= */

function renderFooterHeading() {

    const heading = document.querySelector(".footer-brand h2");

    if (!heading) return;

    heading.innerHTML =
        `${t("footerHeading.part1")}<span>${t("footerHeading.part2")}<svg class="footer-squiggle" viewBox="0 0 240 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 16 Q 20 4, 38 16 T 74 16 T 110 16 T 146 16 T 182 16 T 218 16" /></svg></span>`;

    // Pecah teks bagian pertama jadi huruf per huruf (tidak menyentuh <span>...</span>)
    const nodesToWrap = Array.from(heading.childNodes).filter(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length
    );

    let letterIndex = 0;

    nodesToWrap.forEach((textNode) => {

        const fragment = document.createDocumentFragment();

        const cleanText = textNode.textContent.trim().replace(/\s+/g, " ");

        [...cleanText].forEach((char) => {

            const letterSpan = document.createElement("span");

            letterSpan.className = "ltr";
            letterSpan.style.setProperty("--i", letterIndex);
            letterSpan.textContent = char === " " ? "\u00A0" : char;

            fragment.appendChild(letterSpan);

            letterIndex++;

        });

        textNode.parentNode.replaceChild(fragment, textNode);

    });

}

renderFooterHeading();

const footerHeadingEl = document.querySelector(".footer-brand h2");

if (footerHeadingEl) {

    const footerTextObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("thanks-animate");

                    footerTextObserver.unobserve(entry.target);

                }

            });
        },
        {
            threshold: 0.4
        }
    );

    footerTextObserver.observe(footerHeadingEl);

}
/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section-header, .portfolio-item, .projects-intro, .project-item, .contact-content, .footer-brand, .footer-social, .tools-block, .process-step, .about-center, .testimonial-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        // urutkan dulu berdasarkan posisi di layar biar cascade-nya
        // selalu jalan dari atas ke bawah, bukan acak sesuai urutan observer
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        visible.forEach((entry, i) => {

            entry.target.style.setProperty("--reveal-i", i);
            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* =========================
   CONTACT FORM -> MAILTO
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("cf-name").value.trim();
        const email = document.getElementById("cf-email").value.trim();
        const message = document.getElementById("cf-message").value.trim();

        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);

        const body = encodeURIComponent(
            `${message}\n\n— ${name} (${email})`
        );

        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=tamawkwk22@gmail.com&su=${subject}&body=${body}`, "_blank");

        showToast(t("toast.formOpened"), "fa-solid fa-paper-plane");

        contactForm.reset();

    });

}
/* ======================
   KATEGORI MENU PORTOFOLIO
====================== */

const categories = [
    { key: "all",    icon: "fa-border-all", id: "Semua",          en: "All" },
    { key: "manga",  icon: "fa-pen-nib",    id: "Sketsa & Manga", en: "Sketch & Manga" },
    { key: "poster", icon: "fa-palette",    id: "Desain Poster",  en: "Poster Design" },
    { key: "web",    icon: "fa-code",       id: "Proyek Web",     en: "Web Projects" },
    { key: "cert",   icon: "fa-award",      id: "Sertifikat",     en: "Certificates" }
];

/* semua karya (master list). `projects` di bawah = hasil filter kategori yang sedang aktif */
const allProjects = [

    /* ---------- SKETSA & MANGA ---------- */
    { category: "manga", image: "gambar1.jpg",
      id: { name: "Sketsa Kucing", description: "Halaman sketsa pensil berisi studi kucing dalam berbagai pose dan ekspresi, di atas tumpukan panel komik tinta.", message: "Menggambar hewan melatih pengamatan bentuk dasar sebelum masuk ke detail." },
      en: { name: "Cat Sketches", description: "A pencil sketch page of cat studies in different poses and expressions, laid over a pile of ink comic panels.", message: "Drawing animals trains observation of basic shapes before moving on to details." } },
    { category: "manga", image: "gambar2.jpg",
      id: { name: "Halaman Manga Tinta", description: "Halaman komik hitam-putih dengan pena tinta: dua tokoh dengan ekspresi emosional dan balon dialog tentang kata-kata \"hidup dengan baik\".", message: "Cerita disampaikan lewat tatapan mata dan arsiran, bukan penjelasan panjang." },
      en: { name: "Ink Manga Page", description: "A black-and-white ink comic page: two characters with emotional expressions and speech bubbles about the words \"live properly\".", message: "The story is told through gazes and hatching, not long explanations." } },
    { category: "manga", image: "gambar3.jpg",
      id: { name: "Studi Karakter Berkacamata", description: "Sketsa pensil seorang tokoh berkacamata yang membawa buku, dengan tulisan tangan biru di sampingnya.", message: "Detail kecil seperti kacamata dan lipatan baju mengubah kesan keseluruhan karakter." },
      en: { name: "Character Study with Glasses", description: "A pencil sketch of a character with glasses carrying a book, with blue handwriting beside it.", message: "Small details like glasses and clothing folds change the overall impression of a character." } },
    { category: "manga", image: "gbr4.jpeg",
      id: { name: "Panel Komik Close-up", description: "Tiga panel yang menyorot mata dengan seorang tokoh berpakaian gelap memegang pedang, digambar dengan pena tinta.", message: "Komposisi sinematik membuat ketegangan terasa hanya dari sorot mata." },
      en: { name: "Close-up Comic Panel", description: "Three panels focusing on eyes, with a dark-clothed character holding a sword, drawn with ink pen.", message: "A cinematic composition lets the tension be felt from the eyes alone." } },

    /* ---------- DESAIN POSTER ---------- */
    { category: "poster", image: "design5.jpg",
      id: { name: "Poster Porsche 718 Cayman", description: "Desain poster mobil dengan teks besar \"PORSCHE CAYMAN\" yang menumpuk di belakang mobil biru, lengkap dengan efek blur gerak pada latar.", message: "Teks besar di belakang objek memberi kesan kedalaman pada desain." },
      en: { name: "Porsche 718 Cayman Poster", description: "A car poster design with large \"PORSCHE CAYMAN\" text layered behind a blue car, with a motion-blur background.", message: "Large text behind the subject adds a sense of depth to the design." } },
    { category: "poster", image: "designbagas2.jpeg",
      id: { name: "Poster Islami \"Ingatlah\"", description: "Poster bertema Islami dengan nuansa hijau, menampilkan menara masjid, kaligrafi, dan kutipan QS. Al-Anfal ayat 30 beserta terjemahannya.", message: "Pemilihan warna hijau dan tipografi tebal dipakai agar pesan ayat mudah terbaca." },
      en: { name: "Islamic Poster \"Remember\"", description: "A green-toned Islamic poster featuring mosque minarets, calligraphy, and a quote of QS. Al-Anfal verse 30 with its translation.", message: "Green tones and bold typography keep the message of the verse easy to read." } },
    { category: "poster", image: "designbagas3.jpeg",
      id: { name: "Poster Idul Adha", description: "Poster ucapan \"Happy Eid al Adha Mubarak 1447H / 2026M\" dengan siluet masjid dan ilustrasi sapi serta kambing bergaya pixel art di atas padang rumput.", message: "Gaya pixel art dipadukan dengan latar hangat agar poster terasa ceria." },
      en: { name: "Eid al-Adha Poster", description: "A \"Happy Eid al Adha Mubarak 1447H / 2026M\" greeting poster with mosque silhouettes and pixel-art cow and goat illustrations on a grassy field.", message: "Pixel art paired with a warm backdrop makes the poster feel cheerful." } },

    /* ---------- PROYEK WEB ---------- */
    { category: "web", image: "web5.png",
      id: { name: "Game Kucing Pelari", description: "Game 2D berbasis web: kucing berlari, melompat dua kali, dan meluncur menghindari rintangan sambil mengumpulkan koin, lengkap dengan cuaca, nyawa, dan skor terbaik.", message: "Membuat game sederhana melatih logika JavaScript, mulai dari gerak hingga deteksi tabrakan." },
      en: { name: "Cat Runner Game", description: "A 2D web game: a cat runs, double-jumps, and slides past obstacles while collecting coins, with weather, lives, and a best score.", message: "Building a simple game trains JavaScript logic, from movement to collision detection." } },
    { category: "web", image: "web4.png",
      id: { name: "Website Portofolio Seni", description: "Website portofolio bertema gelap \"Sketch & Soul Art\" dengan latar bintang, tipografi serif elegan, menu galeri, proses, skill, dan kontak.", message: "Tema gelap dengan aksen biru dipilih agar karya gambar terasa lebih menonjol." },
      en: { name: "Art Portfolio Website", description: "A dark-themed \"Sketch & Soul Art\" portfolio website with a starry background, elegant serif typography, and gallery, process, skills, and contact menus.", message: "A dark theme with blue accents makes the artworks stand out more." } },
    { category: "web", image: "web3.png",
      id: { name: "Website Fan Page JKT48", description: "Halaman penggemar JKT48 dengan menu Main, Discography, Videos, dan Follow, menampilkan logo grup, cover diskografi, dan video.", message: "Proyek ini melatih penataan konten dan navigasi halaman dengan HTML dan CSS." },
      en: { name: "JKT48 Fan Page Website", description: "A JKT48 fan page with Main, Discography, Videos, and Follow menus, showing the group logo, discography covers, and videos.", message: "This project trains content layout and page navigation with HTML and CSS." } },

    /* ---------- SERTIFIKAT ---------- */
    { category: "cert", image: "sesrti1.jpeg",
      id: { name: "Pelatihan Korps Kadet RI 2025", description: "Sertifikat dari Kementerian Pertahanan RI (BPSDM Pertahanan) atas keikutsertaan dalam Pelatihan Korps Kadet Republik Indonesia di Gn. Salak Kopassus, 19–21 September 2025.", message: "Pengalaman yang melatih kedisiplinan dan kerja sama." },
      en: { name: "Indonesian Cadet Corps Training 2025", description: "A certificate from the Indonesian Ministry of Defense (Defense HR Development Agency) for taking part in the Indonesian Cadet Corps Training at Gn. Salak Kopassus, 19–21 September 2025.", message: "An experience that trained discipline and teamwork." } },
    { category: "cert", image: "serti.jpeg",
      id: { name: "Jaringan Komputer Dasar", description: "Sertifikat kelulusan kursus online \"Jaringan Komputer Dasar\" dari ID-Networkers (IDN.ID), dapat diverifikasi melalui lms.idn.id.", message: "Dasar jaringan penting untuk jurusan Teknik Komputer Jaringan." },
      en: { name: "Basic Computer Networking", description: "A certificate of completion for the online course \"Basic Computer Networking\" from ID-Networkers (IDN.ID), verifiable via lms.idn.id.", message: "Networking fundamentals matter for a Computer & Network Engineering major." } },
    { category: "cert", image: "serti2.jpeg",
      id: { name: "Junior Business Competition", description: "Sertifikat penghargaan sebagai peserta Junior Business Competition (Business Plan Competition) yang diselenggarakan oleh SMK Fornus.", message: "Belajar menyusun rencana bisnis dan mempresentasikan ide." },
      en: { name: "Junior Business Competition", description: "A certificate of appreciation as a participant in the Junior Business Competition (Business Plan Competition) organized by SMK Fornus.", message: "Learning to build a business plan and present an idea." } }
];

/* daftar yang sedang tampil (diisi ulang oleh applyCategory) */
const projects = allProjects.slice();

let activeCategory = "all";

function projectText(project, field) {

    return project[currentLang][field];

}



/* ======================
   SLIDER
====================== */

let currentProject = 0;


const currentImage =
document.getElementById("currentImage");

const artImageBox =
document.getElementById("artImage");

const artInfo =
document.querySelector(".art-info");

const projectName =
document.getElementById("projectName");

const projectDescription =
document.getElementById("projectDescription");

const projectNumber =
document.getElementById("projectNumber");

const charStrip =
document.getElementById("charStrip");

const ghostLeftImg =
document.getElementById("ghostLeftImg");

const ghostRightImg =
document.getElementById("ghostRightImg");


/* ======================
   BUILD CHARACTER SELECT ROSTER
====================== */

function buildRoster() {

    charStrip.innerHTML = "";

    projects.forEach((project, index) => {

        const thumb =
        document.createElement("div");

        thumb.className = "char-thumb";

        thumb.dataset.index = index;


        thumb.innerHTML = `
            <span class="thumb-index">${String(index + 1).padStart(2, "0")}</span>
            <img src="${project.image}" alt="${projectText(project, "name")}" loading="lazy">
        `;


        thumb.addEventListener("click", () => {

            if (index === currentProject) return;

            currentProject = index;

            updateProject();

        });


        charStrip.appendChild(thumb);

    });

    thumbs = document.querySelectorAll(".char-thumb");

}

let thumbs = [];

buildRoster();




function updateProject() {

    const project =
    projects[currentProject];


    /* GHOST SIDE CARDS (PREV / NEXT PREVIEW) */

    const prevIndex =
    (currentProject - 1 + projects.length) % projects.length;

    const nextIndex =
    (currentProject + 1) % projects.length;

    ghostLeftImg.src =
    projects[prevIndex].image;
    ghostLeftImg.alt =
    projectText(projects[prevIndex], "name");

    ghostRightImg.src =
    projects[nextIndex].image;
    ghostRightImg.alt =
    projectText(projects[nextIndex], "name");


    /* IMAGE TRANSITION */

    artImageBox.classList.add("switching");

    artInfo.classList.add("text-out");


    setTimeout(() => {

        currentImage.src =
        project.image;
        currentImage.alt =
        projectText(project, "name");

        currentImage.onload = () => {

            artImageBox.classList.remove("switching");

        };

    }, 220);


    setTimeout(() => {

        projectName.textContent =
        projectText(project, "name");

        projectDescription.textContent =
        projectText(project, "description");


        projectNumber.textContent =
        `${String(currentProject + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

        projectNumber.classList.remove("pop");

        void projectNumber.offsetWidth;

        projectNumber.classList.add("pop");


        artInfo.classList.remove("text-out");

    }, 220);


    /* ROSTER ACTIVE STATE */

    thumbs.forEach((thumb, index) => {

        thumb.classList.remove("active");

        if (index === currentProject) {

            thumb.classList.add("active");

            thumb.scrollIntoView({

                behavior: "smooth",

                block: "nearest",

                inline: "center"

            });

        }

    });

}


function refreshProjectTexts() {

    if (typeof refreshCategoryLabels === "function") refreshCategoryLabels();

    if (!projects[currentProject]) return;

    const project = projects[currentProject];

    if (projectName) projectName.textContent = projectText(project, "name");

    if (projectDescription) projectDescription.textContent = projectText(project, "description");

    refreshGridTexts();

}


/* ======================
   PORTFOLIO GRID GALLERY (alternate view)
====================== */

const portfolioGridView =
document.getElementById("portfolioGridView");

const portfolioSliderView =
document.getElementById("portfolioSliderView");

const portfolioViewToggle =
document.getElementById("portfolioViewToggle");

let currentPortfolioView = "slider";


function buildPortfolioGrid() {

    if (!portfolioGridView) return;

    portfolioGridView.innerHTML = "";

    projects.forEach((project, index) => {

        const item =
        document.createElement("div");

        item.className = "grid-item";
        item.style.setProperty("--gi", index);
        item.dataset.index = index;

        item.innerHTML = `
            <img src="${project.image}" alt="${projectText(project, "name")}" loading="lazy">
            <div class="grid-item-overlay">
                <span class="grid-item-name">${projectText(project, "name")}</span>
                <span class="grid-item-index">${String(index + 1).padStart(2, "0")}</span>
            </div>
        `;

        item.addEventListener("click", () => {

            currentProject = index;

            updateProject();

            openDetail();

        });

        portfolioGridView.appendChild(item);

    });

}


function refreshGridTexts() {

    if (!portfolioGridView) return;

    const items = portfolioGridView.querySelectorAll(".grid-item");

    items.forEach((item) => {

        const project = projects[Number(item.dataset.index)];

        if (!project) return;

        const nameEl = item.querySelector(".grid-item-name");

        const imgEl = item.querySelector("img");

        if (nameEl) nameEl.textContent = projectText(project, "name");

        if (imgEl) imgEl.alt = projectText(project, "name");

    });

}


function setPortfolioView(view) {

    if (view === currentPortfolioView) return;

    currentPortfolioView = view;

    if (view === "grid") {

        portfolioSliderView.style.display = "none";

        portfolioGridView.hidden = false;

        requestAnimationFrame(() => {

            portfolioGridView.classList.add("show");

        });

    } else {

        portfolioGridView.hidden = true;

        portfolioGridView.classList.remove("show");

        portfolioSliderView.style.display = "";

    }

    if (portfolioViewToggle) {

        portfolioViewToggle.querySelectorAll(".view-toggle-btn").forEach((btn) => {

            const isActive = btn.dataset.view === view;

            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-selected", isActive ? "true" : "false");

        });

    }

}


if (portfolioViewToggle) {

    buildPortfolioGrid();

    portfolioViewToggle.querySelectorAll(".view-toggle-btn").forEach((btn) => {

        btn.addEventListener("click", () => setPortfolioView(btn.dataset.view));

    });

}


/* SET INITIAL ACTIVE THUMB */

thumbs[0]?.classList.add("active");

ghostLeftImg.src = projects[projects.length - 1].image;
ghostRightImg.src = projects[1 % projects.length].image;



/* ======================
   MENU KATEGORI (filter sesuai tema karya)
====================== */

const categoryMenu =
document.getElementById("categoryMenu");

function categoryCount(key) {

    return key === "all"
        ? allProjects.length
        : allProjects.filter((p) => p.category === key).length;

}

function buildCategoryMenu() {

    if (!categoryMenu) return;

    categoryMenu.innerHTML = "";

    categories.forEach((cat) => {

        const btn =
        document.createElement("button");

        btn.type = "button";
        btn.className = "category-btn" + (cat.key === activeCategory ? " active" : "");
        btn.dataset.category = cat.key;
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", cat.key === activeCategory ? "true" : "false");

        btn.innerHTML = `
            <i class="fa-solid ${cat.icon}"></i>
            <span class="category-label">${cat[currentLang]}</span>
            <span class="category-count">${categoryCount(cat.key)}</span>
        `;

        btn.addEventListener("click", () => applyCategory(cat.key));

        categoryMenu.appendChild(btn);

    });

}

function refreshCategoryLabels() {

    if (!categoryMenu) return;

    categoryMenu.querySelectorAll(".category-btn").forEach((btn) => {

        const cat = categories.find((c) => c.key === btn.dataset.category);

        const label = btn.querySelector(".category-label");

        if (cat && label) label.textContent = cat[currentLang];

    });

}

function showCurrentProjectInstantly() {

    const project = projects[currentProject];

    if (!project) return;

    const prevIndex = (currentProject - 1 + projects.length) % projects.length;
    const nextIndex = (currentProject + 1) % projects.length;

    ghostLeftImg.src = projects[prevIndex].image;
    ghostRightImg.src = projects[nextIndex].image;

    currentImage.src = project.image;
    currentImage.alt = projectText(project, "name");

    projectName.textContent = projectText(project, "name");
    projectDescription.textContent = projectText(project, "description");

    projectNumber.textContent =
    `${String(currentProject + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

    artImageBox.classList.remove("switching");
    artInfo.classList.remove("text-out");

    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentProject);
    });

}

function applyCategory(key) {

    if (key === activeCategory) return;

    activeCategory = key;

    projects.length = 0;

    allProjects
        .filter((p) => key === "all" || p.category === key)
        .forEach((p) => projects.push(p));

    currentProject = 0;

    categoryMenu.querySelectorAll(".category-btn").forEach((btn) => {

        const isActive = btn.dataset.category === key;

        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");

    });

    buildRoster();

    buildPortfolioGrid();

    showCurrentProjectInstantly();

    charStrip.scrollTo({ left: 0 });

}

buildCategoryMenu();

/* NEXT */

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    currentProject++;

    if (currentProject >= projects.length) {

        currentProject = 0;

    }

    updateProject();

});



/* PREVIOUS */

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    currentProject--;

    if (currentProject < 0) {

        currentProject =
        projects.length - 1;

    }

    updateProject();

});



/* ======================
   3D TILT + GLARE EFFECT
====================== */

const tiltFrame =
document.querySelector(".character-select-frame");

const frameGlare =
document.getElementById("frameGlare");


if (tiltFrame) {

    tiltFrame.addEventListener("mousemove", (e) => {

        const rect =
        tiltFrame.getBoundingClientRect();

        const relX =
        (e.clientX - rect.left) / rect.width;

        const relY =
        (e.clientY - rect.top) / rect.height;

        const rotateY =
        (relX - 0.5) * 16;

        const rotateX =
        (0.5 - relY) * 16;

        tiltFrame.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        if (frameGlare) {

            frameGlare.style.setProperty(
                "--gx",
                `${relX * 100}%`
            );

            frameGlare.style.setProperty(
                "--gy",
                `${relY * 100}%`
            );

        }

    });


    tiltFrame.addEventListener("mouseleave", () => {

        tiltFrame.style.transform =
        "rotateX(0deg) rotateY(0deg)";

    });

}

const portfolioSection =
document.getElementById("portfolio");

const detailSection =
document.getElementById("detail");


document
.getElementById("artImage")
.addEventListener("click", () => {

    openDetail();

});



function openDetail() {

    const project =
    projects[currentProject];


    document.getElementById("detailImage").src =
    project.image;
    document.getElementById("detailImage").alt =
    projectText(project, "name");


    document.getElementById("detailTitle").textContent =
    projectText(project, "name");


    document.getElementById("detailDescription").textContent =
    projectText(project, "description");


    document.getElementById("artMessage").textContent =
    projectText(project, "message");


    /* RESET RATING */

    selectedRating = 0;

    stars.forEach(star => {

        star.classList.remove("active");

        star.classList.remove("fa-solid");

        star.classList.add("fa-regular");

    });


    ratingText.textContent =
    t("detail.noRating");


    document.getElementById("artComment").value = "";


    portfolioSection.style.display = "none";

    detailSection.classList.add("show");


    window.scrollTo({

        top: detailSection.offsetTop - 50,

        behavior: "smooth"

    });

}



/* ======================
   KEMBALI
====================== */

document
.getElementById("backBtn")
.addEventListener("click", () => {

    detailSection.classList.remove("show");

    portfolioSection.style.display = "block";


    window.scrollTo({

        top: portfolioSection.offsetTop - 50,

        behavior: "smooth"

    });

});



/* ======================
   RATING BINTANG
====================== */

const stars =
document.querySelectorAll("#stars i");

const ratingText =
document.getElementById("ratingText");


let selectedRating = 0;


stars.forEach(star => {

    star.addEventListener("click", () => {

        selectedRating =
        Number(star.dataset.rating);


        stars.forEach(item => {

            const rating =
            Number(item.dataset.rating);


            if (rating <= selectedRating) {

                item.classList.add("active");

                item.classList.remove("fa-regular");

                item.classList.add("fa-solid");

            }

            else {

                item.classList.remove("active");

                item.classList.remove("fa-solid");

                item.classList.add("fa-regular");

            }

        });


        ratingText.textContent = t("rating.r" + selectedRating);

    });

});



/* ======================
   KIRIM RATING WHATSAPP
====================== */

document
.getElementById("sendWhatsApp")
.addEventListener("click", () => {

    const project =
    projects[currentProject];


    const comment =
    document.getElementById("artComment").value;


    if (selectedRating === 0) {

        showToast(t("alert.pickRating"), "fa-solid fa-star-half-stroke");

        return;

    }


    /*
    GANTI NOMOR INI
    CONTOH:
    6285220245410
    */

    const phoneNumber =
    "6285220245410";


    const message =

`${t("whatsapp.greeting")}

${t("whatsapp.sawArt")}

"${projectText(project, "name")}"

${t("whatsapp.myRating")}
${selectedRating} / 5 ⭐

${t("whatsapp.message")}
${comment || "-"}`;


    const url =

    `https://wa.me/${6285220245410}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

    showToast(t("toast.whatsappOpened"), "fa-brands fa-whatsapp");

});



/* ======================
   KIRIM RATING EMAIL
====================== */

document
.getElementById("sendEmail")
.addEventListener("click", () => {

    const project =
    projects[currentProject];


    const comment =
    document.getElementById("artComment").value;


    if (selectedRating === 0) {

        showToast(t("alert.pickRating"), "fa-solid fa-star-half-stroke");

        return;

    }


    /*
    GANTI EMAIL LU DI SINI
    CONTOH:
    tamawkwk22@gmail.com
    */

    const email =
    "tamawkwk22@gmail.com";


    const subject =
    `${t("email.subjectPrefix")} ${projectText(project, "name")}`;


    const body =

`${t("email.greeting")}

${t("email.gaveRating")}

${projectText(project, "name")}

${t("email.ratingLabel")}
${selectedRating} / 5 ⭐

${t("email.message")}
${comment || "-"}


${t("email.sentFrom")}`;


    const url =

    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    window.open(
        url,
        "_blank"
    );

    showToast(t("toast.emailOpened"), "fa-solid fa-envelope");

});



/* ======================
   MOBILE HAMBURGER MENU
====================== */

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
const mobileOverlay = document.getElementById("mobileOverlay");

function closeMobileMenu() {

    hamburgerBtn.classList.remove("open");
    navLinks.classList.remove("open");
    mobileOverlay.classList.remove("show");
    hamburgerBtn.setAttribute("aria-expanded", "false");

}

if (hamburgerBtn) {

    hamburgerBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        hamburgerBtn.classList.toggle("open", isOpen);
        mobileOverlay.classList.toggle("show", isOpen);
        hamburgerBtn.setAttribute("aria-expanded", String(isOpen));

    });

    mobileOverlay.addEventListener("click", closeMobileMenu);

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", closeMobileMenu);

    });

}
/* =========================
   SCROLL PROGRESS BAR
========================= */

const scrollProgressBar = document.getElementById("scrollProgress");

function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgressBar) {

        scrollProgressBar.style.width = `${percent}%`;

    }

}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();


/* =========================
   CURSOR SPOTLIGHT
========================= */

const cursorGlow = document.getElementById("cursorGlow");

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const hasFinePointer =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (cursorGlow && hasFinePointer && !prefersReducedMotion) {

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("mousemove", (e) => {

        targetX = e.clientX;
        targetY = e.clientY;

        cursorGlow.classList.add("active");

    });

    document.addEventListener("mouseleave", () => {

        cursorGlow.classList.remove("active");

    });

    function animateCursorGlow() {

        currentX += (targetX - currentX) * 0.14;
        currentY += (targetY - currentY) * 0.14;

        cursorGlow.style.transform =
            `translate(${currentX}px, ${currentY}px)`;

        requestAnimationFrame(animateCursorGlow);

    }

    animateCursorGlow();

}


/* =========================
   MAGNETIC BUTTON GLOW
========================= */

const magneticButtons = document.querySelectorAll(".magnetic-btn");

if (hasFinePointer) {

    magneticButtons.forEach((btn) => {

        btn.addEventListener("mousemove", (e) => {

            const rect = btn.getBoundingClientRect();

            const mx = ((e.clientX - rect.left) / rect.width) * 100;
            const my = ((e.clientY - rect.top) / rect.height) * 100;

            btn.style.setProperty("--mx", `${mx}%`);
            btn.style.setProperty("--my", `${my}%`);

        });

    });

}


/* =========================
   HERO STARFIELD
========================= */

const heroStarsCanvas = document.getElementById("heroStars");

if (heroStarsCanvas && !prefersReducedMotion) {

    const ctx = heroStarsCanvas.getContext("2d");

    const heroEl = document.querySelector(".hero");

    let stars = [];

    let width = 0;
    let height = 0;

    function resizeStarfield() {

        const rect = heroEl.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        heroStarsCanvas.width = width * window.devicePixelRatio;
        heroStarsCanvas.height = height * window.devicePixelRatio;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        const starCount = Math.round((width * height) / 9000);

        stars = Array.from({ length: starCount }, () => ({

            x: Math.random() * width,
            y: Math.random() * height,

            radius: Math.random() * 1.3 + 0.3,

            baseAlpha: Math.random() * 0.5 + 0.15,

            twinkleSpeed: Math.random() * 0.015 + 0.005,

            twinklePhase: Math.random() * Math.PI * 2,

            driftY: Math.random() * 0.06 + 0.01

        }));

    }

    function drawStarfield() {

        ctx.clearRect(0, 0, width, height);

        stars.forEach((star) => {

            star.twinklePhase += star.twinkleSpeed;

            star.y -= star.driftY;

            if (star.y < -4) {

                star.y = height + 4;
                star.x = Math.random() * width;

            }

            const alpha =
                star.baseAlpha +
                Math.sin(star.twinklePhase) * star.baseAlpha * 0.6;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

            ctx.fillStyle = `rgba(74,124,89, ${Math.max(alpha, 0)})`;

            ctx.fill();

        });

        requestAnimationFrame(drawStarfield);

    }

    resizeStarfield();

    window.addEventListener("resize", resizeStarfield);

    requestAnimationFrame(drawStarfield);

}

/* =========================================================
   ⚡ FX LAYER — extra animations, transitions & micro-interactions
   Semua kode di bawah ini nambah efek baru, tanpa mengubah logic
   portfolio/slider/rating yang udah ada di atas.
========================================================= */

/* ---- PRELOADER ---- */
(function () {

    const preloader = document.getElementById("fxPreloader");
    if (!preloader) return;

    const fill = document.getElementById("fxPreloaderFill");
    const percentEl = document.getElementById("fxPreloaderPercent");

    document.body.classList.add("fx-loading");

    let progress = 0;
    let realDone = false;

    window.addEventListener("load", () => { realDone = true; });
    setTimeout(() => { realDone = true; }, 4000);

    function tick() {

        const target = realDone
            ? 100
            : Math.min(progress + (100 - progress) * 0.06 + 0.35, 92);

        progress += (target - progress) * 0.25;

        if (progress > 99.4 && realDone) progress = 100;

        if (fill) fill.style.width = `${progress}%`;
        if (percentEl) percentEl.textContent = `${Math.floor(progress)}%`;

        if (progress >= 100) {

            document.body.classList.remove("fx-loading");
            preloader.classList.add("fx-done");

            setTimeout(() => preloader.remove(), 900);

            return;

        }

        requestAnimationFrame(tick);

    }

    requestAnimationFrame(tick);

})();


/* ---- CUSTOM CURSOR ---- */
(function () {

    if (!hasFinePointer || prefersReducedMotion) return;

    const dot = document.getElementById("fxCursorDot");
    const ring = document.getElementById("fxCursorRing");

    if (!dot || !ring) return;

    document.body.classList.add("fx-cursor-on");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    let rx = mx;
    let ry = my;

    window.addEventListener("mousemove", (e) => {

        mx = e.clientX;
        my = e.clientY;

        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

        dot.classList.add("fx-show");
        ring.classList.add("fx-show");

    });

    document.addEventListener("mouseleave", () => {

        dot.classList.remove("fx-show");
        ring.classList.remove("fx-show");

    });

    function loop() {

        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;

        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

        requestAnimationFrame(loop);

    }

    loop();

    const hoverSelector =
        "a, button, .magnetic-btn, .slider-btn, .send-btn, .char-thumb, " +
        ".art-image, .floating-art, .fx-side-dot, input, textarea, .tool-chip";

    document.addEventListener("mouseover", (e) => {

        if (e.target.closest(hoverSelector)) ring.classList.add("fx-hover");

    });

    document.addEventListener("mouseout", (e) => {

        if (e.target.closest(hoverSelector)) ring.classList.remove("fx-hover");

    });

})();


/* ---- SIDE SCROLL-SPY NAV ---- */
(function () {

    const dots = document.querySelectorAll(".fx-side-dot");
    if (!dots.length) return;

    const map = {};

    dots.forEach((dot) => {

        const id = dot.getAttribute("href").slice(1);
        const section = document.getElementById(id);

        if (section) map[id] = { dot, section };

    });

    const io = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const id = entry.target.id;

                dots.forEach((d) => d.classList.remove("active"));

                if (map[id]) map[id].dot.classList.add("active");

            }

        });

    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

    Object.values(map).forEach(({ section }) => io.observe(section));

})();


/* ---- GENERIC STAGGERED REVEAL ---- */
(function () {

    const groups = [
        { sel: ".about-label, .about-center h2, .about-description, .about-btn", variant: "up" },
        { sel: ".skills-header .eyebrow, .skills-header h2, .skills-intro", variant: "up" },
        { sel: ".tool-chip", variant: "scale" },
        { sel: ".portfolio-header > div, .portfolio-small-text", variant: "left" },
        { sel: ".contact-label, .contact-content h2, .contact-description", variant: "up" },
        { sel: ".form-field", variant: "up" },
        { sel: "#detail .detail-content > *", variant: "up" }
    ];

    const allTargets = [];

    groups.forEach((group) => {

        document.querySelectorAll(group.sel).forEach((el, i) => {

            el.setAttribute("data-fx-reveal", group.variant);
            el.style.setProperty("--fx-delay", `${Math.min(i * 0.08, 0.5)}s`);

            allTargets.push(el);

        });

    });

    const io = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fx-in");
                io.unobserve(entry.target);

            }

        });

    }, { threshold: 0.15 });

    allTargets.forEach((el) => io.observe(el));

})();


/* ---- RIPPLE + MAGNETIC PULL ---- */
(function () {

    const rippleTargets = document.querySelectorAll(
        ".magnetic-btn, .slider-btn, .send-btn, .char-thumb"
    );

    rippleTargets.forEach((el) => {

        el.addEventListener("click", (e) => {

            const rect = el.getBoundingClientRect();

            const span = document.createElement("span");
            span.className = "fx-ripple";

            const size = Math.max(rect.width, rect.height) * 1.4;

            span.style.width = `${size}px`;
            span.style.height = `${size}px`;
            span.style.left = `${e.clientX - rect.left - size / 2}px`;
            span.style.top = `${e.clientY - rect.top - size / 2}px`;

            el.appendChild(span);

            span.addEventListener("animationend", () => span.remove());

        });

    });

    if (hasFinePointer && !prefersReducedMotion) {

        const magTargets = document.querySelectorAll(
            ".magnetic-btn, .slider-btn, .send-btn"
        );

        const state = new Map();

        magTargets.forEach((el) => {

            state.set(el, { tx: 0, ty: 0, targetX: 0, targetY: 0, hovered: false });

            el.addEventListener("mousemove", (e) => {

                const rect = el.getBoundingClientRect();

                const relX = e.clientX - rect.left - rect.width / 2;
                const relY = e.clientY - rect.top - rect.height / 2;

                const s = state.get(el);

                s.targetX = relX * 0.25;
                s.targetY = relY * 0.25;
                s.hovered = true;

            });

            el.addEventListener("mouseleave", () => {

                const s = state.get(el);

                s.targetX = 0;
                s.targetY = 0;
                s.hovered = false;

            });

        });

        function magLoop() {

            state.forEach((s, el) => {

                s.tx += (s.targetX - s.tx) * 0.2;
                s.ty += (s.targetY - s.ty) * 0.2;

                const scale = s.hovered ? 1.06 : 1;

                el.style.transform =
                    `translate(${s.tx.toFixed(2)}px, ${s.ty.toFixed(2)}px) scale(${scale})`;

            });

            requestAnimationFrame(magLoop);

        }

        magLoop();

    }

})();


/* ---- STAR HOVER PREVIEW + CONFETTI ON 5★ ---- */
(function () {

    const starsEls = document.querySelectorAll("#stars i");
    const box = document.querySelector(".rating-box");

    if (!starsEls.length) return;

    starsEls.forEach((star) => {

        star.addEventListener("mouseenter", () => {

            const hoverRating = Number(star.dataset.rating);

            starsEls.forEach((s) => {

                const r = Number(s.dataset.rating);

                s.classList.toggle(
                    "fx-preview",
                    r <= hoverRating && !s.classList.contains("active")
                );

            });

        });

        star.addEventListener("mouseleave", () => {

            starsEls.forEach((s) => s.classList.remove("fx-preview"));

        });

        star.addEventListener("click", () => {

            const r = Number(star.dataset.rating);

            if (r === 5 && box) burstConfetti(box);

        });

    });

    function burstConfetti(container) {

        if (prefersReducedMotion) return;

        const colors = ["#7fb685", "#4a7c59", "#7fb685", "#2d5a3d"];

        for (let i = 0; i < 20; i++) {

            const p = document.createElement("span");
            p.className = "fx-confetti";

            const angle = Math.random() * Math.PI * 2;
            const dist = 60 + Math.random() * 90;

            p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
            p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);

            p.style.left = "50%";
            p.style.top = "18px";
            p.style.background = colors[i % colors.length];

            container.appendChild(p);

            p.addEventListener("animationend", () => p.remove());

        }

    }

})();


/* ---- TEXT SCRAMBLE ON SCROLL-IN ---- */
(function () {

    if (prefersReducedMotion) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ✦•";
    const targets = document.querySelectorAll(".intro-eyebrow, .small-title");

    if (!targets.length) return;

    function scramble(el) {

        const original = el.textContent;
        const len = original.length;

        let frame = 0;
        const totalFrames = 14;

        const interval = setInterval(() => {

            frame++;

            let out = "";

            for (let i = 0; i < len; i++) {

                if (i < (frame / totalFrames) * len) {

                    out += original[i];

                } else if (original[i] === " ") {

                    out += " ";

                } else {

                    out += chars[Math.floor(Math.random() * chars.length)];

                }

            }

            el.textContent = out;

            if (frame >= totalFrames) {

                el.textContent = original;
                clearInterval(interval);

            }

        }, 28);

    }

    const io = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                scramble(entry.target);
                io.unobserve(entry.target);

            }

        });

    }, { threshold: 0.6 });

    targets.forEach((el) => io.observe(el));

})();


/* ---- CURTAIN WIPE ON DETAIL OPEN/CLOSE ---- */
(function () {

    const curtain = document.getElementById("fxCurtain");
    if (!curtain) return;

    function playCurtain() {

        curtain.classList.remove("fx-play");
        void curtain.offsetWidth;
        curtain.classList.add("fx-play");

    }

    const artImage = document.getElementById("artImage");
    const backBtn = document.getElementById("backBtn");

    if (artImage) artImage.addEventListener("click", playCurtain);
    if (backBtn) backBtn.addEventListener("click", playCurtain);

})();

/* =========================
   I18N — REFRESH DETAIL VIEW SAAT GANTI BAHASA
========================= */

function refreshDetailIfOpen() {

    if (!detailSection || !detailSection.classList.contains("show")) return;

    if (!projects[currentProject]) return;

    const project = projects[currentProject];

    document.getElementById("detailTitle").textContent = projectText(project, "name");

    document.getElementById("detailDescription").textContent = projectText(project, "description");

    document.getElementById("artMessage").textContent = projectText(project, "message");

    ratingText.textContent =
        selectedRating > 0 ? t("rating.r" + selectedRating) : t("detail.noRating");

}


/* =========================
   I18N — SET BAHASA AWAL
========================= */

setLanguage(currentLang);
/* =========================
   DARK / LIGHT MODE TOGGLE
========================= */

(function themeInit() {

    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("site-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || "dark"; // default: Gotham night, matches the wallpaper

    if (initialTheme === "dark") root.setAttribute("data-theme", "dark");

    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {

        const isDark = root.getAttribute("data-theme") === "dark";

        if (isDark) {
            root.removeAttribute("data-theme");
            localStorage.setItem("site-theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("site-theme", "dark");
        }

    });

})();


/* =========================
   ANIMATED WALLPAPER TOGGLE (VIDEO BACKGROUND IN HERO)
========================= */

(function wallpaperInit() {

    const wallpaperToggle = document.getElementById("wallpaperToggle");
    const heroEl = document.querySelector(".hero");
    const heroVideo = document.getElementById("heroVideoBg");

    if (!wallpaperToggle || !heroEl || !heroVideo) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function playVideo() {
        // load the source lazily (preload="none") only once it's actually needed
        if (heroVideo.getAttribute("preload") === "none") {
            heroVideo.setAttribute("preload", "auto");
            heroVideo.load();
        }
        const playPromise = heroVideo.play();
        if (playPromise && playPromise.catch) {
            playPromise.catch(() => { /* autoplay blocked — video stays paused, static bg still shows */ });
        }
    }

    function setWallpaper(active) {

        heroEl.classList.toggle("wallpaper-active", active);
        wallpaperToggle.setAttribute("aria-pressed", active ? "true" : "false");

        if (active) {
            playVideo();
        } else {
            heroVideo.pause();
        }

        localStorage.setItem("site-wallpaper", active ? "video" : "static");

    }

    const savedWallpaper = localStorage.getItem("site-wallpaper");
    if (savedWallpaper === "video" && !prefersReducedMotion) {
        setWallpaper(true);
    }

    wallpaperToggle.addEventListener("click", () => {
        const isActive = heroEl.classList.contains("wallpaper-active");
        setWallpaper(!isActive);
    });

})();


/* =========================
   ABOUT STATS COUNTER
========================= */

(function statsCounterInit() {

    const statsStrip = document.getElementById("statsStrip");

    if (!statsStrip) return;

    let hasCounted = false;

    function runCounters() {

        if (hasCounted) return;
        hasCounted = true;

        statsStrip.querySelectorAll(".stat-number").forEach((el) => {

            const target = parseInt(el.getAttribute("data-count"), 10) || 0;
            const duration = 1400;
            const startTime = performance.now();

            function tick(now) {

                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                el.textContent = Math.round(eased * target);

                if (progress < 1) requestAnimationFrame(tick);

            }

            requestAnimationFrame(tick);

        });

    }

    const statsObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) runCounters();

            });

        },
        { threshold: 0.4 }
    );

    statsObserver.observe(statsStrip);

})();


/* =========================
   FLOATING QUICK ACTIONS
========================= */

(function floatActionsInit() {

    const floatTopBtn = document.getElementById("floatTopBtn");

    if (!floatTopBtn) return;

    window.addEventListener("scroll", () => {

        floatTopBtn.classList.toggle("show", window.scrollY > 500);

    });

    floatTopBtn.addEventListener("click", () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    });

})();