import fotoKepsek from "../assets/images/Kepsek.png";
import fotoKaprogMM from "../assets/images/majors/mm/kaprog.jpg";
import fotoKaprogRPL from "../assets/images/majors/rpl/kaprog.jpg";
import fotoKaprogTKJ from "../assets/images/majors/tkj/kaprog.jpg";
import fotoKaprogPKM from "../assets/images/majors/pkm/kaprog.jpg";
import fotoKaprogTOI from "../assets/images/majors/toi/kaprog.jpg";

export type Education = {
    level: string;  // jenjang, contoh: "S1", "S2", "D3"
    field: string;  // program studi, contoh: "Pendidikan Matematika"
    school: string; // nama kampus
    year: number;   // tahun lulus
};

export type Teacher = {
    id: string;     // dipakai di URL halaman profil: /profil-guru/ahmad-fauzi
    name: string;   // lengkap dengan gelar, contoh: "Drs. Ahmad Fauzi, M.Pd."
    role: string;   // jabatan atau mata pelajaran yang diampu
    major?: string; // kode jurusan (lihat data/majors.ts), kosongkan untuk guru mapel umum
    image?: string; // foto potret 4:5, contoh: import fotoBudi from "../assets/images/guru/budi.jpg"

    // Isi halaman profil guru. Semuanya boleh dikosongkan, bagian yang kosong tidak ditampilkan
    since?: number;            // tahun mulai mengajar di sekolah ini
    quote?: string;            // pesan singkat untuk siswa, tampil sebagai kutipan
    bio?: string[];            // paragraf "Profil Singkat"
    subjects?: string[];       // mata pelajaran / bidang yang diampu
    education?: Education[];   // riwayat pendidikan, urutkan dari yang terbaru
    certifications?: string[]; // sertifikasi & pelatihan
};

// TODO: ganti dengan nama, jabatan, foto, & isi profil asli guru
// Pimpinan pertama (kepala sekolah) tampil paling atas di bagan, sisanya (maks. 4) berjajar di bawahnya
export const leaders: Teacher[] = [
    {
        id: "ahmad-fauzi",
        name: "Drs. Ahmad Fauzi, M.Pd.",
        role: "Kepala Sekolah",
        image: fotoKepsek,
        since: 2018,
        quote: "Keterampilan membuka pintu kerja, karakter yang membuat kalian dipercaya.",
        bio: [
            "Memimpin SMK Plus Pelita Nusantara sejak sekolah berdiri pada 2018. Sebelumnya beliau mengajar dan menjabat wakil kepala sekolah di beberapa SMK di Kabupaten Bogor selama lebih dari lima belas tahun.",
            "Di bawah kepemimpinannya, sekolah meraih akreditasi A, membuka lima kompetensi keahlian, dan menjalin kerja sama dengan lebih dari seratus mitra industri untuk PKL dan penyaluran kerja lulusan.",
        ],
        subjects: ["Manajemen Sekolah", "Kemitraan Industri", "Pembinaan Karakter"],
        education: [
            { level: "S2", field: "Manajemen Pendidikan", school: "Universitas Negeri Jakarta", year: 2006 },
            { level: "S1", field: "Pendidikan Teknik Elektro", school: "IKIP Jakarta", year: 1996 },
        ],
        certifications: ["Sertifikat Pendidik", "Diklat Calon Kepala Sekolah (LPPKS)", "Asesor Akreditasi BAN-PDM"],
    },
    {
        id: "euis-kurniasih",
        name: "Hj. Euis Kurniasih, M.Pd.",
        role: "Wakasek Bidang Kurikulum",
        since: 2018,
        quote: "Belajar itu bukan soal cepat, tapi soal tidak berhenti.",
        bio: [
            "Menyusun kurikulum operasional sekolah dan menyelaraskannya dengan kebutuhan dunia usaha dan industri bersama para kepala program. Beliau juga mengoordinasikan asesmen dan uji kompetensi keahlian setiap tahun.",
        ],
        subjects: ["Kurikulum Merdeka", "Asesmen Pembelajaran", "Bahasa Indonesia"],
        education: [
            { level: "S2", field: "Pengembangan Kurikulum", school: "Universitas Pendidikan Indonesia", year: 2012 },
            { level: "S1", field: "Pendidikan Bahasa Indonesia", school: "Universitas Pakuan", year: 2004 },
        ],
        certifications: ["Sertifikat Pendidik", "Fasilitator Kurikulum Merdeka"],
    },
    {
        id: "dadang-kurnia",
        name: "Dadang Kurnia, S.Pd.",
        role: "Wakasek Bidang Kesiswaan",
        since: 2018,
        quote: "Disiplin kecil setiap hari lebih kuat dari semangat besar sesekali.",
        bio: [
            "Membina OSIS, ekstrakurikuler, dan program pembiasaan karakter. Beliau juga menjadi penghubung utama sekolah dengan orang tua untuk urusan kedisiplinan dan perkembangan siswa.",
        ],
        subjects: ["Pembinaan OSIS", "Ekstrakurikuler", "PJOK"],
        education: [
            { level: "S1", field: "Pendidikan Jasmani", school: "Universitas Negeri Jakarta", year: 2009 },
        ],
        certifications: ["Sertifikat Pendidik", "Pembina Pramuka Mahir Lanjutan"],
    },
    {
        id: "bambang-hermawan",
        name: "Ir. Bambang Hermawan",
        role: "Wakasek Bidang Sarana Prasarana",
        since: 2019,
        quote: "Alat yang dirawat dengan baik akan mengajari banyak angkatan.",
        bio: [
            "Bertanggung jawab atas pengadaan dan perawatan ruang praktik, laboratorium, serta seluruh fasilitas sekolah. Pengalamannya belasan tahun di industri manufaktur membantu menjaga peralatan praktik tetap setara standar industri.",
        ],
        subjects: ["Manajemen Sarana Prasarana", "K3 Ruang Praktik", "Teknik Mesin"],
        education: [
            { level: "S1", field: "Teknik Mesin", school: "Institut Pertanian Bogor", year: 1998 },
        ],
        certifications: ["Ahli K3 Umum (Kemnaker)", "Manajemen Aset Sekolah"],
    },
    {
        id: "wulan-sari",
        name: "Wulan Sari, S.E., M.M.",
        role: "Wakasek Bidang Hubungan Industri",
        since: 2018,
        quote: "Mitra industri percaya pada sekolah karena alumninya bekerja dengan baik.",
        bio: [
            "Mengelola kerja sama dengan mitra industri, penempatan PKL, serta Bursa Kerja Khusus (BKK). Beliau memastikan setiap siswa mendapat tempat PKL yang sesuai dengan kompetensi keahliannya.",
        ],
        subjects: ["Kemitraan Industri", "Bursa Kerja Khusus", "Projek Kreatif & Kewirausahaan"],
        education: [
            { level: "S2", field: "Manajemen", school: "Universitas Pakuan", year: 2014 },
            { level: "S1", field: "Manajemen", school: "Universitas Pakuan", year: 2008 },
        ],
        certifications: ["Sertifikat Pendidik", "Pengelola BKK (Disnaker Jawa Barat)"],
    },
];

export const teachers: Teacher[] = [
    // Mata pelajaran umum (normatif & adaptif)
    {
        id: "nurul-aini",
        name: "Hj. Nurul Aini, S.Pd.I.",
        role: "Pendidikan Agama Islam",
        since: 2018,
        quote: "Ilmu yang bermanfaat adalah ilmu yang diamalkan.",
        bio: ["Mengampu Pendidikan Agama Islam dan Budi Pekerti di semua jenjang, sekaligus membina kegiatan keagamaan seperti tadarus pagi, salat duha berjamaah, dan peringatan hari besar Islam."],
        subjects: ["Pendidikan Agama Islam", "Budi Pekerti", "Rohis"],
        education: [{ level: "S1", field: "Pendidikan Agama Islam", school: "UIN Syarif Hidayatullah Jakarta", year: 2007 }],
        certifications: ["Sertifikat Pendidik"],
    },
    {
        id: "dedi-supriyadi",
        name: "Dedi Supriyadi, S.Pd.",
        role: "Pendidikan Pancasila",
        since: 2019,
        quote: "Jadilah warga negara yang kritis, tapi tetap santun.",
        bio: ["Mengajar Pendidikan Pancasila dengan banyak diskusi kasus nyata dan simulasi musyawarah. Beliau juga membina siswa dalam lomba debat dan cerdas cermat kebangsaan."],
        subjects: ["Pendidikan Pancasila", "Pembina Debat"],
        education: [{ level: "S1", field: "Pendidikan Pancasila dan Kewarganegaraan", school: "Universitas Pakuan", year: 2012 }],
    },
    {
        id: "rina-marlina",
        name: "Rina Marlina, S.Pd.",
        role: "Bahasa Indonesia",
        since: 2018,
        quote: "Tulisan yang baik lahir dari kebiasaan membaca.",
        bio: ["Mengajar Bahasa Indonesia dengan fokus pada menulis laporan, surat lamaran, dan presentasi, keterampilan yang langsung terpakai saat PKL. Beliau juga membina majalah dinding dan jurnalistik sekolah."],
        subjects: ["Bahasa Indonesia", "Jurnalistik Sekolah"],
        education: [{ level: "S1", field: "Pendidikan Bahasa dan Sastra Indonesia", school: "Universitas Negeri Jakarta", year: 2011 }],
        certifications: ["Sertifikat Pendidik"],
    },
    {
        id: "agus-setiawan",
        name: "Agus Setiawan, S.Si.",
        role: "Matematika",
        since: 2020,
        quote: "Matematika bukan menghafal rumus, tapi melatih cara berpikir.",
        bio: ["Mengajar Matematika terapan yang dikaitkan dengan kebutuhan tiap jurusan, mulai dari perhitungan bunga di PKM hingga logika pemrograman di RPL. Beliau juga membina siswa untuk Olimpiade Sains Nasional."],
        subjects: ["Matematika", "Pembina OSN"],
        education: [{ level: "S1", field: "Matematika", school: "Institut Pertanian Bogor", year: 2015 }],
        certifications: ["Pendidikan Profesi Guru (PPG)"],
    },
    {
        id: "dewi-lestari",
        name: "Dewi Lestari, S.Pd.",
        role: "Bahasa Inggris",
        since: 2019,
        quote: "Don't be afraid to make mistakes, be afraid of not trying.",
        bio: ["Mengajar Bahasa Inggris untuk komunikasi kerja, seperti wawancara, email profesional, dan presentasi produk. Beliau juga mendampingi siswa yang mengikuti tes TOEIC sebelum lulus."],
        subjects: ["Bahasa Inggris", "English Club", "Persiapan TOEIC"],
        education: [{ level: "S1", field: "Pendidikan Bahasa Inggris", school: "Universitas Pendidikan Indonesia", year: 2013 }],
        certifications: ["Sertifikat Pendidik", "TOEIC Score 900"],
    },
    {
        id: "siti-rahmawati",
        name: "Siti Rahmawati, S.Pd.",
        role: "Sejarah",
        since: 2021,
        quote: "Bangsa yang besar adalah bangsa yang mengenal sejarahnya.",
        bio: ["Mengajar Sejarah dengan pendekatan cerita dan kunjungan museum. Beliau mengajak siswa membuat konten video sejarah lokal Bogor bersama siswa jurusan Multimedia."],
        subjects: ["Sejarah Indonesia", "Wisata Sejarah"],
        education: [{ level: "S1", field: "Pendidikan Sejarah", school: "Universitas Negeri Jakarta", year: 2016 }],
    },
    {
        id: "rudi-hartono",
        name: "Rudi Hartono, S.Kom.",
        role: "Informatika",
        since: 2018,
        quote: "Teknologi hanya alat, yang penting adalah cara kita memakainya.",
        bio: ["Mengajar Informatika untuk kelas X, mulai dari berpikir komputasional, literasi digital, hingga dasar keamanan data. Beliau juga mengelola jaringan dan sistem informasi sekolah."],
        subjects: ["Informatika", "Literasi Digital", "Admin Sistem Sekolah"],
        education: [{ level: "S1", field: "Teknik Informatika", school: "Universitas Gunadarma", year: 2010 }],
        certifications: ["Sertifikat Pendidik", "Microsoft Office Specialist"],
    },
    {
        id: "yusuf-hidayat",
        name: "Yusuf Hidayat, S.Pd.",
        role: "Pendidikan Jasmani (PJOK)",
        since: 2019,
        quote: "Badan yang sehat membuat pikiran lebih siap belajar.",
        bio: ["Mengajar PJOK dan melatih tim basket serta futsal sekolah yang rutin mengikuti kejuaraan antar-SMK se-Kabupaten Bogor."],
        subjects: ["PJOK", "Pelatih Basket", "Pelatih Futsal"],
        education: [{ level: "S1", field: "Pendidikan Kepelatihan Olahraga", school: "Universitas Negeri Jakarta", year: 2014 }],
        certifications: ["Lisensi Pelatih Basket Perbasi", "Sertifikat Pendidik"],
    },
    {
        id: "asep-saepudin",
        name: "Asep Saepudin, S.Pd.",
        role: "Bahasa Sunda",
        since: 2020,
        quote: "Ngamumule basa Sunda téh ngajaga jati diri urang.",
        bio: ["Mengajar Bahasa Sunda sebagai muatan lokal dan membina ekstrakurikuler seni tradisional, termasuk angklung dan pencak silat."],
        subjects: ["Bahasa Sunda", "Seni Tradisional"],
        education: [{ level: "S1", field: "Pendidikan Bahasa Daerah", school: "Universitas Pendidikan Indonesia", year: 2015 }],
    },
    {
        id: "fitri-handayani",
        name: "Fitri Handayani, S.Psi.",
        role: "Bimbingan Konseling",
        since: 2018,
        quote: "Tidak apa-apa belum tahu mau jadi apa, yang penting mau mencari tahu.",
        bio: ["Mendampingi siswa dalam urusan pribadi, belajar, dan pilihan karier. Beliau menyelenggarakan tes minat bakat untuk calon siswa dan konseling karier untuk siswa kelas XII."],
        subjects: ["Bimbingan Konseling", "Konseling Karier", "Tes Minat Bakat"],
        education: [{ level: "S1", field: "Psikologi", school: "Universitas Gunadarma", year: 2012 }],
        certifications: ["Konselor Pendidikan", "Asesor Psikologi Pendidikan"],
    },

    // Guru produktif per jurusan
    {
        id: "rizky-pratama",
        name: "Rizky Pratama, S.Ds.",
        role: "Kepala Program Multimedia",
        major: "MM",
        image: fotoKaprogMM,
        since: 2018,
        quote: "Desain yang bagus bukan yang paling ramai, tapi yang paling jelas pesannya.",
        bio: [
            "Memimpin program Multimedia dan mengajar desain grafis serta fotografi. Sebelum mengajar, beliau bekerja sebagai desainer di agensi periklanan di Jakarta.",
            "Beliau membawa banyak projek nyata dari klien ke kelas, sehingga siswa sudah terbiasa dengan brief dan revisi sebelum PKL.",
        ],
        subjects: ["Desain Grafis", "Fotografi", "Projek Kreatif"],
        education: [{ level: "S1", field: "Desain Komunikasi Visual", school: "Universitas Bina Nusantara", year: 2013 }],
        certifications: ["Adobe Certified Professional", "Asesor Kompetensi BNSP"],
    },
    {
        id: "anisa-putri",
        name: "Anisa Putri, S.Sn.",
        role: "Videografi & Animasi",
        major: "MM",
        since: 2020,
        quote: "Setiap gambar bergerak dimulai dari satu sketsa di kertas.",
        bio: ["Mengajar videografi, animasi 2D, dan penyuntingan video. Beliau membina tim produksi film pendek sekolah yang beberapa kali masuk final festival film pelajar."],
        subjects: ["Videografi", "Animasi 2D", "Editing Video"],
        education: [{ level: "S1", field: "Film dan Televisi", school: "Institut Kesenian Jakarta", year: 2017 }],
        certifications: ["Adobe Certified Professional: Premiere Pro"],
    },
    {
        id: "fajar-nugroho",
        name: "Fajar Nugroho, S.Kom.",
        role: "Kepala Program RPL",
        major: "RPL",
        image: fotoKaprogRPL,
        since: 2018,
        quote: "Kode yang baik adalah kode yang bisa dibaca orang lain.",
        bio: [
            "Memimpin program Rekayasa Perangkat Lunak dan mengajar pemrograman berorientasi objek serta basis data. Beliau pernah bekerja sebagai backend developer di perusahaan rintisan teknologi finansial.",
            "Beliau juga membina Devacto RPL, tempat siswa mengerjakan aplikasi untuk kebutuhan sekolah dan UMKM sekitar.",
        ],
        subjects: ["Pemrograman Berorientasi Objek", "Basis Data", "Devacto RPL"],
        education: [{ level: "S1", field: "Teknik Informatika", school: "Universitas Pakuan", year: 2012 }],
        certifications: ["Oracle Certified Associate Java", "Asesor Kompetensi BNSP"],
    },
    {
        id: "indah-permatasari",
        name: "Indah Permatasari, S.Kom.",
        role: "Pemrograman Web & Mobile",
        major: "RPL",
        since: 2021,
        quote: "Bangun dulu yang sederhana, lalu perbaiki sedikit demi sedikit.",
        bio: ["Mengajar pemrograman web dan aplikasi mobile dengan alur kerja seperti di industri: desain antarmuka, Git, dan code review. Beliau juga mendampingi tim lomba LKS bidang web technologies."],
        subjects: ["Pemrograman Web", "Pemrograman Mobile", "Pembina LKS Web"],
        education: [{ level: "S1", field: "Sistem Informasi", school: "Universitas Gunadarma", year: 2018 }],
        certifications: ["Google Associate Android Developer", "Dicoding Front-End Expert"],
    },
    {
        id: "budi-santoso",
        name: "Budi Santoso, S.T.",
        role: "Kepala Program TKJ",
        major: "TKJ",
        image: fotoKaprogTKJ,
        since: 2018,
        quote: "Jaringan yang rapi mencerminkan teknisi yang teliti.",
        bio: [
            "Memimpin program Teknik Komputer dan Jaringan serta mengajar administrasi jaringan dan fiber optik. Beliau berpengalaman sebagai teknisi jaringan di penyedia layanan internet sebelum bergabung dengan sekolah.",
        ],
        subjects: ["Administrasi Jaringan", "Fiber Optik", "MikroTik"],
        education: [{ level: "S1", field: "Teknik Elektro", school: "Universitas Pakuan", year: 2011 }],
        certifications: ["MikroTik Certified Network Associate (MTCNA)", "Cisco CCNA", "Asesor Kompetensi BNSP"],
    },
    {
        id: "hendra-wijaya",
        name: "Hendra Wijaya, S.Kom.",
        role: "Administrasi Server & Jaringan",
        major: "TKJ",
        since: 2020,
        quote: "Sebelum memperbaiki, pahami dulu kenapa bisa rusak.",
        bio: ["Mengajar administrasi server Linux, layanan jaringan, dan keamanan jaringan dasar. Beliau juga mengelola server praktik yang dipakai siswa TKJ dan RPL."],
        subjects: ["Administrasi Server", "Keamanan Jaringan", "Linux"],
        education: [{ level: "S1", field: "Teknik Informatika", school: "Universitas Ibn Khaldun Bogor", year: 2016 }],
        certifications: ["MikroTik Certified Routing Engineer (MTCRE)", "Linux Essentials (LPI)"],
    },
    {
        id: "maya-sari",
        name: "Maya Sari, S.E.",
        role: "Kepala Program PKM",
        major: "PKM",
        image: fotoKaprogPKM,
        since: 2018,
        quote: "Kepercayaan nasabah dibangun dari ketelitian hal-hal kecil.",
        bio: [
            "Memimpin program Perbankan dan Keuangan Mikro serta mengajar layanan perbankan dan koperasi. Beliau pernah bekerja sebagai customer service dan teller di bank daerah selama enam tahun.",
        ],
        subjects: ["Layanan Perbankan", "Koperasi & Lembaga Keuangan Mikro", "Bank Mini Sekolah"],
        education: [{ level: "S1", field: "Manajemen Keuangan", school: "Universitas Pakuan", year: 2010 }],
        certifications: ["Sertifikasi Profesi Perbankan (LSPP)", "Asesor Kompetensi BNSP"],
    },
    {
        id: "lina-kusumawati",
        name: "Lina Kusumawati, S.E., Ak.",
        role: "Akuntansi Keuangan",
        major: "PKM",
        since: 2019,
        quote: "Angka tidak pernah bohong, asal dicatat dengan jujur.",
        bio: ["Mengajar akuntansi keuangan, perpajakan, dan aplikasi akuntansi komputer. Beliau membimbing siswa mengelola pembukuan Bank Mini dan koperasi sekolah."],
        subjects: ["Akuntansi Keuangan", "Perpajakan", "Aplikasi Akuntansi"],
        education: [{ level: "S1", field: "Akuntansi", school: "Universitas Indonesia", year: 2013 }],
        certifications: ["Brevet Pajak A & B", "Chartered Accountant (CA)"],
    },
    {
        id: "arif-rahman",
        name: "Arif Rahman, S.T.",
        role: "Kepala Program TOI",
        major: "TOI",
        image: fotoKaprogTOI,
        since: 2022,
        quote: "Otomasi bukan menggantikan manusia, tapi membuat kerja lebih aman dan tepat.",
        bio: [
            "Memimpin program Teknik Otomasi Industri dan mengajar sistem kontrol serta pneumatik. Beliau berpengalaman sebagai maintenance engineer di pabrik otomotif di Cikarang.",
        ],
        subjects: ["Sistem Kontrol", "Pneumatik & Hidrolik", "Mekatronika"],
        education: [{ level: "S1", field: "Teknik Elektro", school: "Universitas Trisakti", year: 2014 }],
        certifications: ["Siemens Mechatronic Systems Certification", "Asesor Kompetensi BNSP"],
    },
    {
        id: "joko-purnomo",
        name: "Joko Purnomo, S.T.",
        role: "PLC & Listrik Industri",
        major: "TOI",
        since: 2022,
        quote: "Keselamatan kerja selalu nomor satu, baru kecepatan.",
        bio: ["Mengajar pemrograman PLC, instalasi listrik industri, dan K3 kelistrikan. Beliau menyusun modul praktik PLC bersama mitra industri agar sesuai dengan mesin yang dipakai di pabrik."],
        subjects: ["Pemrograman PLC", "Instalasi Listrik Industri", "K3 Listrik"],
        education: [
            { level: "S1", field: "Teknik Elektro", school: "Universitas Pancasila", year: 2016 },
            { level: "D3", field: "Teknik Listrik", school: "Politeknik Negeri Jakarta", year: 2010 },
        ],
        certifications: ["Teknisi PLC Siemens S7", "Ahli K3 Listrik (Kemnaker)"],
    },
];

export const allTeachers = [...leaders, ...teachers];

// Kepala program sebuah jurusan, dicari dari jabatannya ("Kepala Program ..."). Dipakai di halaman jurusan & Profil Guru
export const kaprogOf = (code: string) =>
    teachers.find((teacher) => teacher.major === code && teacher.role.startsWith("Kepala Program"));

// Label kelompok guru, tampil sebagai eyebrow di halaman profil
export function teacherGroup(teacher: Teacher) {
    if (leaders.includes(teacher)) return "Pimpinan Sekolah";
    return teacher.major ? `Guru Produktif ${teacher.major}` : "Guru Mata Pelajaran Umum";
}
